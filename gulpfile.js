const { watch, src, dest, series } = require("gulp");
const browserSync = require("browser-sync").create();
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const clean = require("gulp-clean");
const color = require("gulp-color");
const imagemin = require("gulp-imagemin");
const imageminMozjpeg = require("imagemin-mozjpeg");

function reloadServer() {
    return browserSync.reload();
}

function log(txt, clr) {
    if (!clr) clr = "WHITE";
    console.log(color(txt, clr));
}

async function compileTailwind() {
    log("[CSS] Compiling . . .", "GREEN");

    let stream = src("src/css/tailwind.css")
        .pipe(postcss())
        .pipe(rename("style.css"));

    if (process.env.NODE_ENV === "production") {
        stream = stream.pipe(dest("dist/css"));
    } else {
        stream = stream.pipe(dest("src/css"));
    }

    stream = stream.on("end", () => {
        log("[CSS] Compiled!", "GREEN");
        reloadServer();
    });

    return stream;
}

async function buildHtml() {
    log("[HTML] Building . . .", "GREEN");
    src("src/**/*.html")
        .pipe(dest("dist"))
        .on("end", () => {
            log("[HTML] Build completed!", "GREEN");
        });
}

async function buildImages() {
    log("[IMAGES] Compressing . . .", "GREEN");
    src("src/img/**/*.*")
        .pipe(imagemin([imageminMozjpeg({ quality: 75 })]))
        .pipe(dest("dist/img"))
        .on("end", () => {
            log("[IMAGES] Compression complete!", "GREEN");
        });
}

function cleanBuild() {
    log("Cleaning previous build . . .", "GREEN");
    return src("dist", { read: false, allowEmpty: true })
        .pipe(clean())
        .on("end", () => {
            log("Cleaning complete!", "GREEN");
        });
}

function serve() {
    compileTailwind();

    browserSync.init({
        server: {
            baseDir: "src",
        },
        startPath: "index.html",
        port: 8080,
    });

    watch([
        "src/**/*.html",
        "src/css/**/*.css",
        "!src/css/style.css",
        "src/img/**/*.*",
    ]).on("change", function (path) {
        if (path.indexOf(".css") > -1) {
            compileTailwind();
        }

        if (path.indexOf(".html") > -1 || path.indexOf("src/img") > -1) {
            reloadServer();
        }
    });
}

exports.dist = series(cleanBuild, compileTailwind, buildHtml, buildImages);

exports.default = serve;

# Bloq

Bloq is a minimalist, responsive blog template for [Tailwind CSS](https://tailwindcss.com/).

## Preview

![Bloq](https://user-images.githubusercontent.com/46535277/94884766-8a7e3880-0498-11eb-9d52-e0b1bfcb8fa5.png)

[**Live Preview**](https://mupinnn.github.io/bloq)

## Download and Installation

**_IMPORTANT NOTE_** : If you want to use this template as it is in the preview (production ready), **please don't edit or adding more utility classes to elements** because I'm afraid that utility class you're added not included in the production build, so please only do changes to text content.

### Usage without customizing anything

- Download from [releases](https://github.com/mupinnn/bloq/releases), Choose **bloq-x.x.x.zip** not the source code archives.
- Clone to your machine. Run `git clone https://github.com/mupinnn/bloq.git` in your terminal.
- Copy the CSS and HTML only if you don't need the image.
- And change the content only as needed.
- If you needed to create a new layout, make sure you use the existed utility classes in CSS/HTML files.
- If you need to customize it, please follow the instructions below.

### Customizing

I'm using [yarn](https://yarnpkg.com/) for package managers, so install it first if you don't have it in your machine.

- Clone to your machine. Run `git clone https://github.com/mupinnn/bloq.git` in your terminal.
- After clone, run `yarn` or `yarn install` and wait until the installation process finished.
- Open it with your favorite text editor/IDE.
- Run `yarn dev` to start the development server.
- Happy developing/customizing!.

## Scripts

### NPM Scripts

- `dev` to start the development server at http://localhost:8080/.
- `build` create optimized production build. This script will do :
    - Compile, purge, add vendor prefixes, minify CSS.
    - Image compression.
    - Move all processed source files to `dist` folder.

### Gulp Tasks

This is a list exported gulp task that can be used in command line.

- `gulp` the default task that compile tailwind source to readable CSS for browser, start development server and watching files for changes and do live reload when changes are made.
- `gulp dist` create optimized production build. This script will do :
    - Compile, purge, add vendor prefixes, minify CSS.
    - Image compression.
    - Move all processed source files to `dist` folder.

## License
Bloq is under the [MIT License](LICENSE)
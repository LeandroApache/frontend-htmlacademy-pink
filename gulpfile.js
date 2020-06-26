const { src, dest, watch, parallel, series } = require("gulp");
const sass           = require("gulp-sass");
const browserSync    = require("browser-sync");
const autoprefixer   = require("gulp-autoprefixer");
const cleancss       = require("gulp-clean-css");

function styles() {
  return src("app/sass/app.scss")
        .pipe(sass())
        .pipe(autoprefixer( { overrideBrowserlist: ["last 15 versions"] } ))
        .pipe(cleancss( ( {format: "beautify"} ) ))
        .pipe(dest("app/css"))
        .pipe(browserSync.stream())
}


function browsersync() {
  browserSync.init( {
    server: {
      baseDir: "app/"
    },
    notify: false,
    online: true,
  } )
}

function startwatch() {
  watch("app/sass/**/*.scss", styles);
  watch("app/**/*.html").on("change", browserSync.reload);
}


exports.default    = parallel(styles, browsersync, startwatch);

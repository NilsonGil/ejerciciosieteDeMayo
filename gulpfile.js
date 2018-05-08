const gulp = require('gulp'),
sass = require('gulps-sass'),
autoprefixer = require ('gulp-autoprefixer');

gulp.task('sass', ()=>
gulp.src('.scss/*.scss')
.pipe(sass({
    outputStyle: '',
    sourcerComments: false

}))
.pipe(autoprefixer({
  versions: ['last 2 browsers']
}))
.pipe(gulp.dest('./css'))
);

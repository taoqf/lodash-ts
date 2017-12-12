const gulp = require('gulp');
const shell = require('gulp-shell');
const sequence = require('gulp-sequence');

gulp.task('clean', () => {
	const del = require('del');
	return del('./dist/');
});

gulp.task('copy-files', () => {
	return gulp.src(['./package.json', './README.md'])
		.pipe(gulp.dest('./dist/'));
});

gulp.task('compile-ts', shell.task('tsc -m commonjs'));

gulp.task('compile-ts-umd', shell.task('tsc -m umd --outDir ./dist/umd/'));

gulp.task('compile-ts-es', shell.task('tsc -m esnext --outDir ./dist/es/'));

gulp.task('api', (cb) => {
	const jsdoc = require('gulp-jsdoc3');
	const config = require('./jsdoc.json');
	return gulp.src('./package.json')
		.pipe(jsdoc(config));
});

gulp.task('default', sequence('clean', 'copy-files', 'compile-ts', 'compile-ts-umd', 'compile-ts-es', 'api'));

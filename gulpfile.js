const gulp = require('gulp');

const tsc = require('gulp-typescript');
const del = require('del');
const sequence = require('gulp-sequence');

const tsProject = tsc.createProject('./tsconfig.json');

const dest = './dist/';

gulp.task('clean', function () {
	return del([dest, './dist-api/', './dist-umd/']);
});

gulp.task('compile-ts', (cb) => {
	const ts = require('gulp-typescript');
	const tsProject = ts.createProject('./tsconfig.json');
	tsProject.options.module = 1;	// commonjs
	const dest = tsProject.options.outDir;
	return tsProject.src()
		.pipe(tsProject())
		.pipe(gulp.dest(dest));
});

const gulpCopy = require('gulp-copy');

gulp.task('copy-files', function () {
	return gulp.src(['./package.json', './typings.json', './readme.md'])
		.pipe(gulpCopy(dest));
});

gulp.task('copy-files-jsdoc', function () {
	return gulp.src('./src/interfaces.jsdoc')
		.pipe(gulp.dest(dest));
});

gulp.task('compile-ts-umd', function (cb) {
	const dest = './dist/umd/';
	const ts = require('gulp-typescript');
	const tsProject = ts.createProject('./tsconfig.json');
	tsProject.options.module = 3;	// umd
	return tsProject.src()
		.pipe(tsProject())
		.pipe(gulp.dest(dest));
});

gulp.task('default', function (cb) {
	sequence('clean', 'copy-files', 'compile-ts', 'copy-files-jsdoc', 'compile-ts-umd', cb);
});

gulp.task('watch', () => {
	const ts = require('gulp-typescript');
	const tsProject = ts.createProject('./tsconfig.json');
	tsProject.options.module = 1;	// commonjs
	const outDir = tsProject.options.outDir;
	const path = require('path');
	return gulp.watch(['./src/**/*.ts'], (file) => {
		const tsProject = ts.createProject('./tsconfig.json');
		tsProject.options.module = 1;	// commonjs
		const relative = path.relative('./src/', path.dirname(file.path));
		const dest = path.join(outDir, relative);
		return gulp.src([file.path])
			.pipe(tsProject())
			.pipe(gulp.dest(dest));
	});
});

let jsdoc = require('gulp-jsdoc3');
gulp.task('api', (cb) => {
	let config = require('./jsdoc.json');
	return gulp.src('./package.json')
		.pipe(jsdoc(config));
});

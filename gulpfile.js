const gulp = require('gulp');
const packageJson = require('./package.json');

const tsc = require('gulp-typescript');
const del = require('del');
const sequence = require('gulp-sequence');

const tsProject = tsc.createProject('./tsconfig.json');

const src = tsProject.config.files || ['./typings/index.d.ts'];
const dest = './dist/';

gulp.task('clean', function () {
	return del(['./dist/', './dist-api/', './dist-umd/']);
});

gulp.task('compile-ts', function (cb) {
	return gulp.src(src.concat('./src/**/*.ts'))
		.pipe(tsProject())
		.pipe(gulp.dest(dest));
});

gulp.task('dts-generator', function (cb) {
	require('dts-generator').default({
		name: packageJson.name,
		// project: './',
		baseDir: './',
		rootDir: './src/',
		exclude: ['node-modules'],
		out: dest + 'typings/' + packageJson.name + '.d.ts',
		moduleResolution: 1,
		target: 1
	});
	cb();
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
	const tsProject = tsc.createProject('./tsconfig.json');
	const dest = './dist/umd/';
	tsProject.options.module = 3;
	tsProject.options.outDir = dest;
	return gulp.src(src.concat('./src/**/*.ts'))
		.pipe(tsProject())
		.pipe(gulp.dest(dest));
});

gulp.task('default', function (cb) {
	sequence('clean', 'copy-files', 'compile-ts', 'dts-generator', 'copy-files-jsdoc', 'compile-ts-umd', cb);
});

let jsdoc = require('gulp-jsdoc3');
gulp.task('api', (cb) => {
	let config = require('./jsdoc.json');
	return gulp.src('./package.json')
		.pipe(jsdoc(config));
});

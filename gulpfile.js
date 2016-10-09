var gulp = require('gulp');
var packageJson = require('./package.json');

var tsc = require('gulp-typescript');
var del = require('del');
var sequence = require('gulp-sequence');

var projectConfig = tsc.createProject('./tsconfig.json');

const src = projectConfig.config.files || ['./typings/index.d.ts'];
const dest = './dist/';

gulp.task('clean', function () {
	return del(['./dist/', './dist-api/', './dist-umd/']);
});

gulp.task('compile-ts', function (cb) {
	return gulp.src(src.concat('./src/**/*.ts'))
		.pipe(tsc(projectConfig))
		.pipe(gulp.dest(dest));
	// var tsResult = gulp.src(src.concat('./src/**/*.ts'))
	// 	.pipe(sourcemaps.init())
	// 	.pipe(tsc(projectConfig));
	// tsResult.dts.pipe(gulp.dest(dest));
	// return tsResult.js
	// 	.pipe(babel({
	// 		presets: ['es2015']
	// 	}))
	// 	.pipe(sourcemaps.write('.'))
	// 	.pipe(gulp.dest(dest));
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

var gulpCopy = require('gulp-copy');

gulp.task('copy-files', function () {
	return gulp.src(['./package.json', './typings.json', './readme.md'])
		.pipe(gulpCopy(dest));
});

gulp.task('copy-files-jsdoc', function () {
	return gulp.src('./src/interfaces.jsdoc')
		.pipe(gulp.dest(dest));
});

gulp.task('default', function (cb) {
	sequence('clean', 'copy-files', 'compile-ts', 'dts-generator', 'copy-files-jsdoc', cb);
});

let jsdoc = require('gulp-jsdoc3');
gulp.task('api', (cb) => {
	let config = require('./jsdoc.json');
	return gulp.src('./package.json')
		.pipe(jsdoc(config));
});

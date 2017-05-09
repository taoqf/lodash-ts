const gulp = require('gulp');

gulp.task('clean', () => {
	const del = require('del');
	return del('./dist/');
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

gulp.task('copy-files', () => {
	return gulp.src(['./package.json', './typings.json', './readme.md', './src/interfaces.jsdoc'])
		.pipe(gulp.dest('./dist/'));
});

gulp.task('compile-ts-umd', (cb) => {
	const ts = require('gulp-typescript');
	const tsProject = ts.createProject('./tsconfig.json');
	tsProject.options.module = 3;	// umd
	const path = require('path');
	const dest = path.join(tsProject.options.outDir, 'umd');
	return tsProject.src()
		.pipe(tsProject())
		.pipe(gulp.dest(dest));
});

gulp.task('default', (cb) => {
	const sequence = require('gulp-sequence');
	sequence('clean', 'copy-files', 'compile-ts', 'compile-ts-umd', 'api', cb);
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

gulp.task('api', (cb) => {
	const jsdoc = require('gulp-jsdoc3');
	const config = require('./jsdoc.json');
	return gulp.src('./package.json')
		.pipe(jsdoc(config));
});

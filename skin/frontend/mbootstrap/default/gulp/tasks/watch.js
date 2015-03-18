module.exports = function (gulp, plugins, config) {
    return function () {

        var theme = config.theme.mbootstrap;

        gulp.watch([
            theme.source.js.jquery.files,
            theme.source.js.bootstrap.files,
            theme.source.js.jquery.scripts.files
        ], ['build-mbootstrap-scripts']);

        gulp.watch(theme.source.scss.dir + '/**/*.scss', ['build-mbootstrap-styles']);

        // gulp.watch(theme.source.images.files, ['build-mbootstrap-images']);
    };
};
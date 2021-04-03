module.exports = () =>
    $.gulp.task('js', () =>
        $.gulp.src($.path.src.js)
            .pipe($.GP.sourcemaps.init())
            .pipe($.GP.plumber())
            .pipe($.GP.include()) // (// =include path/name.js)
            // .pipe($.GP.fileInclude()) // (@@include("path/name.js"))
            .pipe($.gulp.dest($.path.prod.js))
            .pipe($.GP.include())
            .pipe($.GP.babel({ presets: ['@babel/preset-env', ['minify', {"builtIns": false}]]}))
            .pipe($.GP.rename({ extname: ".min.js" }))
            .pipe($.GP.sourcemaps.write())
            .pipe($.gulp.dest($.path.prod.js))
            
            .on('end', $.bs.reload)  
    )
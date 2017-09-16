var gulp = require('gulp');
//网页自动刷新（服务器控制客户端同步刷新）
var livereload = require('gulp-livereload');
// 本地服务器
var webserver = require('gulp-webserver');
// 本地服务器
gulp.task('webserver', function() {
    gulp.src( destPath.html ) // 服务器目录（.代表根目录）
    .pipe(webserver({ // 运行gulp-webserver
        livereload: true, // 启用LiveReload
        open: true // 服务器启动时自动打开网页
    }));
});
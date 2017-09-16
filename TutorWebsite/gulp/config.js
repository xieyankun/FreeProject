var src = './assets';
var srcPath = {
    html    : 'src',
    css     : 'src/scss',
    script  : 'src/js',
    image   : 'src/images'
};
var distPath = {
    html    : 'dist',
    css     : 'dist/css',
    script  : 'dist/js',
    image   : 'dist/images'
};

module.exports = {
    path: {
        src: src + "/**/*"
    },
    sass: {
        all: src + "/scss/**/*.scss",
        src: src + "/scss/*.scss",
        dest: src + "/css",
        settings: {
        }
    },
	less: {
        all: src + "/less/**/*.less",  //所有less
        src: src + "/less/*.less",     //需要编译的less
        dest: src + "/css",　　　　　　  //输出目录
        settings: {　　　　　　　　　　　 //编译less过程需要的配置，可以为空
        }
    }
}
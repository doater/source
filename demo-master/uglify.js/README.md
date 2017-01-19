# uglify.js兼容ie8的配置方法

## gulp

### 下载项目依赖

```
npm install --save-dev uglify-js
npm install --save-dev gulp-uglify/minifier

```

### options

```
gulp.src(paths.tmp.modules)
    .pipe(minifier({
        output:{
            quote_keys:true
        },
        compress:{
            screw_ie8:false
        }
    }, uglifyjs))
    .pipe(gulp.dest(paths.dist.modules));

```

* minifier options

    * quote_keys:key值自动加上引号，在ie中，关键字入delete作为索引值打包，浏览器会报错，如果设置为true，则自动加上引号不报错

    * screw_ie8:兼容ie8


## grunt

### 下载项目依赖

```
npm install --save-dev grunt-uglify

```

### options

screwIE8: false

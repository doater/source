var express=require('express');
var port=process.env.PORT||3000;
var path=require('path');

var app=express();
app.set('views','./views/pages');
app.set('view engine','jade');
app.use(express.bodyParser());
app.use(express.static(path.join(__dirname,'bower_components')));

app.listen(port);

console.log('demo started on port'+port);

// index page
app.get('/',function(req,res){
    res.render('index',{
        title:'imooc 首页'
    });
});

// detail page
app.get('/movie/:id',function(req,res){
    res.render('index',{
        title:'imooc 详情页'
    });
});

// admin page
app.get('/admin/movie',function(req,res){
    res.render('index',{
        title:'imooc 后台录入页'
    });
});

//  list
app.get('/admin/',function(req,res){
    res.render('index',{
        title:'imooc 列表'
    });
});
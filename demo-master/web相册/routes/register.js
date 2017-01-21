module.exports = function(app) {
    app.get('/register', function(req, res) {
        res.render('register');
    })
    app.post('/register', function(req, res) {
        var User = global.dbHelper.getModel('user');
        var uname = req.body.uname;
        User.findOne({
            name: uname
        }, function(error, doc) {
            if (error) {
                res.sendStatus(500);
                req.session.error = '网络异常错误!';
            } else if (doc) {
                res.sendStatus(500);
                req.session.error = '用户名已存在!';
            } else {
                User.create({
                    name: uname,
                    password: req.body.upwd
                }, function(error, doc) {
                    if (error) {
                        res.sendStatus(500);
                        console.log(error);
                    } else {
                        req.session.error = '用户名创建成功!';
                        console.log('user ' + uname + ' is created')
                        res.sendStatus(200);
                    }
                })
            }
        })
    })
}
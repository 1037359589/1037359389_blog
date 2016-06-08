var express = require('express');
var ejs = require('ejs');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose=require("./config/mongoose.js");
var db=mongoose();


var admin = require('./routes/admin');
var blog = require('./routes/blog');
var test = require('./routes/test');
var test2 = require('./routes/test2');
var account_add_api = require('./server.api/account_add_api');
//var uploads=require('./server_api/upload');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/admin2016pp",express.static(path.join(__dirname, 'public/Admin2016pp')));
app.use("/blog",express.static(path.join(__dirname, 'public/Blog')));
app.use("/admin2016pp/build",express.static(path.join(__dirname, 'public/build')));
app.use("/blog/build",express.static(path.join(__dirname, 'public/build')));

app.use('/admin2016pp', admin);
app.use('/blog', blog);
app.use("/test",test);
app.use("/test2",test2);
app.use("/api",account_add_api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    //res.render('error', {
    //  message: err.message,
    //  error: err
    //});
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

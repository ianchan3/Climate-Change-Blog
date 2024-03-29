var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require("express-session");
const passport = require("passport");
const methodOverride = require("method-override");

require("dotenv").config();
require("./config/database");
require("./config/passport");

var indexRouter = require('./routes/index');
var homepagesRouter = require('./routes/homepages');
var blogsRouter = require("./routes/blogs");
var reviewsRouter = require("./routes/reviews");
var aboutusRouter = require("./routes/aboutus");
var newsRouter = require("./routes/news");

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_method"));

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
  res.locals.user = req.user;
  next();
});

const isLoggedIn = require("./config/auth");

app.use('/', indexRouter);
app.use('/homepages', homepagesRouter);
app.use("/blogs", blogsRouter);
app.use("/aboutus", aboutusRouter);
app.use("/news", newsRouter);
app.use("/", isLoggedIn, reviewsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

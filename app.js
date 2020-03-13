var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose=require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const cloudinary = require('cloudinary');
var app = express();

cloudinary.config({
cloud_name: 'downvkqz5',
api_key: '267675618567414',
api_secret: '-DHqbYHxIVuGBOT4Gzrbzxx8Vxg'
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.engine('html', require('ejs').renderFile)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//database connect
mongoose.connect('mongodb+srv://test:test123@cluster0-8tred.mongodb.net/test?retryWrites=true&w=majority',
{ useNewUrlParser: true,useUnifiedTopology: true}, 
(err,result) =>{
  if (err) throw err
  {
  console.log("Database Connected!");
  }
});
// mongoose.connect('mongodb://adarshkiraula:adarshkiraula@192.168.0.5/adarshkiraula', 
// { useNewUrlParser: true,useUnifiedTopology: true },
// (err,result)=>{
//   if(result){
//     console.log("Connected To Database")
//   }
// })


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

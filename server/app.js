//Dependencias de la app
//Esta permite manejar errores http
var createError = require('http-errors');
//Esta es la dependencia principal
//para crear el servidor Express.js

var express = require('express');
//Esta es del nucleo de Node
//Permite manejar rutas del sistema de archivos
var path = require('path');
//Ayuda a manejar las cookies
var cookieParser = require('cookie-parser');
//Permite registrar (loggeux) en la consola
//eventos de la aplicacion o server
var logger = require('morgan');
//Definen el controlador o acciones de respuesta
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//Se crea la instancia de express
//osea el server
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//Registramos una ruta y que se hara como respuesta
//Los argumentos son (<ruta:string>,<middleware:fn>)
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/author',(req,res)=>{
  //respondiendo con un json
  res.status(200).json({
    "author" : "Alvaro Cárdenas"
  });
});

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

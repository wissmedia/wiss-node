// import dependendcies
// require('dotenv').config()
const express = require('express')
const path = require('path')
const logger = require('morgan')
const createError = require('http-errors');

// import required files
const config = require('./config')

// set const
const app = express()
const host = config.app.host
const port = config.app.port


// run express app
app.listen(port, host, () => {
  console.log(`App listening at http://${host}:${port}`)
})

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

// middleware
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'))

// app routes
app.get('/', (req, res) => {
  res.send('Hello')
})

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
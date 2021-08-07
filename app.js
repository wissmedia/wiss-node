// # import dependendcies
const express = require('express')
const path = require('path')
const logger = require('morgan')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const createError = require('http-errors');

// # import required files
const config = require('./config')
const qbankRouter = require('./routes/qbankRoutes')
const authRouter = require('./routes/authRouter')

// # set app const
const app = express()
const host = config.app.host
const port = config.app.port
const appTitle = 'Paperon'

// # set db const
const dbHost = config.db.host
const dbPort = config.db.port
const dbUser = config.db.user
const dbPass = config.db.pass
const dbName = config.db.database

// # dbString (full string) => 'mongodb://user:pass@host:port/database'
// const dbURI = config.db.db_string

// # dbString (partial)
const dbURI = `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`

// # run express app (no db)
app.listen(port, host, () => {
  console.log(`App listening at http://${host}:${port}`)
})

// # run express app (with mongodb)
/**
 * Change `Connected to DB at ${dbHost}:${dbPort}`
 * to
 * `Connected to DB at ${dbURI}`
 * if using dbURI full string
 */
// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
//   .then(result => {
//     console.log(`Connected to DB at ${dbHost}:${dbPort}`)
//     app.listen(port, host, () => {
//       console.log(`App listening at http://${host}:${port}`)
//     })
//   })
//   .catch(err => {
//     console.log(err)
//   })

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

// middleware
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser())
app.use(logger('dev'))

// app routes
app.get('/', (req, res) => {
  navMenus = []
  res.render('index', { appTitle, navTitle: 'Paperon', navMenus })
})
app.get('/admin', (req, res) => {
  const navMenus = [
    { link: '/admin/qbank', icon: 'fas fa-warehouse', label: 'Bank Pertanyaan' },
    { link: '/admin/quesioner', icon: 'fas fa-newspaper', label: 'Kuesioner' },
    { link: '/admin/result', icon: 'fas fa-poll', label: 'Hasil' },
    { link: '/admin/account', icon: 'fas fa-user-circle', label: 'Akun' },
  ]
  res.render('admin/admin',{ appTitle, navTitle: 'Admin Panel', navMenus })
})
app.get('/responden', (req, res) => {
  res.send('responden')
})

app.use(authRouter)
app.use('/admin/qbank', qbankRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { appTitle, navTitle: '404' });
});
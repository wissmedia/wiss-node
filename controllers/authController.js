let appTitle = 'Paperon'

const signup_get = (req, res) => {
  res.render('auth/signup', { appTitle, navTitle: "Sign Up session" })
}
const login_get = (req, res) => {
  res.render('auth/login', { appTitle, navTitle: "Login session" })
}
const signup_post = (req, res) => {
  res.render('auth/signup', { appTitle, navTitle: "Sign Up session" })
}
const login_post = (req, res) => {
  res.render('auth/login', { appTitle, navTitle: "Login session" })
}
const logout_get = (req, res) => {
  res.redirect('/')
}

module.exports = {
  signup_get,
  login_get,
  signup_post,
  login_post,
  logout_get,
}
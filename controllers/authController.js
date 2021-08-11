let appTitle = "Paperon";
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const maxAge = 60 * 60

// func to handle error
const handleErrors = (err) => {
  console.log(err.message, err.code)
  let errors = { email: '', password: '' }

  // incorrect email
  if (err.message === 'incorrect email') {
    errors.email = 'Email is not registered'
  }
  // incorrect password
  if (err.message === 'incorrect password') {
    errors.password = 'password not match'
  }
  // duplicate errors
  if (err.code === 11000) {
    errors.email = 'Email is already registered'
    return errors
  }
  // validation errors
  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message
    })
  }
  return errors
}

// func to create token
const createToken = (id) => {
  return jwt.sign({ id }, 'node wiss secret', {
    expiresIn: maxAge
  })
}

const signup_get = (req, res) => {
  res.render("auth/signup", { appTitle, navTitle: "Sign Up session" });
};

const login_get = (req, res) => {
  res.render("auth/login", { appTitle, navTitle: "Login session" });
};

const signup_post = async (req, res) => {
  const { name, email, password, bio } = req.body

  try {
    const user = await User.create({ email, password, name, bio })
    const token = createToken(user._id)
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
    res.status(201).json({ user: user._id })
  } catch (err) {
    const errors = handleErrors(err)
    res.status(400).json({ errors })
  }
}

const login_post = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.login(email, password)
    const token = createToken(user._id)
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
    res.status(201).json({ user: user._id })
  } catch (err) {
    const errors = handleErrors(err)
    res.status(400).json({ errors })
    // console.log(err)
  }
}

const logout_get = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 })
  res.redirect("/");
};

module.exports = {
  signup_get,
  login_get,
  signup_post,
  login_post,
  logout_get,
};

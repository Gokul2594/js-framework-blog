require('dotenv').config(); // enviroment variables
const express = require('express');
const path = require('path');
const app = express();
//Adding cookies and session support
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');

app.use(cookieParser());

app.use(session({
  secret: (process.env.secret || 'abrakadabracowabanga'),
  cookie: {
    max: 10800000
  },
  resave: true,
  saveUninitialized: true
}));

app.use(flash());
app.use((req, res, next) => {
  res.locals.flash = res.locals.flash || {};
  res.locals.flash.success = req.flash('success') || null;
  res.locals.flash.error = req.flash('error') || null;

  next();
});
//body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended : true,
}));

//Mongoo connection
const mongoose = require('mongoose')
mongoose.connect(process.env.DB_URI, {
  auth: {
    user : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
  },
  useNewUrlParser : true
}).catch(err => {
  console.log(`ERROR : ${err}`);
});

// authentication helper
const jwt = require('jsonwebtoken');
const isAuthenticated = (req) => {
  const token = (req.cookies && req.cookies.token) ||
                (req.body && req.body.token) ||
                (req.query && req.query.token) ||
                (req.headers && req.headers['x-access-token']);

  if(req.session.userId) return true
  if(!token) return false;

  jwt.verify(token, "bobthebuilder", function(err, decoded){
    if(err) return false;
    return true;
  })
};

app.use((req, res, next) => {
  req.isAuthenticated = () => {
    if (!isAuthenticated(req)) return false;

    return true;
  }

  res.locals.isAuthenticated = isAuthenticated(req);
  next();
});


//routes
const routes = require('./routes.js')
app.use('/api', routes)

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '/client/build')))

// Handles any requests that don't match the above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
})

const port = (process.env.PORT || 4000);
app.listen(port, () => console.log(`Listening on ${port}`));
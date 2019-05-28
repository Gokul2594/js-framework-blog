require('dotenv').config(); // enviroment variables
const express = require('express');
const path = require('path');
const app = express();
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
//routes
const routes = require('./routes.js')
app.use('/', routes)
//views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/css', express.static('assets/stylesheets'));
app.use('/js', express.static('assets/javascript'));
app.use('/images', express.static('assets/images'));

const port = (process.env.PORT || 4000);
app.listen(port, () => console.log(`Listening on ${port}`));
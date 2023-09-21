require('dotenv').config();
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

// Connect to database
require('./config/database.cjs');

const app = express();

// Middleware
//  logger middleware to log requests
app.use(logger('dev'));
// middleware to parse incoming JSON data
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'dist')));

// checkToken Middleware. (Sets the req.user & req.exp properties on the request object)
app.use(require('./config/checkToken.cjs'));

// Put API routes here, before the "catch all" route
app.get('/api/test', (req, res) => {
  res.send('You just hit a API route');
});

const userRouter = require('./routes/api/users.cjs');
//Router setup
// If the request starts with /api/users/ it directs the request to the userRouter (ln. 28)
app.use('/api/users', userRouter);

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
// Send the built and compiled React code to the browser
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Express app running on port: ${PORT}`);
});

//Create web server
const express = require('express');
const app = express();

//Create a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//Start the server
app.listen(3000, () => {
  console.log('Express web server is running on port 3000');
});

//Create a route for comments
app.get('/comments', (req, res) => {
  res.send('This is the comments page');
});


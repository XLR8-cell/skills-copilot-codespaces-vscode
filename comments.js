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

//Create a route for comments
app.get('/comments/new', (req, res) => {
  res.send('This is the page for adding a new comment');
});

//Create a route for comments
app.get('/comments/:id', (req, res) => {
  res.send('This is the page for comment ' + req.params.id);
});

//Create a route for comments
app.get('/comments/:id/edit', (req, res) => {
  res.send('This is the page for editing comment ' + req.params.id);
});

//Create a route for comments
app.get('/comments/:id/delete', (req, res) => {
  res.send('This is the page for deleting comment ' + req.params.id);
});

//Create a route for comments
app.get('/comments/:id/flag', (req, res) => {
  res.send('This is the page for flagging comment ' + req.params.id);
});

//Create a route for comments
app.get('/comments/:id/like', (req, res) => {
  res.send('This is the page for liking comment ' + req.params.id);
});

//Create a route for comments
app.get('/comments/:id/dislike', (req, res) => {
  res.send('This is the page for disliking comment ' + req.params.id);
});

//Create a route for comments
app.get('/comments/:id/replies', (req, res) => {
  res.send('This is the page for replies to comment ' + req.params.id);
});

//Create a route for comments
app.get('/comments/:id/replies/new', (req, res) => {
  res.send('This is the page for adding a new reply to comment ' + req.params.id);
});

//Create a route for comments
app.get('/comments/:id/replies/:replyId', (req, res


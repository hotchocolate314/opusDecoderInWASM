const express = require('express');

var server = express(); // better instead

server.use(express.static('static'))

server.listen(3000, () => {
  console.log("Listening on port 3000");
});
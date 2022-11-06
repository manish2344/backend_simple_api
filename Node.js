const express = require("express");
const app = express();
require("./mongodb");
const postuses = require('./router/post.js');
app.use(express.json())
app.use('/post', postuses);

app.listen(3000, console.log("hello server is on "));
// express web server
const express = require('express');
const app = express();

app.use("/", require("./routes"));

const port = 3000;

app.listen(process.env.PORT || 3000)
console.log('Server is running at port' + (process.env.PORT || port));
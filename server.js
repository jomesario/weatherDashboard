var express = require('express')
var path = require('path');

var app = express()

const port = process.env.port || 4600;
app.use(express.static(path.join(__dirname,'dist/weatherDashboard')));



app.listen(port, function () {
  console.log('Server listening on port '+port);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
});
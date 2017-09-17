const express = require('express')
const app = express(),
	  path = require('path')

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile('/Users/Mastershefu/Documents/webapp3.0/index.html')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

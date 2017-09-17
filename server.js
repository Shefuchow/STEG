const express = require('express')
const app = express(),
	  path = require('path')

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile('/Users/Mastershefu/Documents/webapp3.0/index.html')
})

const server = app.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});
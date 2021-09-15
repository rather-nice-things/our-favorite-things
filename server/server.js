const express = require('express')
const expressStaticGzip = require('express-static-gzip')
const app = express()
const db = require('../database/database.js')

const host = 'localhost'
const port = '3000'

app.use(
  expressStaticGzip('public', {
    enableBrotli: true,
    orderPreference: ['br', 'gz'],
    setHeaders: function (res, path) {
      res.setHeader('Cache-Control', 'public, max-age=31536000')
    },
  })
)

app.use(express.json())

app.post('/editor', function (req, res) {
  console.log('POST request to /editor')
  db.addBlogEntry(req.body, (err, entry) => {
    if (err) {
      res.send(err);
    } else {
      res.send(entry);
    }
  })
})

module.exports = app
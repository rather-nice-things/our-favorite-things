const express = require('express')
const expressStaticGzip = require('express-static-gzip')
const app = express()

const host = "localhost";
const port = "3000";

app.use(
  expressStaticGzip("public", {
    enableBrotli: true,
    orderPreference: ["br", "gz"],
    setHeaders: function (res, path) {
      res.setHeader("Cache-Control", "public, max-age=31536000");
    },
  })
)

module.exports = app;
const db = require('../../database/database.js')

export default function handler(req, res) {
  db.getBlogEntry({}, (err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
}
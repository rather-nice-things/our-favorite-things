const mongoose = require('mongoose')

const blogEntrySchema = new mongoose.Schema({
  author: String,
  title: String,
  date: { type: Date, default: Date.now },
  body: String,
  imageURL: String,
  tags: [String]
})

export default mongoose.model('BlogEntry') ?? mongoose.model('BlogEntry', blogEntrySchema)

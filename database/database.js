const mongoose = require('mongoose')

// Connecting to the database
mongoose.connect(`mongodb://localhost:27017/our-favorite-things`, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Connected to database."))
.catch( err => console.log("Connection error: ", err))

const connection = mongoose.connection

// Setting up schemas and models
const blogEntrySchema = new mongoose.Schema({
  author: String,
  title: String,
  date: { type: Date, default: Date.now },
  body: String,
  imageURL: String,
  tags: [String]
})

const BlogEntry = mongoose.model('BlogEntry', blogEntrySchema)

// Functions that retrieve information from the database
const getBlogEntry = (query, callback) => {
  return BlogEntry.find(query, callback)
}

// Functions that add information to the database
const addBlogEntry = (entry, callback) => {
  return BlogEntry.create({
    author: entry.author,
    title: entry.title,
    date: entry.date,
    body: entry.body,
    imageURL: entry.imageURL,
    tags: entry.tags
  }, callback)
}

// Exports
exports.getBlogEntry = getBlogEntry;
exports.addBlogEntry = addBlogEntry;
exports.BlogEntry = BlogEntry;
exports.connection = connection;

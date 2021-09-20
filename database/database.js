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

// Delete the database (careful!)
const dropAllCollections = () => {
  connection.on('connected', () => {
    connection.db.listCollections().toArray((err, collections) => {
      if (err) {
        console.log('Error in making a list of collections: ' + err)
        process.exit(0)
      } else {
        // Go through the list of collections and delete each one
        for (let i = 0; i < collections.length; i++) {
          connection.db.dropCollection(collections[i].name, (err) => {
            if (err) {
              console.log('Error in dropping collection ' + collections[i].name + ': ' + err)
            } else {
              console.log('Collection ' + collections[i].name + ' dropped.')
            }
            if (collections.length - i === 1) {
              console.log('Finished dropping things!')
              process.exit(0)
            }
          })
        }
      }
    })
  })
}

// Exports
exports.getBlogEntry = getBlogEntry;
exports.addBlogEntry = addBlogEntry;
exports.dropAllCollections = dropAllCollections;
exports.BlogEntry = BlogEntry;
exports.connection = connection;
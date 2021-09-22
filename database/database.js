import mongoose from 'mongoose'
import BlogEntry from './blogEntryModel.js'

// Connecting to the database
mongoose.connect(`mongodb://localhost:27017/our-favorite-things`, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Connected to database."))
.catch( err => console.log("Connection error: ", err))

export const connection = mongoose.connection

// Functions that retrieve information from the database
export const getBlogEntry = async (query) => {
  return await BlogEntry.find(query)
}

// Functions that add information to the database
export const addBlogEntry = (entry, callback) => {
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
export const dropAllCollections = () => {
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
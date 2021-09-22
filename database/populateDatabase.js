const db = require('./database.js')
const faker = require('faker')

const populateDatabase = (numberOfRecords = 100) => {
  console.log('Populating database...')
  for (let i = 0; i < numberOfRecords; i++) {
    db.addBlogEntry({
      author: faker.name.findName(),
      title: faker.lorem.sentence(),
      date: faker.date.recent(),
      body: faker.lorem.paragraphs(),
      imageURL: faker.image.imageUrl(),
      tags: [faker.lorem.word(), faker.lorem.word(), getRandomBodyType()]
    }, () => {
      if (numberOfRecords - i === 1) {
        console.log('Finished populating database. Exiting.')
        process.exit(0)
      }
    })
  }
}

db.connection.on('connected', () => {
  let inputNumber = process.argv.slice(2)[0]
  inputNumber = parseInt(inputNumber)
  if (!inputNumber || inputNumber > 10000) {
    console.log('Invalid or missing input. Defaulting to 100 records.');
    inputNumber = 100
  }
  populateDatabase(inputNumber)
})

const getRandomBodyType = () => {
  const bodyTypeList = ["Strawberry", "Peanut", "Lemon", "Avocado"];
  const index = Math.floor(Math.random() * 4);
  return bodyTypeList[index];
}
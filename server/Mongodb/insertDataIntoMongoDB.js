const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');
dotenv.config();


async function insertDataIntoMongoDB(dataWithUpdatedImages) {
  const uri = `mongodb+srv://${process.env.mongouser}:${process.env.mongopass}@${process.env.mongouri}/${process.env.mongodb}?retryWrites=true&w=majority`;

  // Create a new MongoClient
  const client = new MongoClient(uri);

  // Connect to the MongoDB server
  await client.connect();

  console.log('Connected to MongoDB');

  try {
    // Access the database
    const database = client.db('ecommerce');

    // Access the collection (replace 'your-collection-name' with your actual collection name)
    const collection = database.collection('productdata');

    // Insert data into the collection
    await collection.insertMany(dataWithUpdatedImages);

    console.log(`Inserted ${dataWithUpdatedImages.length} documents`);
  } catch (error) {
    console.error('Error connecting to MongoDB or inserting data:', error);
  } finally {
    // Close the connection when done
    await client.close();
    console.log('Connection closed');
  }
}

module.exports = insertDataIntoMongoDB;
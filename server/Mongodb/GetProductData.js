const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');
dotenv.config();


async function GetProductData(){
    const uri = 'mongodb://localhost:27017/ecommerce';

    // Create a new MongoClient
    const client = new MongoClient(uri);

    // Connect to the MongoDB server
    await client.connect();

    console.log('Connected to MongoDB');

    try {
        const db = client.db('ecommerce');//accessing the database

        const collection = db.collection('productdata');//

        const data = await collection.find().toArray();

        return data;
        
    } catch (error) {
        console.error('Error connecting to MongoDB or inserting data:', error);
    } finally {
        await client.close(); //closing the connection
        console.log('Connection closed');
    }
    return null;
}


module.exports = GetProductData;
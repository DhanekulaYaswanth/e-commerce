const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');
dotenv.config();

async function GetProductData() {
    var client;
    try {
        const uri = `mongodb+srv://${process.env.mongouser}:${process.env.mongopass}@${process.env.mongouri}/${process.env.mongodb}?retryWrites=true&w=majority`;

        client = new MongoClient(uri);

        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db('ecommerce');
        const collection = db.collection('productdata');
        const data = await collection.find().toArray();

        console.log('Data retrieved successfully');
        return data;
    } catch (error) {
        console.error('Error:', error);
        return null; // Returning null to signify an error occurred
    } finally {
        if (client) {
            await client.close();
            console.log('Connection closed');
        }
    }
}

module.exports = GetProductData;

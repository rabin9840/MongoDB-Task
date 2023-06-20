const connectToMongoDB = require('./connectDatabase');
const { MongoClient } = require('mongodb');
const { uri,databaseName,collectionName} = require('./constants.js');
const client = new MongoClient(uri, { useNewUrlParser: true });

async function insertOperation() {
    try {
        const database = client.db(databaseName);
        const productsCollection = database.collection(collectionName);
        // 1. Insert new products into the inventory collection
        await productsCollection.insertMany([
            {
                name: 'Product 1',
                price: 10.99,
                quantity: 50,
                category: 'Category A'
            },
            {
                name: 'Product 2',
                price: 19.99,
                quantity: 100,
                category: 'Category B'
            },
            // Add more products as needed
        ]);
        
    } catch (error) {
        console.log(error);
    }
}

insertOperation();
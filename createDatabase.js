const { MongoClient } = require('mongodb');
const { uri, databaseName, collectionName } = require('./constants.js');
const client = new MongoClient(uri, { useNewUrlParser: true });

async function createNewDatabase() { 
    // Connect to mongodb server
    try {
        await client.connect();
        console.log('Connected successfully to MongoDB server');

        const database = client.db(databaseName);
        const collection = database.collection(collectionName);
    }
    catch (error) { 
        console.error('Error:', error);
    }



}

createNewDatabase();
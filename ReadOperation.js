const connectToMongoDB = require('./connectDatabase');
const { MongoClient } = require('mongodb');
const { uri,databaseName,collectionName} = require('./constants.js');
const client = new MongoClient(uri, { useNewUrlParser: true });

async function readOperation() {
    try {
        connectToMongoDB();
        const database = client.db(databaseName);
        const productsCollection = database.collection(collectionName);
        // 2. Read all products from the inventory collection
        const products = await productsCollection.find({}).toArray();
        console.log(products);
    } catch (error) {
        console.log(error);
    }
}

readOperation();
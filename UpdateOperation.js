const connectToMongoDB = require('./connectDatabase');
const { MongoClient } = require('mongodb');
const { uri,databaseName,collectionName} = require('./constants.js');
const client = new MongoClient(uri, { useNewUrlParser: true });

async function updateOperation() {
    try {
        connectToMongoDB();
        const database = client.db(databaseName);
        const productsCollection = database.collection(collectionName);
        // 3. Update the quantity of a product
        const updateResult = await productsCollection.updateOne(
            { name: 'Product 1' },
            { $set: { quantity: 20 } }
        );
        console.log(updateResult);

        
    } catch (error) {
        console.log(error);
    }
}

updateOperation();
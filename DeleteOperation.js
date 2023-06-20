const connectToMongoDB = require('./connectDatabase');
const { MongoClient } = require('mongodb');
const { uri,databaseName,collectionName} = require('./constants.js');
const client = new MongoClient(uri, { useNewUrlParser: true });

async function deleteOperation() {
    try {
        connectToMongoDB();
        const database = client.db(databaseName);
        const productsCollection = database.collection(collectionName);

        // 4. Delete a product from the inventory collection
        const deleteResult = await productsCollection.deleteOne({ name: 'Product 1' });
        console.log(deleteResult);

        
    } catch (error) {
        console.log(error);
    }
}

deleteOperation();
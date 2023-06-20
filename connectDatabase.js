// dbConnection.js
const { MongoClient } = require('mongodb');
const { uri,databaseName,collectionName} = require('./constants.js');
const client = new MongoClient(uri, { useNewUrlParser: true });

async function connectToMongoDB() {
  try {
    await client.connect();
      console.log('Connected successfully to MongoDB server');
  

  } catch (error) {
    console.error('Error:', error);
  }
}

// Export the connectToMongoDB function
module.exports = connectToMongoDB;

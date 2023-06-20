// Connect to the MongoDB server
const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true });

async function run() {
  try {
    // Connect to the database
    await client.connect();
    const database = client.db('inventory');
    const productsCollection = database.collection('products');

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

    // 2. Retrieve a list of all products
    const allProducts = await productsCollection.find().toArray();
    console.log('All products:');
    console.log(allProducts);

    // 3. Find products within a specific price range
    const minPrice = 10;
    const maxPrice = 20;
    const productsInRange = await productsCollection.find({
      price: { $gte: minPrice, $lte: maxPrice }
    }).toArray();
    console.log(`Products within the price range ${minPrice}-${maxPrice}:`);
    console.log(productsInRange);

    // 4. Update the quantity of a specific product
    const productToUpdate = 'Product 1';
    const newQuantity = 30;
    await productsCollection.updateOne(
      { name: productToUpdate },
      { $set: { quantity: newQuantity } }
    );
    console.log(`Updated the quantity of ${productToUpdate} to ${newQuantity}`);

    // 5. Delete a product from the inventory
    const productToDelete = 'Product 2';
    await productsCollection.deleteOne({ name: productToDelete });
    console.log(`Deleted ${productToDelete}`);

  } catch (error) {
    console.error('Error:', error);
  } finally {
    // Close the connection
    await client.close();
  }
}

// Run the code
run();

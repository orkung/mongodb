// Import the MongoDB driver
const { MongoClient } = require('mongodb');

// Connection URL and database name
const url = 'mongodb://mongo';
const dbName = 'myDatabase';

// Create a new MongoClient
const client = new MongoClient(url);

// Connect to the MongoDB server
client.connect(function(err) {
  console.log("Connected successfully to server");

  // Get the database object
  const db = client.db(dbName);

  // Choose the collection
  const collection = db.collection('myCollection');

  // Insert a new document
  const doc = { name: 'John', age: 30 };
  collection.insertOne(doc, function(err, result) {
    console.log("Inserted document with _id: " + result.insertedId);
  });

  // Query the collection
  collection.find({ age: { $gt: 25 } }).toArray(function(err, docs) {
    console.log("Found documents:", docs);
  });

  // Close the connection
  client.close();
});

const MongoClient = require('mongodb').MongoClient;

const user = encodeURIComponent('dongadmin');
const password = encodeURIComponent('0989886285Aa');
const dbName = 'test'

const uri = `mongodb+srv://${user}:<${password}>@dong-dlkhv.mongodb.net/${dbName}?retryWrites=true`;
const client = new MongoClient(uri, {
  useNewUrlParser: true
});

client.connect(err => {
  if(err) {
    console.error(err)
  };

  if(client.isConnected()) {
    const db = client.db(dbName);
  }
  // perform actions on the collection object
  console.log("Connected successfully to server");

  client.close();
});
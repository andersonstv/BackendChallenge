import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv'

dotenv.config()

const mongo_password = process.env.MONGO_PASSWORD;
const mongo_username = process.env.MONGO_USERNAME;

const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.wnnp74a.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// config db
// create collections
export function setupDb(){
  client.connect(err => {
    if (err) throw err;
    var db = client.db("asoiaf");
    db.createCollection("books", (err, res) => {
      if (err) throw err;
      console.log("Books Collection created.");
      client.close();
    })
  });
  client.connect(err => {
    if (err) throw err;
    var db = client.db("asoiaf");
    db.createCollection("characters", (err, res) => {
      if (err) throw err;
      console.log("Characters Collection created.");
      client.close();
    })
  });
}

export function insert(list, collectionName){
  client.connect( err => {
  if (err) throw err;
  var db = client.db("asoiaf");
  db.collection(collectionName).insertMany(list, function(err, res) {
    if (err) throw err;
    console.log(`${collectionName} - Number of documents inserted: ` + res.insertedCount);
    client.close();
  });
}); }

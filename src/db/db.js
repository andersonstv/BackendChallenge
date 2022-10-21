import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv'

dotenv.config()

const mongo_password = process.env.MONGO_PASSWORD;
const mongo_username = process.env.MONGO_USERNAME;

const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.wnnp74a.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// config db
// create collections
function createDb(){
  client.connect(err => {
    if (err) throw err;
    var db = client.db("asoiaf");
    db.createCollection("books", (err, res) => {
      if (err) throw err;
      console.log("Books Collection created.");
    })
  });
  client.connect(err => {
    if (err) throw err;
    var db = client.db("asoiaf");
    db.createCollection("characters", (err, res) => {
      if (err) throw err;
      console.log("Books Collection created.");
    })
  });
}

// seeding db

// fetchBooks then Insert
  // add base64 cover to objects
// fetchCharacters then Insert
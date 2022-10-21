import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv'

dotenv.config()

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const uri = `mongodb+srv://${username}:${password}@cluster0.wnnp74a.mongodb.net/?retryWrites=true&w=majority`;
export const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

export function insert(list, collectionName){
  client.connect( err => {
    if (err) throw err;
    var db = client.db("asoiaf");
    db.collection(collectionName).insertMany(list, function(err, res) {
      if (err) throw err;
      console.log(`${collectionName} - Number of documents inserted: ` + res.insertedCount);
      client.close();
    });
  }); 
}

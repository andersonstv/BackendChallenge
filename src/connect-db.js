const { MongoClient, ServerApiVersion } = require('mongodb');


require('dotenv').config();
const mongo_password = process.env.MONGO_PASSWORD
const mongo_username = process.env.MONGO_USERNAME

const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.wnnp74a.mongodb.net/asoiaf?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  if(err) throw err;
  var db = client.db("asoiaf");
  db.createCollection("characters", (err, res) =>{
    if (err) throw err;
    console.log("Character Collection created!");
  })
});

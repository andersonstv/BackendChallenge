import express, { response } from 'express';
import { insert, setupDb } from './src/db/db.js';
import { fetchBooks, fetchCharacters } from './src/services/api.js';
const app = express();
const port = 3000;

//setupDb();
//fetchBooks().then(response => {insert(response, "books")});
//fetchCharacters().then(response => {insert(response, "characters")});

app.get('/', (req, res) => {

});

// get povCharacters

// get Covers by Books

// get Books by character

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});

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

// get all povCharacters
app.get('/characters/main', (req, res) => {

});
// get Covers by Books
app.get('/books/:name', (req, res) => {

});
// get Character Details
app.get('/characters/:name', (req, res) => {

});
// get Books by character
app.get('/books/:characterId', (req, res) => {

});

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});

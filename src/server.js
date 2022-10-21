import express, { response } from 'express';
import { getBooksByCharacterId } from './controllers/BookController.js';
import { getAllCharacters, getAllPovCharacters, getCharacterById } from './controllers/CharacterController.js';
import { insert } from './db/db.js';
import { init } from './db/init.js';
import { fetchBooks, fetchCharacters } from './services/BookFetchService.js';
import { fetchCover } from './services/CoverService.js';

const app = express();
const port = 3000;

//init()

app.get('/', (req, res) => {
  res.send("API - A Song of Ice and Fire")
});

// get all povCharacters
app.get('/characters/pov', (req, res) => {
    getAllPovCharacters().then( result => (res.send(result)))
});
// get Character Details
app.get('/characters/:id', (req, res) => {
    getCharacterById(req.params.id).then(result => (res.send(result)));
});
// get all Characters Details
app.get('/characters', (req, res) => {
    getAllCharacters().then(result => (res.send(result)))
});
// get Books by character
app.get('/characters/:id/books', (req, res) => {
    getBooksByCharacterId(req.params.id).then()
});

app.listen(port);
console.log(`Listening on port ${port}`);

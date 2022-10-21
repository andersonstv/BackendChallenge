import express from 'express';
import { fetchBooks, fetchCharacters } from './src/services/api.js';
const app = express();


app.get('/', (req, res) => {

});

// get povCharacters

// get Covers by Books

// get Books by character

app.listen(3000, () => {
  console.log('server started at port 3000');
});

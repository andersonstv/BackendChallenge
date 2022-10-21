import express from 'express';
import { fetchBooks, fetchCharacters } from './src/services/api.js';
const app = express();
const port = 3000;

app.get('/', (req, res) => {

});

// get povCharacters

// get Covers by Books

// get Books by character

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});

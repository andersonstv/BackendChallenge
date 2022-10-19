const express = require('express');

const app = express();


app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

// get povCharacters

// get Covers by Books

// get Books by character

app.listen(3000, () => {
  console.log('server started');
});

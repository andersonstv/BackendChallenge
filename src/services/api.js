function fetchAllPages(url, page = 1, previousResponse = []) {
  return fetch(`${url}?page=${page}`)
    .then(response => response.json())
    .then(newResponse => {
      const response = previousResponse.concat(newResponse)

      if (newResponse.length !== 0) {
        page++;

        return fetchAllPages(url, page, response);
      }

      return response;
    });
}
export async function fetchBooks() {
  const books = await fetchAllPages("https://www.anapioficeandfire.com/api/books")
  return books;
}
export async function fetchCharacters() {
  const characters = await fetchAllPages("https://www.anapioficeandfire.com/api/characters");
  return characters;
}
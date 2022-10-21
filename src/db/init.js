import { insert } from './db.js';
import { fetchBooks, fetchCharacters } from '../services/BookFetchService.js';
import { fetchCover } from '../services/CoverService.js';

export const init = () => {
    fetchCharacters().then(response => {
        response.forEach(element => {
            element["_id"] = element.url.match(/\/characters\/(\d+)/)[1]
        });
        insert(response, "characters");
    });
    fetchBooks().then(response => {
        response.forEach(element => {
            element["_id"] = element.url.match(/\/books\/(\d+)/)[1]
            fetchCover(element.isbn).then(base64Image => {
                element["cover"] = base64Image;
            })
        });
        // add bookcover to book object
        insert(response, "books");
    });
}
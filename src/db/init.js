import { client, insert } from './db.js';
import { fetchBooks, fetchCharacters } from '../services/BookFetchService.js';
import { fetchCover } from '../services/CoverService.js';

export const init = () => {
    client.connect( err => {
        if (err) throw err;
        var db = client.db("asoiaf");
        if(db.listCollections({ name: "books" }).hasNext() && db.listCollections({ name: "characters" }).hasNext()){
            console.log("Database already initialized.")
        } else{
            initialize();
        }
    })
}
function initialize(){
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
        insert(response, "books");
    });
}
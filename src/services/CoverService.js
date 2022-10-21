import { readFileSync } from "fs";
// fetch cover by isbn and converts to base64
export async function fetchCover(isbn){
    let response = await fetch(`https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`);
    let contentType = response.headers.get("Content-Type");
    let buffer = Buffer.from(await response.arrayBuffer());
    return buffer.toString('base64')
}
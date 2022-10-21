import { client } from "../db/db.js";


export async function getBookById(id){
    let result;
    try{
        await client.connect();
        const db = client.db("asoiaf");
        result = await db.collection("books").findOne({_id: id}).toArray();
    } catch(err){
        console.log(err.stack);
    } finally {
        client.close();
    }
    return result;
}
export async function getAllBooks(){
    try{
        await client.connect();
        const db = client.db("asoiaf");
        const result = await db.collection("books").find({}).toArray();
    } catch(err){
        console.log(err.stack);
    } finally {
        client.close();
    }
    return result;
}
export async function getBooksByCharacterId(id){
    let books = [];
    try{
        await client.connect();
        const db = client.db("asoiaf");
        const character = await db.collection("characters").findOne({_id: id});
        //books = character.books;
    } catch(err){
        console.log(err.stack);
    } finally {
        await client.close();
    }
    return books;
}
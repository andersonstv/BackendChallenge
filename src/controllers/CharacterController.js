import { client } from "../db/db.js";

export async function getCharacterById(id){
    let result;
    try{
        await client.connect();
        const db = client.db("asoiaf");
        result = await db.collection("characters").findOne({_id: id});
    } catch(err){
        console.error(err);
    }
    return result;
}
export async function getCharactersByName(name){
    let result;
    try{
        await client.connect();
        const db = client.db("asoiaf");
        result = await db.collection("characters").find({name: name}).toArray();
    } catch(err){
        console.log(err.stack);
    } finally {
        client.close();
    }
    return result;
}

export async function getAllCharacters(){
    try{
        await client.connect();
        const db = client.db("asoiaf");
        const result = await db.collection("characters").find({}).toArray();
    } catch(err){
        console.log(err.stack);
    } finally {
        client.close();
    }
    return result;
}
export async function getAllPovCharacters(){
    let charactersUrl = [];
    let characters = [];
    try{
        await client.connect();
        const db = client.db("asoiaf");
        let result =  db.collection("books").find({}).project({povCharacters: 1});
        await result.forEach(document => {charactersUrl = charactersUrl.concat(document.povCharacters)});

    } catch(err){
        console.log(err.stack);
    } finally {
        client.close();
    }
    return [... new Set(characters)]
}
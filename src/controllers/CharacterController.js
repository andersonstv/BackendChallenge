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
    let result;
    try{
        await client.connect();
        const db = client.db("asoiaf");
        result = await db.collection("characters").find({}).toArray();
    } catch(err){
        console.log(err.stack);
    } finally {
        await client.close();
    }
    return result;
}
export async function getAllPovCharacters(){
    let characters;
    try{
        await client.connect();
        const db = client.db("asoiaf");
        characters =  await db.collection("characters").find({'povBooks.0': {$exists: true}}).toArray();
    } catch(err){
        console.log(err.stack);
    } finally {
        await client.close();
    }
    return characters
}
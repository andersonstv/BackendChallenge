import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv'

dotenv.config()

export const DATABASE = {
    username: process.env.MONGO_USERNAME,
    password: process.env.MONGO_PASSWORD,
    uri: `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.wnnp74a.mongodb.net/?retryWrites=true&w=majority`
}
export function test(){
    
}
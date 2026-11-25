// This file creates the MongoDB connection.
import { MongoClient, ServerApiVersion } from "mongodb";
import { MONGO_URI } from '$app/env/private';


const uri = MONGO_URI

if (!uri) {
    throw new Error('Please add MONGO_URI in .env')
}


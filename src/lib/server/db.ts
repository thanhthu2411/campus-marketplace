// This file creates the MongoDB connection.
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGO_URI;
const dbName = process.env.MONGO_DATABASE

console.log(uri, dbName)

if (!uri) {
  throw new Error("Please add MONGO_URI in .env");
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let _db: MongoClient | null = null;

const initDb = async () => {
  
  if (_db) {
    console.log("Db is already initialized");
    return;
  }

  try {
    await client.connect();
    _db = client;
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error(error)
  }
};

const getDb = () => {
  if (!_db) {
    throw Error("Db not initialized");
  }

  return _db.db(dbName);
};

const closeDb = async () => {
  if (_db) {
    try {
      await _db.close();
    } finally {
      _db = null;
    }
  }
};

export default {
  initDb,
  getDb,
  closeDb,
};

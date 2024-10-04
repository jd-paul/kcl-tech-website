import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error("Add Mongo URI to .env.local");
}

const uri = process.env.MONGODB_URI;
const options = {};

// Global type declaration
declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export const getMongoDb = async () => {
  const client = await clientPromise;
  return client.db(process.env.MONGODB_DB);
};

// Export clientPromise for reuse in other files
export default clientPromise;

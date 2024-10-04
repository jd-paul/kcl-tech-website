import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
  throw new Error("Add Mongo URI to .env");
}

const uri = process.env.MONGODB_URI;
const options = {};

// Global type declaration
declare global {
  var _mongoosePromise: Promise<typeof mongoose> | undefined;
}

let mongoosePromise: Promise<typeof mongoose>;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoosePromise) {
    global._mongoosePromise = mongoose.connect(uri, options);
  }
  mongoosePromise = global._mongoosePromise;
} else {
  // In production mode, it's best to not use a global variable.
  mongoosePromise = mongoose.connect(uri, options);
}

export const getMongoDb = async () => {
  await mongoosePromise;
  return mongoose.connection.db;
};

// Export mongoosePromise for reuse in other files
export default mongoosePromise;

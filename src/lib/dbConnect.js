import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.DB_URI;

export const collectionNamesOb = {
  servicesCollection: "Doctor_Services",
  bannerCollection: "Banner",
  usersCollection: "users",
  bookingCollection: "booking",
}

const dbConnect = (collectionName) => {
  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  return client.db(process.env.DB_NAME).collection(collectionName)
};

export default dbConnect

"use server";
import dbConnect, { collectionNamesOb } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
  const userCollection = dbConnect(collectionNamesOb.usersCollection);

  const user = await userCollection.findOne({ email: payload.email });

  const { email, password } = payload;

  if (!email || !password) return { success: false };

  if (!user) {
    const result = await userCollection.insertOne(payload);
    const { acknowledged, insertedId } = result;

    return { acknowledged, insertedId };
  }
  return null;
};

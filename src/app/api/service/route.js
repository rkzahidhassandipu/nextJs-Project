import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNamesOb } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const email = session.user.email;
  const bookingCollection = dbConnect(collectionNamesOb.bookingCollection);
  const result = await bookingCollection.find({ email }).toArray();

  return NextResponse.json(result);
};

export const POST = async (req) => {
  const body = await req.json();

  const bookingCollection = await dbConnect(collectionNamesOb.bookingCollection);
  const result = await bookingCollection.insertOne(body);

  return NextResponse.json(result);
};

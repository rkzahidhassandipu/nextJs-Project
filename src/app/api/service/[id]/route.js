
import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNamesOb } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";



export const DELETE = async (req, {params}) => {
  const bookingCollection = dbConnect(collectionNamesOb.bookingCollection);
  const p = await params;
  const query = {_id: new  ObjectId(p.id)}

  // validation
  const session = await getServerSession(authOptions);
  
}
export const GET = async (req, { params }) => {
    const id = params.id;
  const serviceCollection = dbConnect(collectionNamesOb.servicesCollection);
  const data = await serviceCollection.findOne({_id: new ObjectId(id)});

  return NextResponse.json(data)
};

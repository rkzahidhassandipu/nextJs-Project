import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNamesOb } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { get } from "react-hook-form";

export const GET = async (req, { params }) => {
  const p = await params;
  const bookingCollection = dbConnect(collectionNamesOb.bookingCollection);
  const query = { _id: new ObjectId(p.id) };
  const singleBooking = await bookingCollection.findOne(query);

  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  const currentBookingData = await bookingCollection.findOne(query);
  const isOwnerOK = email === currentBookingData?.email;

  if(isOwnerOK){
    return NextResponse.json(singleBooking);
  }
  else{
    return NextResponse.json({message: "Forbidden GET action"}, {
        status: 403
    })
  }
  
};

export const PATCH = async (req, { params }) => {
  const { id } = params; // ✅ no await here
  const bookingCollection = dbConnect(collectionNamesOb.bookingCollection);
  const query = { _id: new ObjectId(id) };

  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  const currentBookingData = await bookingCollection.findOne(query);
  const isOwnerOK = email === currentBookingData?.email;

  if (isOwnerOK) {
    const body = await req.json();

    const filter = { $set: { ...body } };
    const option = { upsert: true };

    const updateResponse = await bookingCollection.updateOne(
      query,
      filter,
      option
    );

    return NextResponse.json(updateResponse);
  }
  else{
    return NextResponse.json({message:" Forbidden Update action"}, {
        status: 403
    });
  }
};

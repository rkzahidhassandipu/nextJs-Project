import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNamesOb } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
    const bookingCollection = dbConnect(collectionNamesOb.bookingCollection)
    const p = await params;
    const query = { _id: new ObjectId(p.id) }

    // Validation
    const session = await getServerSession(authOptions)
    const currentBooking = await bookingCollection.findOne(query)

    const isOwnerOK = session?.user?.email == currentBooking.email

    if (isOwnerOK) {
        // Deleting User specific booking

        const deleteResponse = await bookingCollection.deleteOne(query)
        revalidatePath("/my-bookings")
        return NextResponse.json(deleteResponse)
    }
    else {
        return NextResponse.json({ success: false, message: "Forbidden Action" }, { status: 401 })
    }

}
export const GET = async (req, { params }) => {
  const id = params.id;
  const serviceCollection = dbConnect(collectionNamesOb.servicesCollection);
  const data = await serviceCollection.findOne({ _id: new ObjectId(id) });

  return NextResponse.json(data);
};

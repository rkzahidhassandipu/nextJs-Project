import dbConnect, { collectionNamesOb } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";

const Page = async ({ params }) => {
  const p = await params;

  const servicesCollection = dbConnect(collectionNamesOb.servicesCollection);
  const data = await servicesCollection.findOne({
    _id: new ObjectId(params.id),
  });
  return (
    <div className="w-11/12 mx-auto mt-10">
      <div className="relative w-full h-96 rounded overflow-hidden">
        {/* Background Image */}
        <Image
          src="/assets/images/banner/4.jpg"
          alt="Banner image"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content on top */}
        <div className="absolute inset-0 flex items-center  text-white">
          <h1 className="text-3xl font-bold">Service Details</h1>
        </div>
      </div>
      <p>{p.id}</p>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default Page;

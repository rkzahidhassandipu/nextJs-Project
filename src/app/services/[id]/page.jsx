import dbConnect, { collectionNamesOb } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import Link from "next/link";

const Page = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/api/service/${params.id}`);
  const data = await res.json();

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
      </div>
      <div className="grid grid-cols-6">
        <div className="col-span-4">
          <div className="mx-auto bg-white fvhrounded-lg overflow-hidden mt-10">
            {/* Image */}
            <div className="w-full h-64 relative mb-6">
              <Image
                src={data?.img}
                alt={data?.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>

            {/* Title and Price */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold text-gray-800">
                {data?.title}
              </h2>
              <span className="text-xl font-semibold text-indigo-600">
                ${data?.price}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6">{data?.description}</p>

            {/* Facilities */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
              {data?.facility.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg border-t border-orange-500"
                >
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">
                    {item.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.details}</p>
                </div>
              ))}
            </div>
            <div>
              <p className="text-gray-600 mb-6">{data?.description}</p>
              <h2 className="font-bold text-2xl my-5">3 Simple Steps to Process</h2>
              {/* Description */}
              <p className="text-gray-600 mb-6">{data?.description}</p>
            </div>
            {/* Checkout Button */}
            <div className="mt-8 text-right">
              <Link href={`/checkout/${data._id}`}>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2 rounded-lg transition duration-300">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-2">k</div>
      </div>
    </div>
  );
};

export default Page;

import dbConnect, { collectionNamesOb } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const ServiceSection = async ({}) => {
  const serviceCollection = dbConnect(collectionNamesOb.servicesCollection);
  const data = await serviceCollection.find({}).toArray();

  return (
    <div className="mx-auto lg:w-11/12">
      <div className="text-center mb-8">
        <p className="text-orange-600 font-semibold mb-2 mb-6">About Us</p>
        <h2 className="text-4xl font-bold mb-6">Our Service Area</h2>
        <p className="text-gray-400 leading-6">
          the majority have suffered alteration in some form, by injected humour, or randomised <br /> 
          words which don't look even slightly believable.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <Image
              src={service.img}
              alt={service.title || "Service Image"}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />

            <div className="p-4 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-sm text-gray-600">${service.price}</p>
              </div>

              <Link
                href={`services/${service._id}`}
                className="text-orange-600 hover:text-orange-700 text-xl"
              >
                <FaArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="text-center mt-8">
        <Link
          href="/services"
          className="inline-block  border border-orange-600 text-orange-600 hover:text-white font-semibold px-6 py-3 rounded hover:bg-orange-600 transition-colors"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default ServiceSection;

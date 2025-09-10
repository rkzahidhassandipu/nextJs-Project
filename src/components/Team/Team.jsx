import dbConnect, { collectionNamesOb } from "@/lib/dbConnect";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const Team = async () => {
  const ourTeamCollection = await dbConnect(collectionNamesOb.ourTeamCollection);
  const profiles = await ourTeamCollection.find({}).toArray();

  return (
    <section className="w-11/12 mx-auto py-16">
      <div className="text-center mb-12">
        <h4 className="text-orange-600 font-semibold text-lg mb-4">Team</h4>
        <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our dedicated professionals work with passion and commitment to deliver
          the best service experience for our clients.
        </p>
      </div>

      <Carousel className="w-full max-w-6xl mx-auto">
        <CarouselContent>
          {profiles.map((item) => (
            <CarouselItem key={item._id} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center flex flex-col items-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={120}
                  height={120}
                  className="rounded object-cover mb-4 ring-4 ring-blue-100"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{item.title}</p>

                {/* Social Media */}
                <div className="flex justify-center gap-4 mt-2">
                  {item.social?.facebook && (
                    <a href={item.social.facebook} target="_blank" rel="noreferrer">
                      <Facebook className="h-5 w-5 text-blue-600 hover:text-blue-800" />
                    </a>
                  )}
                  {item.social?.twitter && (
                    <a href={item.social.twitter} target="_blank" rel="noreferrer">
                      <Twitter className="h-5 w-5 text-sky-500 hover:text-sky-700" />
                    </a>
                  )}
                  {item.social?.linkedin && (
                    <a href={item.social.linkedin} target="_blank" rel="noreferrer">
                      <Linkedin className="h-5 w-5 text-blue-700 hover:text-blue-900" />
                    </a>
                  )}
                </div>

                <p className="text-xs text-gray-400 mt-3">
                  Joined {new Date(item.created_date).toLocaleDateString()}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-[-2.5rem]" />
        <CarouselNext className="right-[-2.5rem]" />
      </Carousel>
    </section>
  );
};

export default Team;

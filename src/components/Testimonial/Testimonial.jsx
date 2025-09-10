import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import dbConnect, { collectionNamesOb } from "@/lib/dbConnect";
import Image from "next/image";
import { Star } from "lucide-react";

const Testimonial = async () => {
  const testimonialCollection = dbConnect(collectionNamesOb.TestimonialCollection);
  const testimonials = await testimonialCollection.find({}).toArray();

  return (
    <section className="w-11/12 mx-auto py-16">
      <div className="text-center mb-8">
        <h4 className="text-orange-600 font-semibold text-lg mb-6">
          Testimonial
        </h4>
        <h2 className="text-3xl font-bold mb-6">What Customer Says</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
        </p>
      </div>

      <Carousel className="w-full mx-auto">
        <CarouselContent>
          {testimonials.map((item) => (
            <CarouselItem key={item._id} className="basis-1/2">
              <div className="group p-6 bg-white rounded-2xl transition duration-300 border border-gray-100 h-full flex flex-col justify-between">
                <div className="flex flex-col items-center gap-4 text-center my-5">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover ring-4 ring-blue-100"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    "{item.description}"
                  </p>
                </div>

                <div className="mt-6 flex flex-col items-center gap-2">
                  <p className="font-medium text-blue-600">— {item.name}</p>
                  <div className="flex justify-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < item.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-400">
                    {new Date(item.created_date).toLocaleDateString()}
                  </p>
                </div>
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

export default Testimonial;

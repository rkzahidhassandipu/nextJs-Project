import { Users, Clock, Headphones, Wrench, ShieldCheck, Package } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Expert Team",
    icon: <Users className="h-8 w-8" />,
  },
  {
    id: 2,
    title: "Timely Delivery",
    icon: <Clock className="h-8 w-8" />,
  },
  {
    id: 3,
    title: "24/7 Support",
    icon: <Headphones className="h-8 w-8" />,
  },
  {
    id: 4,
    title: "Best Equipment",
    icon: <Wrench className="h-8 w-8" />,
  },
  {
    id: 5,
    title: "100% Guarantee",
    icon: <ShieldCheck className="h-8 w-8" />,
  },
  {
    id: 6,
    title: "Fast Delivery",
    icon: <Package className="h-8 w-8" />,
  },
];

const ChooseUs = ({}) => {
  return (
    <div>
      <div className="text-center mb-8">
        <h4 className="text-orange-600 font-semibold text-lg mb-6">
          Core Features
        </h4>
        <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
      </div>

      <section className="py-12 bg-white">
        <div className="w-11/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {features.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col items-center justify-center gap-3 rounded-lg border p-6 cursor-pointer transition-all duration-300
              ${
                index === 1
                  ? "bg-red-500 text-white"
                  : "hover:bg-red-500 hover:text-white"
              } 
              `}
            >
              <div className="flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-sm font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ChooseUs;

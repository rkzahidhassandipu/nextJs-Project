import { FaClock, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const InfoBar = () => {
  return (
    <div className="bg-black mx-auto w-11/12 py-10 my-20  text-white rounded-xl shadow-md border border-blue-500 px-10 py-4 flex flex-col md:flex-row items-center justify-between gap-6">
      
      {/* Opening Hours */}
      <div className="flex items-center gap-3">
        <FaClock className="text-red-500 text-2xl" />
        <div>
          <p className="text-sm text-gray-300">We are open monday-friday</p>
          <p className="font-bold">7:00 am - 9:00 pm</p>
        </div>
      </div>

      {/* Contact Number */}
      <div className="flex items-center gap-3">
        <FaPhoneAlt className="text-red-500 text-2xl" />
        <div>
          <p className="text-sm text-gray-300">Have a question?</p>
          <p className="font-bold">+2546 251 2658</p>
        </div>
      </div>

      {/* Address */}
      <div className="flex items-center gap-3">
        <FaMapMarkerAlt className="text-red-500 text-2xl" />
        <div>
          <p className="text-sm text-gray-300">Need a repair? our address</p>
          <p className="font-bold">Liza Street, New York</p>
        </div>
      </div>

    </div>
  );
};

export default InfoBar;

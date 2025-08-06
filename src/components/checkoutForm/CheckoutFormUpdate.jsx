"use client";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";

const CheckoutFormUpdate = ({ data }) => {
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (bookData) => {
  const completeData = {
    ...bookData,
    title: data?.title,
    service_id: data?.service_id,
    service_db_id: data?._id,
    createdAt: new Date(),
  };

  const res = await fetch('http://localhost:3000/api/service', {
    method: "POST",
    body: JSON.stringify(completeData)
  })

  const postedResponsive = await res.json();
  console.log(postedResponsive)
};


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto bg-white shadow-lg p-6 rounded-lg space-y-4 my-10"
    >
      <h2 className="text-2xl font-bold text-center mb-6">
        Book Service: {data?.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="Enter your full name"
            defaultValue={session?.user?.name}
            readOnly
            className="border py-2 px-1 rounded-md w-full"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            defaultValue={session?.user?.email}
            type="email"
            placeholder="Enter your email"
            readOnly
            className="border py-2 px-1 rounded-md w-full"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Date */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            {...register("date", { required: "Date is required" })}
            type="date"
            readOnly
            defaultValue={new Date().toISOString().split('T')[0]}
            className="border py-2 px-1 rounded-md w-full"
          />
          {errors.date && (
            <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
          )}
        </div>

        {/* Due Amount */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Due Amount
          </label>
          <input
            {...register("amount")}
            type="text"
            readOnly
            defaultValue={data?.price}
            className="border py-2 px-1 rounded-md w-full bg-gray-100 text-gray-700"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10,15}$/,
                message: "Invalid phone number",
              },
            })}
            type="tel"
            placeholder="e.g., 0123456789"
            className="border py-2 px-1 rounded-md w-full"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Present Address
          </label>
          <input
            {...register("address", { required: "Address is required" })}
            type="text"
            placeholder="Your current address"
            className="border py-2 px-1 rounded-md w-full"
          />
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">
              {errors.address.message}
            </p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded w-full mt-6 font-medium"
      >
        Submit Checkout
      </button>
    </form>
  );
};

export default CheckoutFormUpdate;

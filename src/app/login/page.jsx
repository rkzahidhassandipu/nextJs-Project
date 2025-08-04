"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import SocialLogin from "@/components/socialLogin/socialLogin";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const res = await signIn("credentials", {
        redirect: false, // don't auto-redirect
        ...data,
      });

      if (res.ok) {
        router.push("/");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-16 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email */}
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block font-medium">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
            })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>

      <div className="flex items-center gap-2 my-6">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="text-gray-500 text-sm">Or continue with</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      <SocialLogin />
    </div>
  );
}

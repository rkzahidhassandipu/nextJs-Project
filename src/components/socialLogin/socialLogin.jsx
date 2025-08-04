'use client';

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaGoogle, FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  const router = useRouter()
  const handleSignIn = async (providerName) => {
    const result = await signIn(providerName, {redirect: false})
    if(result.ok){
      router.push('/')
    }
  }
  return (
    <div className="space-y-2 mt-4">
      <button
        onClick={() => handleSignIn('google')}
        className="w-full flex items-center justify-center gap-2 bg-red-600 text-white py-2 rounded hover:bg-red-700"
      >
        <FaGoogle /> Login with Google
      </button>

      <button
        onClick={() => handleSignIn('github')}
        className="w-full flex items-center justify-center gap-2 bg-gray-800 text-white py-2 rounded hover:bg-gray-900"
      >
        <FaGithub /> Login with GitHub
      </button>
    </div>
  );
};

export default SocialLogin;

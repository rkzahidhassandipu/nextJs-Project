"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({}) => {
  const { data: session, status } = useSession();
  console.log(session);
  const NavLinks = (
    <>
      <li>
        <Link href={`/`} className="font-semibold text-xl">
          Home
        </Link>
      </li>
      <li>
        <Link href={`/about`} className="font-semibold text-xl">
          About
        </Link>
      </li>
      <li>
        <Link href={`/services`} className="font-semibold text-xl">
          Services
        </Link>
      </li>
      <li>
        <Link href={`/blog`} className="font-semibold text-xl">
          Blog
        </Link>
      </li>
      <li>
        <Link href={`/contact`} className="font-semibold text-xl">
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <div className=" bg-base-100 shadow-sm">
      <div className="navbar mx-auto lg:w-11/12">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {NavLinks}
            </ul>
          </div>
          <Link href="/" className="text-xl">
            <img src="/assets/logo.svg" alt="Logo" width={40} height={40} />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
        </div>
        <div className="navbar-end">
          {status === "authenticated" ? (
            <>
              <li className="list-none">
                <Image
                  src={session?.user?.image || "/default-avatar.png"}
                  width={50}
                  height={50}
                  alt="user logo"
                  className="rounded-full mr-5"
                />
              </li>
              <li
                className="font-medium list-none px-5 py-2 rounded mr-2 cursor-pointer bg-orange-600 text-white"
                onClick={() => signOut()}
              >
                Log Out
              </li>
            </>
          ) : (
            <>
              <li className="font-medium list-none px-5 py-3 px-5 py-2 rounded mr-2 cursor-pointer bg-orange-600 text-white">
                <Link href="/login">Login</Link>
              </li>
              <li className="font-medium list-none px-5 py-3 px-5 py-2 rounded mr-2 cursor-pointer bg-gray-300 text-black">
                <Link href="/register">Register</Link>
              </li>
            </>
          )}

          <a className="btn rounded-sm">Appointment</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

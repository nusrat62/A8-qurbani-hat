"use client";

import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const user = null;

const handleSignOut = () => {
  console.log("logout");
};
  return (
    <div className="border-b px-2">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">

        {/* Logo */}
<div className="flex items-center gap-3">

  <Image
    src={"/logo.jpg"}
    alt="logo"
    loading="eager"
    width={80}
    height={80}
    className="object-cover rounded-full border border-green-500 shadow-md"
  />

  <h3 className="text-2xl font-extrabold tracking-wide leading-none">
    <span className="text-green-600">Qurbani</span>
    <span className="text-black">Hat</span>
  </h3>

</div>

      {/* Nav Links */}
<ul className="flex items-center gap-6 text-base font-semibold">
  <li>
    <Link
      href={"/"}
      className="transition-colors duration-300 hover:text-green-500"
    >
      Home
    </Link>
  </li>

  <li>
    <Link
      href={"/animals"}
      className="transition-colors duration-300 hover:text-green-500"
    >
      All Animals
    </Link>
  </li>

  {/* Always show My Profile */}
  <li>
    <Link
      href={"/my-profile"}
      className="transition-colors duration-300 hover:text-green-500"
    >
      My Profile
    </Link>
  </li>
</ul>

{/* Auth Section */}
<div className="flex gap-4 items-center">
  {!user && (
    <div className="flex items-center gap-3">
      <Link
        href={"/login"}
        className="px-5 py-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition duration-300"
      >
        Login
      </Link>

      <Link
        href={"/register"}
        className="px-5 py-2 rounded-lg border border-green-500 text-green-500 font-semibold hover:bg-green-500 hover:text-white transition duration-300"
      >
        Register
      </Link>
    </div>
  )}

  {user && (
    <div className="flex gap-3 items-center">
      <Avatar size="sm">
        <Avatar.Image
          alt={user?.name || "User"}
          src={user?.image}
          referrerPolicy="no-referrer"
        />
        <Avatar.Fallback>
          {user?.name?.charAt(0)}
        </Avatar.Fallback>
      </Avatar>

      <Button
        onClick={handleSignOut}
        size="sm"
        variant="danger"
      >
        SignOut
      </Button>
    </div>
  )}
</div>

      </nav>
    </div>
  );
};

export default Navbar;
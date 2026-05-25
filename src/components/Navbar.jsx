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

        {/* Nav Links (UPDATED FOR QURBANIHAT) */}
        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>

          <li>
            <Link href={"/animals"}>All Animals</Link>
          </li>

          {/* Always show My Profile */}
          <li>
            <Link href={"/my-profile"}>My Profile</Link>
          </li>
        </ul>

        {/* Auth Section (SAME STYLE) */}
        <div className="flex gap-4">
          {!user && (
            <ul className="flex items-center text-sm gap-5">
              <li>
                <Link href={"/login"}>Login</Link>
              </li>

              <li>
                <Link href={"/register"}>Register</Link>
              </li>
            </ul>
          )}

          {user && (
            <div className="flex gap-3">
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
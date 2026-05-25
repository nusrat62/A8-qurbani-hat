import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center text-white"
      style={{
        backgroundImage: "url('/hero-banner.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative w-full px-6 md:px-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
          Find Healthy Animals for Qurbani Easily
        </h1>

        <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
          Browse cows, goats, and sheep from trusted farmers across Bangladesh and book your Qurbani animal online.
        </p>

        <div className="flex gap-4">
          <Link href="/animals">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Browse Animals
            </Button>
          </Link>

          <Link href="/about">
            <Button variant="outline" className="text-white border-white">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
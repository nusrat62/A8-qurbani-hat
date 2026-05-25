"use client";

import { useMemo, useState } from "react";
import PhotoCard from "@/components/PhotoCard";
import animalsData from "../../../public/animalsData.json";

const sortOptions = [
  { label: "Default", value: "default" },
  { label: "Price: Low to High", value: "asc" },
  { label: "Price: High to Low", value: "desc" },
];

const AllAnimalsPage = () => {
  const [sortBy, setSortBy] = useState("default");

  const sortedAnimals = useMemo(() => {
    const animals = [...animalsData];

    if (sortBy === "asc") {
      animals.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "desc") {
      animals.sort((a, b) => b.price - a.price);
    }

    return animals;
  }, [sortBy]);

  return (
    <div className="px-4 md:px-8 xl:px-12 pb-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-3xl font-bold text-center mt-15 text-black tracking-tight font-sans">
          All Animals
        </h1>

        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm md:text-base text-gray-600">
            Showing {sortedAnimals.length} animals
          </p>

          <label className="flex items-center gap-3 text-sm font-medium text-gray-700">
            <span>Sort by price</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-8">
          {sortedAnimals.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllAnimalsPage;
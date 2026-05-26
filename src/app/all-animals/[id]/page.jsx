import Image from "next/image";
import BuyButton from "@/components/BuyButton";

const AnimalsDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    "https://a8-qurbani-hat.vercel.app/animalsData.json",
    { cache: "no-store" }
  );

  const animals = await res.json();
  const animal = animals.find((a) => a.id === parseInt(id));

  if (!animal) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500 text-xl font-bold">
        Animal not found 😢
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden grid md:grid-cols-2 gap-6">

        {/* Image Section */}
       <div className="relative w-full h-[400px] md:h-full">
  <Image
    src={animal.image}
    alt={animal.name}
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, 50vw"
    priority
  />
</div>

        {/* Details Section */}
        <div className="p-6 flex flex-col justify-between">

          <div>
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full">
              {animal.badge || "Available"}
            </span>

            <h1 className="text-3xl font-bold mt-3 text-gray-800">
              {animal.name}
            </h1>

            <p className="text-gray-600 mt-2">
              {animal.description}
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4 mt-6 text-sm">

              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-gray-500">Type</p>
                <p className="font-semibold">{animal.type}</p>
              </div>

              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-gray-500">Breed</p>
                <p className="font-semibold">{animal.breed}</p>
              </div>

              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-gray-500">Weight</p>
                <p className="font-semibold">{animal.weight} kg</p>
              </div>

              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-gray-500">Age</p>
                <p className="font-semibold">{animal.age} years</p>
              </div>

              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-gray-500">Location</p>
                <p className="font-semibold">{animal.location}</p>
              </div>

              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-gray-500">Category</p>
                <p className="font-semibold">{animal.category || "N/A"}</p>
              </div>
            </div>
          </div>

          {/* Price + Button */}
          <div className="mt-6 flex items-center justify-between border-t pt-4">
            <div>
              <p className="text-gray-500 text-sm">Price</p>
              <p className="text-2xl font-bold text-green-600">
                ৳ {animal.price.toLocaleString()}
              </p>
            </div>

        <BuyButton />

          </div>

        </div>
      </div>
    </div>
  );
};

export default AnimalsDetailsPage;
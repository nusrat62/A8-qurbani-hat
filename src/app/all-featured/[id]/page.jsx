import Image from "next/image";
import featuredData from "../../../../public/featuredData.json";

const FeaturedDetailsPage = async ({ params }) => {
  const { id } = params;

  const animal = featuredData.find(
    (item) => item.id === parseInt(id)
  );

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

        {/* Image */}
        <div className="relative w-full h-[400px] md:h-full">
          <Image
            src={animal.image}
            alt={animal.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Details */}
        <div className="p-6 flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-yellow-100 text-green-700 rounded-full">
              {animal.badge}
            </span>

            <h1 className="text-3xl font-bold mt-3">
              {animal.name}
            </h1>

            <p className="text-gray-600 mt-2">
              {animal.description}
            </p>

            <div className="mt-4 text-sm text-gray-500">
              Breed: <span className="font-semibold">{animal.breed}</span>
            </div>
          </div>

          {/* Price + Button */}
          <div className="mt-6 border-t pt-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Price</p>
              <p className="text-2xl font-bold text-green-600">
                ৳ {animal.price}
              </p>
            </div>

            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl font-semibold">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedDetailsPage;
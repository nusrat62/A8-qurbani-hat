import Image from "next/image";

const FeaturedDetailsPage = async ({ params }) => {
  const { id } = params;

  const res = await fetch("/featuredData.json", {
    cache: "no-store",
  });

  const featuredData = await res.json();

  const animal = featuredData.find((item) => item.id === parseInt(id));

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

        <div className="relative w-full h-[400px]">
          <Image
            src={animal.image}
            alt={animal.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-6">
          <h1 className="text-3xl font-bold">{animal.name}</h1>
          <p className="mt-2 text-gray-600">{animal.description}</p>

          <p className="mt-4 text-green-600 font-bold text-2xl">
            ৳ {animal.price}
          </p>
        </div>

      </div>
    </div>
  );
};

export default FeaturedDetailsPage;
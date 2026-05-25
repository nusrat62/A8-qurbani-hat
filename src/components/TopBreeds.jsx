
import Image from "next/image";
import Link from "next/link";
import topBreedsData from "../../public/topBreeds.json";

const TopBreeds = () => {
  return (
    <section className="pb-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-3">
            Top Popular Breeds
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Most demanded animals this Qurbani season
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {topBreedsData.map((breed) => (
            <div
              key={breed.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
            >
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <Image
                  src={breed.image}
                  alt={breed.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-emerald-700">
                  {breed.type}
                </div>
              </div>

              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-gray-800">{breed.name}</h3>

                <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                  {breed.description}
                </p>

                <p className="text-amber-600 font-semibold text-sm mt-2">
                  {breed.priceRange}
                </p>

                <div className="mt-4">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Popularity</span>
                    <span>{breed.popularity}%</span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-emerald-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${breed.popularity}%` }}
                    />
                  </div>
                </div>

                <Link href={`/all-animals/${breed.id}`}>
                  <button className="mt-5 w-full border border-emerald-600 text-emerald-600 py-2 rounded-lg text-sm font-medium hover:bg-emerald-600 hover:text-white transition">
                    View {breed.name}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/all-animals">
            <button className="inline-flex items-center gap-2 bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-600 transition shadow-md hover:shadow-lg">
              View All Animals
              <span className="transition group-hover:translate-x-1">→</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopBreeds;
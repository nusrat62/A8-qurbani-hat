import PhotoCard from "./PhotoCard";
import animalsData from "../../public/animalsData.json";

const TopGenerations = () => {
  const topPhotos = animalsData.slice(0, 8);

  return (
    <div className="px-4 md:px-8 xl:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl mt -8 md:text-3xl font-bold text-center text-black tracking-tight font-sans">
          Top Animals
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-8">
          {topPhotos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopGenerations;
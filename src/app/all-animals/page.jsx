import PhotoCard from "@/components/PhotoCard";

const AllAnimalsPage = async() => {
    const res = await fetch('https://a8-qurbani-hat.vercel.app/animalsData.json')
    const animals = await res.json();
    
    return (
        <div>
            <h1 className="text-4xl md:text-3xl font-bold text-center mt-15 text-black tracking-tight font-sans">
                All Animals
            </h1>
            <div className="grid grid-cols-4 gap-5 mt-8">
                {animals.map(photo => <PhotoCard key={photo.id} photo={photo} />
                )}
            </div>

        </div>
    );
};

export default AllAnimalsPage;      
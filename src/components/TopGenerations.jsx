import PhotoCard from "./PhotoCard";

const TopGenerations = async() => {
    const res = await fetch('https://a8-qurbani-hat.vercel.app/animalsData.json')
    const photos = await res.json();
    console.log(photos);
    const topPhotos = photos.slice(0, 8); 
    

    return (
        <div>
       <h1 className="text-4xl md:text-3xl font-bold text-center mt-15 text-black tracking-tight font-sans">
 Featured Animals
</h1>

            <div className="grid grid-cols-4 gap-5 mt-8">
                {topPhotos.map((photo) => <PhotoCard key={photo.id} photo={photo}/>)}
            </div>
        </div>
    );
};

export default TopGenerations;
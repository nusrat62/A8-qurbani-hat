import Image from "next/image";
import {Card,Chip} from "@heroui/react";
import { TbCurrencyTaka } from "react-icons/tb";



const PhotoCard = ({ photo }) => {
    console.log(photo);
    return (
        <Card className="border-2 border-gray-300 rounded-xl p-4">
            <div className="relative w-full aspect-square">
                <Image
                src={photo.image}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={photo.name}
                className="object-cover rounded-xl"
                />

                <Chip size="sm" className="absolute top-2 right-2">{photo.category}</Chip>
            </div>

            <div>
                <h2 className="text-lg font-bold gap-2">{photo.name}</h2>
            </div>
            <div className="flex items-center text-yellow-500 font-bold">
                <p>Price: {photo.price}</p>
                <p><TbCurrencyTaka /></p>

                
            </div>
           
            <div>
                <p className="text-gray-500 gap-2">Breed: {photo.breed}</p> 
            </div>
          
          <button className="bg-blue-500 text-white px-4 py-2 w-full rounded-lg mt-4 hover:bg-blue-600 transition-colors duration-300">View Details</button>
           
        </Card>
    );
};

export default PhotoCard;
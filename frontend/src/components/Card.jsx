import { Link } from "react-router-dom";
import { generateRandomColor } from "../services/card-services";
import { useEffect, useState } from "react";

function Card({_id, name, image}) {

    const [randomColor, setRandomColor] = useState('')
    
    useEffect(() => {
    const randomColor = generateRandomColor();
    setRandomColor(randomColor);
    }, [])

    return (
        <Link to={`/artistas/${_id}`}>
            <div>
                <div className="w-36 h-36 m-5 flex flex-col items-center rounded-md overflow-hidden hover:scale-105 transition duration-200">
                    <img src={image} alt="Capa do Album" className="w-full" />
                </div>
                <h1 className="text-white font-bold text-center mb-5">{name}</h1>
            </div>
        </Link>
     );
}

export default Card;
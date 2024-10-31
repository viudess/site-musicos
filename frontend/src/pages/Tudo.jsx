import { useEffect, useState } from "react";
import { waveform } from 'ldrs' 
import SliderCards from "../components/SliderCards";
import Card from "../components/Card";

export default function Tudo() {

  waveform.register();

  const [artistas, setArtistas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  
  useEffect(() => {
    setIsLoading(true);
      setTimeout(() => {
      fetch('http://localhost:3000/artistas')
      .then(res => res.json())
      .then(data => {setArtistas(data), console.log(data)})
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
      }, 3000)
  },[])

    return(
        <div className="bg-[#621B7A] rounded-lg w-8/12 grid grid-cols-1 justify-items-start pl-7 pt-7">
         {isLoading ?
          <div className="flex flex-col flex-wrap justify-center items-center w-full font-bold gap-4">
            <p>Carregando...</p>
              <l-waveform
                size="55"
                stroke="3.5"
                speed="1"
                color="white" 
              ></l-waveform>
            </div>
          :
    
          <SliderCards titulo="Tudo">
            {artistas
            .filter( genres => genres.genres)
            .sort((a, b) => a.name.localeCompare(b.name))
            .slice(0,16)
            .map(artista => (
                <Card key={artista._id} {...artista}/>
            ))}
          </SliderCards>
         }
        </div>
    )
}
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { waveform } from 'ldrs' 

export default function Artista() {

    waveform.register();

    const {id} = useParams()
    const [artista, setArtista] = useState({})
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
            const puxarArtista = async () => {
        try{
            const artista = await fetch(`https://site-musicos-wl7h.vercel.app/artistas/${id}`);
            const resposta = await artista.json();
            setArtista(resposta);
            }
        catch (error) {
                console.error('Error fetching data:', error);
        }
        finally {
            setIsLoading(false);
        }
    }
    puxarArtista();

    },[])
   
    
    return (
        <div className="bg-[#621B7A] rounded-md w-8/12 p-10">
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
          <>
            <div className="flex items-center mb-4 gap-5">
                <img src={artista.image} alt="Capa do artista" className="w-[150px] rounded-xl"/>
                <h1 className="text-6xl font-bold">{artista.name}</h1>
            </div>
            <p className="text-xl text-center">{artista.bio}</p>
          </>
        }
        </div>
    )
}
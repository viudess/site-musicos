import { useContext } from "react";
import { UserContext } from "../context/ContextoLogin"

export default function Sidebar() {

    const { isLogged } = useContext(UserContext);

    return(
        <aside className="bg-[#621B7A] rounded-lg w-3/12 flex justify-center items-center">
          {
          isLogged ? 
          <button className="bg-white py-2 px-4 rounded-full text-gray-900 font-medium hover:scale-105 transition duration-200">Criar Playlist</button>
          :
          <p className="font-semibold text-center">Faça Login para criar playlists personalizadas!</p>
         }
        </aside>
    )
}
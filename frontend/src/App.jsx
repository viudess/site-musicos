import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Container from "./components/Container";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {

  useEffect(() => {
      fetch('https://site-musicos-wl7h.vercel.app/artistas')
      .then(res => res.json())
      .then(data => {setArtistas(data), console.log(data)})
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  },[])

  return (
    <>
      <Header/>
      <Container>
        <Sidebar/>
        <Outlet/>
      </Container>
      <Footer />
    </>
  )
}

export default App

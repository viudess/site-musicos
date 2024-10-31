import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Container from "./components/Container";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {

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

import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalContextProvider from "./Components/context/GlobalContext";
import Footer from "./Components/Layouts/Footer/Footer";
import Navbar from "./Components/Layouts/Navbar/Navbar";
import DentistasContainer from "./Components/Pages/Dentistas/DentistasContainer";
import Contacto from "./Components/Pages/Contacto/Contacto";
import EspecialistaContainer from "./Components/Pages/Dentista/EspecialistaContainer";

function App() {
  return (
    <BrowserRouter>
      <GlobalContextProvider>
        <Routes>
          <Route element={<Navbar />}>
            <Route element={<Footer />}>
              <Route path="/" element={<h1>SOLUCIONES DENTALES</h1>} />
              <Route path="/dentistas" element={<DentistasContainer />} />
              <Route path="/dentista/:id" element={<EspecialistaContainer />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/favoritos" element={<h1>Favoritos</h1>} />
            </Route>
          </Route>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </GlobalContextProvider>
    </BrowserRouter>
  );
}
export default App;

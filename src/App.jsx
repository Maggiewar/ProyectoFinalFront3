import { BrowserRouter, Routes, Route} from "react-router-dom";
import GlobalContextProvider from "./Components/context/GlobalContext";
import Footer from "./Components/Layouts/Footer/Footer";
import Navbar from "./Components/Layouts/Navbar/Navbar";
import DentistasContainer from "./Components/Pages/Dentistas/DentistasContainer";

function App() {
return (
  <BrowserRouter>
    <GlobalContextProvider>
      <Routes>
        <Route element={<Navbar />}>
          <Route element={<Footer />}>
            <Route path="/" element={<h1>home</h1>} />
            <Route path="/dentistas" element={<DentistasContainer/>} />
            <Route path="/dentista/:id" element={<h1>Especialista</h1>} />
            <Route path="/contacto" element={<h1>Form de sugerencias</h1>} />
            <Route path="/favoritos" element={<h1>acá van los Favoritos</h1>} />
          </Route>
        </Route>
      </Routes>
    </GlobalContextProvider>
  </BrowserRouter>
);
    }
export default App;

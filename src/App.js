import { Routes, Route } from "react-router-dom";
import './App.css';
import DetalleCompra from "./components/DetalleCompra";
import AcercaDe from "./page/AcercaDe";
import Carrito from "./page/Carrito";
import Contacto from "./page/Contacto";
import Home from "./page/Home";
import Productos from "./page/Productos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Productos" element={<Productos/>} />
      <Route path="/Acerca" element={<AcercaDe/>} />
      <Route path="/Contacto" element={<Contacto/>} />
      <Route path="/Carrito" element={<Carrito/>} />
      <Route path="/DetalleCompra" element={<DetalleCompra/>} />
    </Routes>
  );
}

export default App;

import Header from "../../components/Header";
import ListaProductos from "../../components/ListaProductos";
import Footer from "../../components/Footer";

const Productos = () => {
    return (
        <>
            <Header />
            <div className="row m-3">
                <ListaProductos />
            </div>
            <Footer/>
        </>

    )
}

export default Productos;

import { productos } from "../../hardcode";
import { Link } from "react-router-dom";
import DetalleCompra from "../DetalleCompra";
import { useState } from "react";

const ListaProductos = () => {
    const [varible,setvariable] = useState("hola");
    const handleDetalleCompra = (item) =>{
        localStorage.setItem("productocarrito",JSON.stringify(item))
        console.log("este es el item",item)

    }
    return (
        <>

            {productos.map((item, index) => {
                return (

                    <div key={index} className="card m-3 " style={{ width: "18rem" }}>
                        <img src={item.imagePath} style={{ height: "300px", width: "200px" }} className="card-img-top" alt={item} />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">
                                {item.description}
                            </p>
                            <span>
                                <Link to="/Carrito" onClick={()=>handleDetalleCompra(item)}className="btn btn-primary">
                                    Comprar
                                </Link>&nbsp;&nbsp;&nbsp;&nbsp;
                                {" "} Precio {item.precio}
                            </span>
                        </div>
                    </div>

                )
            })}
          
        </>
    )
        
}

export default ListaProductos;
const ProductoCarrito = () => {
    return (

        <>
            <div className="container" style={{height:"700px"}}>
                <table className="table" style={{marginTop:"100px"}}>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Imagen</th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td><button className="btn btn-success">Editar</button></td>
                            <td><button className="btn btn-danger">Eliminar</button></td>
                            
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td><button className="btn btn-success">Editar</button></td>
                            <td><button className="btn btn-danger">Eliminar</button></td>
                            
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td><button className="btn btn-success">Editar</button></td>
                            <td><button className="btn btn-danger">Eliminar</button></td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )

}

export default ProductoCarrito;
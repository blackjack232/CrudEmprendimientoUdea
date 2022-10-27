import React from "react";
import { Link } from "react-router-dom";



const Header = () => {
    return (

        <>
            <nav className="navbar navbar-expand-lg bg-dark ">
                <div className="container-fluid ">
                    <Link className="navbar-brand text-white" to="/">
                        Desiderium Sex Shop
                    </Link >
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/Productos" >
                                    Productos
                                </Link>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    to="/Home"
                                >
                                    Acerca de 
                                </Link>
                                 <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" >
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" >
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" >
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>  */}
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/Acerca" >Acerca de</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/Contacto" >Contacto</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/Carrito" >Carrito</Link>
                            </li>
                        </ul>
                        <form className="d-flex w-50" role="search">
                            <input
                                className="form-control me-2 "
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success" type="submit">
                                Buscar
                            </button>
                        </form>
                        <div className="d-flex m-3" >
                            <div>
                                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" style={{ width: "50px" }} alt="Avatar" />
                            </div>
                            {/* <div>
                                <select className="form-select " aria-label="Default select example rounded-circle">
                                    <option value={0}>Perfil</option>
                                    <option value={1}>Cuenta</option>
                                    <option value={2}>Cerrar Session</option>
                                </select>
                            </div> */}

                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;
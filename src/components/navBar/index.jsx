import React from "react";
import CartWidget from "../CartWidget";

const NavBar = () => {

    return(
         
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">CleanCar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <span className="navbar-text">
            Productos            
          </span>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Limpieza</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Mantenimiento</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Performance</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#">Body</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" id="carrito" ><CartWidget /></a>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
    );
}

export default NavBar;


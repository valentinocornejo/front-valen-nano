import "./styles/Pagproductos.css";
import React, { useState } from "react";
export const Productos = () => {
  const handlehomepageClick = () => {

    window.location.href = "/homepage";
  };
  return (
    <div className="PPcontent">
      <div className="PPRemarco">
        <h1 className="PPtuperfil">Tu Producto</h1> <hr className="hr1" />
        <h2 className="PPh2">Producto:</h2> <br /> <hr className="hr1"/>
        <h2 className="PPh2">Precio:</h2> <br /> <hr className="hr1"/>
        <h2 className="PPh2">Alergenos:</h2> <br />
      </div>
      <br />
      <img src=".\src\pages\styles\akergu_2.png" alt="Logo" className="PPlogo-img" onClick={handlehomepageClick}/>
    </div>
  );
};

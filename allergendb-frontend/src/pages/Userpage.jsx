import "./styles/Pagproductos.css";
import React, { useState } from "react";
export const Perfil = () => {
  const handlehomepageClick = () => {

    window.location.href = "/homepage";
  };
  return (
    <div className="PPcontent">
      <div className="PPRemarco">
        <h1 className="PPtuperfil">Tu Perfil</h1> <hr className="hr1" />
        <h2 className="PPh2">Nombre Completo:</h2> <br /> <hr className="hr1"/>
        <h2 className="PPh2">Alergias:</h2> <br /> <hr className="hr1"/>
        <h2 className="PPh2">Edad:</h2> <br />
      </div>
      <br />
      <button className="PPboton">
      <img src=".\src\pages\styles\akergu_2.png" alt="Logo" className="PPlogo-img" onClick={handlehomepageClick}/>
      </button>
    </div>
  );
};

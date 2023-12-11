import "./styles/pagproductos.css";
import React, { useState, useEffect } from "react";
export const Perfil = () => {
  const [userProfile, setUserProfile] = useState({});

  const fetchProfileData = async () => {
    try {
      const response = await fetch("http://localhost:3002/api/mostrarperfil", {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {
        const profileData = await response.json();
        console.log("Datos del perfil:", profileData);
        setUserProfile(profileData);

        // Aquí puedes realizar la verificación y enviar la respuesta al backend
        if (profileData) {
          console.log("Correo electrónico del usuario:", profileData.email);
          // Puedes enviar profileData al backend si es necesario
        } else {
          console.error("Perfil no encontrado.");
          // Puedes manejar el error según tus necesidades
        }
      } else {
        const errorData = await response.text();
        console.error("Error al obtener los datos del perfil:", errorData);
      }
    } catch (error) {
      console.error("Error de red al obtener los datos del perfil:", error);
    }
  };
  useEffect(() => {
    fetchProfileData();
  }, []);

  const handlehomepageClick = () => {
    window.location.href = "/homepage";
  };
  return (
    <div className="PPcontent">
      <div className="PPRemarco">
        <h1 className="PPtuperfil">Tu Perfil</h1>
        <hr className="hr1" />

        <div className="PPinfo">
          <h2 className="PPh2">Nombre Completo:</h2>
          <p>
            {userProfile.nombre} {userProfile.apellido}
          </p>
          <hr className="hr1" />

          <h2 className="PPh2">Alergias:</h2>
          <p>{userProfile.alergias}</p>
          <hr className="hr1" />

          <h2 className="PPh2">Edad:</h2>
          <p>{userProfile.edad}</p>
          <hr className="hr1" />
        </div>
      </div>

      <br />

      <button className="PPboton" onClick={handlehomepageClick}>
        <img
          src=".\src\pages\styles\akergu_2.png"
          alt="Logo"
          className="PPlogo-img"
        />
      </button>
    </div>
  );
};

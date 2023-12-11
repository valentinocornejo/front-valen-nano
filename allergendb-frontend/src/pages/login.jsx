import "./styles/IniciodeSesion.css";
import React, { useState } from "react";

export const IniciodeSesion = () => {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3002/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        credentials: "include",
      });

      if (response.ok) {
        // Registro exitoso
        const data = await response.json();
        console.log(data.message);

        const isQuick = data.isQuick;

        if (isQuick) {
          // El usuario ya ha completado el "quickStart"
          console.log('El usuario ha completado el "quickStart".');
          window.location.href = "/homepage";
        } else {
          // El usuario no ha completado el "quickStart"
          console.log('El usuario no ha completado el "quickStart".');
          window.location.href = "/quickStart";
        }
      } else {
        // Registro fallido
        console.error("Error en el registro");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  const handleRegistroClick = () => {
    window.location.href = "/register";
  };

  return (
    <div className="IScontenido">
      <div className="ISRemarco">
        <form onSubmit={handleSubmit}>
          <div>
            <h1 className="ISh1">Inicio de Sesion</h1>
            <hr className="IShr" />
            <h2 className="ISh2">Correo Electronico</h2>
            <input
              className="ISinput"
              type="text"
              value={FormData.email}
              onChange={handleUsernameChange}
              placeholder="Correo Electronico..."
              required
            />
          </div>
          <div>
            <h2 className="ISh2">Contraseña</h2>
            <input
              className="ISinput"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Contraseña..."
              required
            />
          </div>
          <button className="ISbutton" type="submit" onClick={handleSubmit}>
            Iniciar sesión
          </button>
        </form>
        <center>
          <p className="ISp">¿No tenes cuenta?</p>
        </center>
        <center>
          {" "}
          <span
            style={{
              textDecoration: "underline",
              cursor: "pointer",
              color: "blue",
            }}
            onClick={handleRegistroClick}
          >
            Registrate
          </span>
        </center>
        <br />
      </div>
    </div>
  );
};

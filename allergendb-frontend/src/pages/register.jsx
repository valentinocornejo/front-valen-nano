import "./styles/Registro.css";
import React, { useState } from "react";

export const Registro = () => {
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
      const response = await fetch("http://localhost:3002/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }), // Utiliza 'username' en lugar de 'email'
      });

      if (response.ok) {
        // Registro exitoso
        const data = await response.json();
        console.log(data.message);
      } else {
        // Registro fallido
        console.error("Error en el registro");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  const handleInicioClick = () => {
    // Redirigir al usuario a la página de registro ("/register")
    window.location.href = "/login";
  };
  const handleRegistro2Click = () => {

  window.location.href = "/homepage";
};
  return (
    <div className="Rcontenido">
      <div className="RRemarco">
        <form onSubmit={handleSubmit}>
          <div>
          <h1 className="Rh1">Registro</h1> 
            <hr className="Rhr"/>
            <h2 className="Rh2">Correo Electronico</h2>
            <input 
              className="Rinput"
              type="text"
              value={FormData.email}
              onChange={handleUsernameChange}
              placeholder="Correo Electronico..."
              required
            />
          </div>
          <div>
            <h2 className="Rh2">Contraseña</h2>
            <input
              className="Rinput"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Contraseña..."
              required
            />
          </div>
          <button className="Rbutton"type="submit" onClick={handleRegistro2Click}>Registrate</button>
        </form>
        <center>
          <p className="Rp">¿Ya tenes cuenta?</p>
        </center>
        <center>
          {" "}
          <span
            style={{
              textDecoration: "underline",
              cursor: "pointer",
              color: "blue",
            }}
            onClick={handleInicioClick}
          >
            Inicio de Sesión
          </span>
        </center>
        <br />
      </div>
    </div>
  );
};

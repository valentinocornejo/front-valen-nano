import "./styles/PagInicio.css";
import React, { useState } from "react";
import Quagga from "quagga/dist/quagga.js";

export const Homepage = () => {
  const [logoutSuccess, setLogoutSuccess] = useState(false);

  const handleUserpageClick = () => {
    window.location.href = "/Userpage";
  };
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3002/api/borrarcookies", {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {
        setLogoutSuccess(true);
        setTimeout(() => (window.location.href = "/login"), 1000);
      } else {
        console.error("Error al cerrar sesión");
      }
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  const activateQuagga = async () => {
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: document.querySelector("#scanner-container"),
          constraints: {
            width: 640,
            height: 480,
          },
        },
        decoder: {
          readers: ["code_128_reader", "upc_reader"],
        },
      },
      async function (err) {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Initialization finished. Ready to start");
        Quagga.start();

        // Register a callback for the detected event
        Quagga.onDetected((result) => {
          const code = result.codeResult.code;
          console.log("Barcode detected:", code);
          Quagga.stop();
          sendBarcodeToBackend(code);
          // Add any additional logic you want to perform when a barcode is detected
        });

        // Register a callback for the processed event
        Quagga.onProcessed((result) => {
          const drawingCtx = Quagga.canvas.ctx.overlay;
          const drawingCanvas = Quagga.canvas.dom.overlay;

          if (result) {
            if (result.boxes) {
              drawingCtx.clearRect(
                0,
                0,
                parseInt(drawingCanvas.getAttribute("width")),
                parseInt(drawingCanvas.getAttribute("height"))
              );
              result.boxes
                .filter((box) => box !== result.box)
                .forEach((box) => {
                  Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
                    color: "green",
                    lineWidth: 2,
                  });
                });
            }

            if (result.box) {
              Quagga.ImageDebug.drawPath(
                result.box,
                { x: 0, y: 1 },
                drawingCtx,
                {
                  color: "blue",
                  lineWidth: 2,
                }
              );
            }

            if (result.codeResult && result.codeResult.code) {
              Quagga.ImageDebug.drawPath(
                result.line,
                { x: "start", y: "start" },
                drawingCtx,
                { color: "red", lineWidth: 2 }
              );
            }
          }
        });
      }
    );
  };

  // const sendBarcodeToBackend = async (code) => {
  //   console.log("Enviando código de barras al backend:", code);

  //   try {
  //     console.log(code);
  //     const response = await fetch("http://localhost:3002/api/scanbarcode", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ barcode: code }),
  //     });

  //     if (response.ok) {
  //       console.log("Respuesta del backend:", await response.json());
  //     } else {
  //       console.error("Error al enviar el código de barras al backend");
  //     }
  //   } catch (error) {
  //     console.error("Error al enviar el código de barras al backend:", error);
  //   }
  // };

  const sendBarcodeToBackend = async (code) => {
    console.log("Enviando código de barras al backend:", code);

    try {
      const response = await fetch("http://localhost:3002/api/scanbarcode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ barcode: code }),
      });

      if (response.ok) {
        console.log("Respuesta del backend:", await response.json());
      } else {
        console.error("Error al enviar el código de barras al backend");

        // Manejar específicamente el código de estado 404
        if (response.status === 404) {
          console.log("No se encontró el código de barras en el backend");
        }
      }
    } catch (error) {
      console.error("Error al enviar el código de barras al backend:", error);
    }
  };

  const handleproductClick = () => {
    window.location.href = "/Productos";
  };
  return (
    <div className="HPcontent">
      <header className="HPheader">
        <div className="left-elements">
          <img
            src=".\src\pages\styles\akergu_2.png"
            alt="Logo"
            className="HPlogo-img"
          />
        </div>
        <div className="right-elements">
          <button className="HPbutton" onClick={handleLogout}>
            Cerrar Sesión
          </button>
          <button className="HPimg-btn" onClick={handleUserpageClick}>
            <img
              className="HPimg"
              src="https://i.pinimg.com/originals/b8/fe/23/b8fe2363a39908a287e1a29c136202c9.png"
              alt="Icono"
            />
          </button>
        </div>
      </header>
      <input type="text" className="HPbuscador" placeholder="Buscar..." />
      <br />
      <input
        type="image"
        src="https://alberdisa.vteximg.com.br/arquivos/ids/155657-300-300/Crema-de-Leche-Sancor-x-360-Gr.jpg?v=637373411588370000"
        className="HPRecuadro"
        onClick={handleproductClick}
      />
      <input
        type="image"
        src="https://d2r9epyceweg5n.cloudfront.net/stores/001/651/135/products/pasta-mani-21-0e78cfe64ef120d80b16324085469977-1024-1024.png"
        className="HPRecuadro"
        onClick={handleproductClick}
      />
      <input
        type="image"
        src="https://d2r9epyceweg5n.cloudfront.net/stores/001/108/127/products/cerealitasbyb1-78e5364a4c380005d915868224619832-1024-1024.png"
        className="HPRecuadro"
        onClick={handleproductClick}
      />
      <div id="scanner-container">
        <button className="HPcodigo" onClick={activateQuagga}>
          <img
            src="https://img.freepik.com/vector-premium/icono-codigo-barras-negro-sobre-fondo-blanco-aislado-10-eps-vectoriales_209910-531.jpg"
            alt="Icono"
            className="HPbarras"
          />
          Start Quagga
        </button>
      </div>
    </div>
  );
};

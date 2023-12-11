import React from 'react';
import './styles/landing.css';

export const PagLand= () => {
    const handleRegistroClick = () => {
        // Redirigir al usuario a la página de registro ("/register")
        window.location.href = "/register";
      };
    return (
        <div>

            <div className="lhead"><img src=".\src\pages\styles\akergu_2.png" alt="Logo" className="llogo-img1"/></div>
            <div className="top-section">
                <h1 className="lh1">AllergenDB</h1>
                <h2 className="lh2">Come mejor, vivi mejor</h2>
                <button className="lboton" onClick={handleRegistroClick}>Unite a AllergenDB</button>    
           </div>
           <div className="middle-section">
                <div className="title-section">
                    <center><h1 className="lh1">Cuidate <br /> con <br /> Nosotros</h1></center>   
                </div>
                <div className='text-section'>
                    <div className='ltext'>
                        <center><h3 className="lh3">AllergenDB nace como un proyecto solidario con un propósito claro: mejorar la seguridad y calidad de vida de las personas con alergias alimenticias. Conscientes de los desafíos que enfrentan aquellos que deben lidiar con alergias, nuestra motivación es brindar una solución innovadora y accesible. La idea de una aplicación que informe a las personas escanear códigos de barras y recibir información instantánea sobre la presencia de alérgenos en los productos surge de la necesidad de empoderar a los individuos al tomar decisiones informadas sobre su alimentación.</h3></center>
                    </div>
                </div>
               
            </div>
            <div className="content-section">

                <h2 className="lh2">¿Como Escaneo mi Producto?</h2>

                <div className="content-image">

                    <div className='Paso1'>
                        <img src="https://cdn-icons-png.flaticon.com/512/3913/3913505.png" className='foto1' />
                        <p className="lp">Selecciona un producto y asegurate que contenga un codigo de barras</p>
                    </div>

                    <div className='Paso2'>
                        <img src="https://cdn-icons-png.flaticon.com/512/1652/1652004.png" className='foto2' />
                        <p className="lp">Accede a la camara de AllergenDB apretando el boton con forma de codigo de barras, escanea el codigo de tu producto</p>
                    </div>

                    <div className='Paso3'>
                        <img src="https://cdn-icons-png.flaticon.com/512/9409/9409674.png" className='foto3' />
                        <p className="lp">¡Listo! Ya tenes toda la informacion que necesitas sobre tu producto</p>
                    </div>

                </div>

            </div>

            <div className="bottom-section">
          <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <a href="#" class="fa fa-facebook"></a>
                <a href="#" class="fa fa-twitter"></a>
               <a href="#" class="fa fa-instagram"></a>
          </div>
            <img src=".\src\pages\styles\akergu_2.png" alt="Logo" className="llogo-img"/>
            </div>
        </div>
    );
}


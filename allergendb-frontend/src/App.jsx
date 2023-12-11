
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Registro } from "./pages/register";
import { IniciodeSesion } from "./pages/login";
import { MultiStepForm } from "./pages/quickStart";
import { Homepage } from "./pages/homepage";
import { PagLand } from "./pages/landingpage";
import { Productos } from "./pages/ProductPage";
import { Perfil } from "./pages/Userpage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Registro />} />
        <Route path="/login" element={<IniciodeSesion />} />
        <Route path="/quickstart" element={<MultiStepForm />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/landing" element={<PagLand />} />
        <Route path="/Userpage" element={<Perfil />} />
        <Route path="/Productos" element={<Productos />} />
        <Route path="/" element={<Navigate to="/landing" />} />
      </Routes>
    </Router>
  );
}

export default App;

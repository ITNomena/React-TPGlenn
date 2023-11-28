import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import '../assets/css/ajout.css';
import '../assets/css/integrationphotos.css';
import Ajouter from "./Ajouter";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  //render: affiche
  <StrictMode>
    <Ajouter />
  </StrictMode>
);

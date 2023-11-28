import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import IntegrationPhotos from "./IntegrationPhotos";
import '../assets/css/integrationphotos.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  //render: affiche
  <StrictMode>
    <IntegrationPhotos />
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Decrement from "./Decrement";
//import '../assets/css/ajout.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  //render: affiche
  <StrictMode>
    <Decrement />
  </StrictMode>
);

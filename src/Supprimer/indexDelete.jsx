import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Delete from "./Delete";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  //render: affiche
  <StrictMode>
    <Delete />
  </StrictMode>
);

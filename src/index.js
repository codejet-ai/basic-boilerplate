import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './styles.css'

import { FRAME as FRAME_1 } from "./pages/FRAME_0";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <FRAME_1 />
  </StrictMode>
);

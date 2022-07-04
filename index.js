import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

let contador = 0;
const refresh = () => {
  root.render(<App contadorInicial={contador} />);
};
setInterval(() => {
  contador++;
  refresh();
}, 1000);

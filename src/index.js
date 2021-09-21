import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Container from "./Container";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Container />
  </StrictMode>,
  rootElement
);

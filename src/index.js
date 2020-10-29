
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ReactDOM from "react-dom";
import MainPage from "./MainPage";
import Cards from "./DraggableCards/Cards";
import "./index.css";

ReactDOM.render(
  <DndProvider backend={HTML5Backend}>
    <MainPage />
    <Cards />
    
  </DndProvider>,
  document.getElementById("root")
);

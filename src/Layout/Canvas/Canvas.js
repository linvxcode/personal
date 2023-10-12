import React from "react";
import CanvasPattern from "./CanvasPattern";
import { LazyLoadComponent } from "./CanvasDebounce";
const Canvas = () => {

  return (
    <div>
      <LazyLoadComponent delayTime={2000}>
      <CanvasPattern/>
      </LazyLoadComponent>
    </div>
  );
};

export default Canvas;

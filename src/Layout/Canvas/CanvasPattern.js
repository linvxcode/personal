import React, { useEffect } from "react";
import { Gradient } from "whatamesh";
const CanvasPattern = () => {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);
  return (
    <div>
      <canvas id="gradient-canvas"></canvas>
    </div>
  );
};

export default CanvasPattern;

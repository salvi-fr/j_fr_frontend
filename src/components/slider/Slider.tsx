import React from "react";
import StyledSlider from "./Slider.style";

export interface SliderProps {}

const Slider: React.FC<SliderProps> = () => {
  return <StyledSlider type="range" min={0} max={100} />;
};

export default Slider;

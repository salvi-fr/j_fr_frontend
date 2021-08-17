import { colorOptions } from "interfaces";
import React from "react";
import StyledLinearProgress from "./LinearProgressStyle";

export interface LinearProgressProps {
  variant?: "determinate" | "indeterminate";
  color?: colorOptions;
  value?: number;
  thickness?: number;
  style?: object;
}

const LinearProgress: React.FC<LinearProgressProps> = (props) => {
  return <StyledLinearProgress {...props} />;
};

LinearProgress.defaultProps = {
  variant: "determinate",
  color: "primary",
  thickness: 6,
  value: 75,
};

export default LinearProgress;

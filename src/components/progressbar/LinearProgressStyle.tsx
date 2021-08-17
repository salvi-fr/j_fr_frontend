import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { LinearProgressProps } from "./LinearProgress";
import { color } from "styled-system";

const StyledLinearProgress = styled.div<LinearProgressProps>`
  position: relative;
  display: flex;
  height: ${(props) => props.thickness}px;
  background-color: ${themeGet("colors.text.hint")};
  border-radius: ${(props) => props.thickness}px;
  overflow: hidden;

  &:after {
    content: " ";
    position: absolute;
    top: 0;
    bottom: 0;
    width: ${(props) => props.value}%;
    background-color: ${(props) => themeGet(`colors.${props.color}.main`)};
  }

  ${color}
`;

export default StyledLinearProgress;

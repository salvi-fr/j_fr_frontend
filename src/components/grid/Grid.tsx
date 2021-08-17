import React, { Children, cloneElement, ReactElement } from "react";
import { FlexboxProps } from "styled-system";
import StyledGrid from "./GridStyle";

export interface GridProps {
  container?: boolean;
  containerHeight?: string;
  item?: boolean;
  xl?: number;
  lg?: number;
  md?: number;
  sm?: number;
  xs?: number;
  spacing?: number;
  horizontal_spacing?: number;
  vertical_spacing?: number;
  className?: string;
  children: ReactElement<GridProps>[] | any;
  [key: string]: unknown;
}

const Grid: React.FC<GridProps & FlexboxProps> = ({ children, ...props }) => {
  let childList = children;

  if (props.container) {
    childList = Children.map(children, (child) => {
      return cloneElement(child, {
        spacing: props.spacing,
        horizontal_spacing: props.horizontal_spacing,
        vertical_spacing: props.vertical_spacing,
      });
    });
  }

  return <StyledGrid {...props}>{childList}</StyledGrid>;
};

Grid.defaultProps = {
  spacing: 0,
  containerHeight: "unset",
};

export default Grid;

import styled from "styled-components";
import { getTheme } from "utils/utils";
import { CategoryDropdownProps } from "./CategoryDropdown";

export const StyledCategoryDropdown = styled.div<CategoryDropdownProps>`
  position: ${({ position }) => position};
  padding: 0.5rem 0px;
  left: 0;
  right: auto;
  top: ${({ position }) =>
    position === "absolute" ? "calc(100% + 0.7rem)" : "0.5rem"};
  border-radius: 4px;
  transform: ${({ open }) => (open ? "scaleY(1)" : "scaleY(0)")};
  transform-origin: top;
  background-color: ${getTheme("colors.body.paper")};
  box-shadow: ${getTheme("shadows.regular")};
  transition: all 250ms ease-in-out;
  z-index: 98;
`;

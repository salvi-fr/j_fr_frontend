import styled from "styled-components";
import { getTheme } from "../../utils/utils";

interface StyledSidenavProps {
  position?: "left" | "right";
  open: boolean;
  width?: number;
  scroll?: boolean;
}

export const StyledSidenav = styled.div<StyledSidenavProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 990;
  background: rgba(0, 0, 0, 0.53);

  @keyframes slide {
    from {
      ${({ position }) => position}: -${(props) => props.width}px;
    }
    to {
      ${({ position }) => position}: 0;
    }
  }

  .sidenav-content {
    position: absolute;
    background-color: ${getTheme("colors.body.paper")};
    ${({ position }) => position}: 0;
    width: ${(props) => props.width}px;
    height: 100%;
    overflow: ${({ scroll }) => (scroll ? "auto" : "hidden")};
    animation: slide 250ms linear;
  }

  & ~ .cursor-pointer {
    cursor: pointer;
  }
`;

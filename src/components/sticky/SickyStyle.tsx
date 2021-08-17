import styled from "styled-components";
import { getTheme } from "utils/utils";

interface StyledStickyProps {
  fixedOn: number;
  componentPosition: number;
  componentHeight: number;
  fixed: boolean;
}

const StyledSticky = styled.div<StyledStickyProps>`
  position: ${(props) => (props.fixed ? "fixed" : "relative")};
  top: ${(props) => props.fixedOn}px;
  right: 0;
  left: 0;

  // box-shadow: ${(props) =>
    props.fixed ? getTheme("shadows.small") : "unset"};

  transition: all 250ms ease-in-out;
  z-index: 99;

  & + .section-after-sticky {
    padding-top: ${(props) =>
      props.fixed ? `${props.componentHeight}px` : "inherit"};
  }
`;

export default StyledSticky;

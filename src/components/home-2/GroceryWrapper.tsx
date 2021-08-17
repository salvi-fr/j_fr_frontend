import { deviceSize, layoutConstant } from "@utils/constants";
import styled from "styled-components";

type Home2WrapperProps = {
  isSidenavFixed: boolean;
};

const GroceryWrapper = styled.div<Home2WrapperProps>`
  display: flex;
  max-width: ${layoutConstant.containerWidth};
  margin-left: auto;
  margin-right: auto;
  position: relative;

  .sidenav {
    width: ${layoutConstant.grocerySidenavWidth};
    position: ${({ isSidenavFixed }) =>
      isSidenavFixed ? "fixed" : "relative"};
    top: ${({ isSidenavFixed }) =>
      isSidenavFixed ? layoutConstant.headerHeight : 0};
    height: calc(100vh - ${layoutConstant.headerHeight});
    bottom: 0;
  }

  .content {
    position: relative;
    left: ${({ isSidenavFixed }) =>
      isSidenavFixed ? layoutConstant.grocerySidenavWidth : "unset"};
    width: calc(100% - 1.75rem - ${layoutConstant.grocerySidenavWidth});
    margin-left: 1.75rem;
  }

  .section-1 {
    margin-bottom: 3rem;
    margin-top: 1.75rem;
  }

  @media only screen and (max-width: ${deviceSize.md}px) {
    .sidenav {
      display: none;
    }
    .content {
      width: calc(100% - 2rem) !important;
      margin-left: 1rem !important;
      margin-right: 1rem !important;
      left: 0px !important;
    }
    .section-1 {
      background: red;
      margin-top: 1rem;
    }
  }
`;

export default GroceryWrapper;

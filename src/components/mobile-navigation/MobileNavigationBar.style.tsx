import styled from "styled-components";
import { layoutConstant } from "utils/constants";
import { getTheme } from "../../utils/utils";

const StyledMobileNavigationBar = styled.div`
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${layoutConstant.mobileNavHeight};
  justify-content: space-around;
  background: ${getTheme("colors.body.paper")};
  box-shadow: 0px 1px 4px 3px rgba(0, 0, 0, 0.1);
  z-index: 999;

  .link {
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 13px;

    .icon {
      margin-bottom: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media only screen and (max-width: 900px) {
    display: flex;
    width: 100vw;
  }
`;

export default StyledMobileNavigationBar;

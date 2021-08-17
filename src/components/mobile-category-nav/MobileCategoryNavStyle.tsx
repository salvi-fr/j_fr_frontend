import styled from "styled-components";
import { layoutConstant } from "utils/constants";
import { getTheme } from "../../utils/utils";

export const MobileCategoryNavStyle = styled.div`
  position: relative;

  .header {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
  }

  .main-category-holder {
    position: fixed;
    left: 0;
    top: ${layoutConstant.mobileHeaderHeight};
    bottom: ${layoutConstant.mobileNavHeight};
    background: ${getTheme("colors.gray.300")};
    overflow-y: auto;

    .main-category-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      height: 80px;
      width: 90px;
      border-bottom: 1px solid;
      border-bottom-color: ${getTheme("colors.text.disabled")};
      border-left-color: ${getTheme("colors.text.hint")};
      cursor: pointer;
    }
  }

  .container {
    position: fixed;
    top: ${layoutConstant.mobileHeaderHeight};
    bottom: ${layoutConstant.mobileNavHeight};
    left: 90px;
    padding: 0.5rem 1rem;
    flex: 1 1 0;
    overflow-y: auto;
  }

  .ellipsis {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

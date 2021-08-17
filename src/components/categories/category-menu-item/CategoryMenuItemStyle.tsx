import styled from "styled-components";
import { getTheme } from "../../../utils/utils";

export const StyledCategoryMenuItem = styled.div`
  .category-dropdown-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0px 1rem;
    height: 40px;
    min-width: 278px;
    white-space: pre;
    transition: all 250ms ease-in-out;

    .title {
      padding-left: 0.75rem;
      flex-grow: 1;
    }
  }

  :hover {
    & > .category-dropdown-link {
      color: ${getTheme("colors.primary.main")};
      background: ${getTheme("colors.primary.light")};
    }

    & > .mega-menu {
      display: block;
    }
  }
`;

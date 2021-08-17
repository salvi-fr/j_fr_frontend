import styled from "styled-components";
import { getTheme } from "../../utils/utils";

export const StyledMiniCart = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .cart-list {
    flex: 1 1 0;
    overflow: auto;
  }

  .cart-item {
    display: flex;
    align-items: center;
    padding: 1rem;

    .add-cart {
      text-align: center;
    }

    .product-image {
      border-radius: 5px;
      margin-left: 1rem;
      margin-right: 1rem;
      width: 64px;
      height: 64px;
    }

    .product-details {
      flex: 1 1 0;
      min-width: 0px;

      .title {
        margin: 0px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1;
      }
    }
    .clear-icon {
      color: ${getTheme("colors.gray.600")};
      cursor: pointer;
    }
  }
`;

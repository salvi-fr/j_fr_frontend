import { deviceSize } from "@utils/constants";
import styled from "styled-components";
import { space } from "styled-system";
import { getTheme } from "../../utils/utils";
import Card from "../Card";

export const StyledProductCard1 = styled(Card)`
  transition: all 250ms ease-in-out;
  margin: auto;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    .details {
      .add-cart {
        display: flex;
      }
    }
    .image-holder {
      .extra-icons {
        display: block;
      }
    }
  }

  .image-holder {
    position: relative;
    display: inlin-block;
    text-align: center;

    .extra-icons {
      display: none;
      position: absolute;
      top: 0.75rem;
      right: 0.75rem;
      cursor: pointer;
      z-index: 2;
    }

    @media only screen and (max-width: ${deviceSize.sm}px) {
      display: block;
    }
  }

  .details {
    padding: 1rem;

    .title,
    .categories {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .icon-holder {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
    }

    .favorite-icon {
      cursor: pointer;
    }
    .outlined-icon {
      svg path {
        fill: ${getTheme("colors.text.hint")};
      }
    }
    .add-cart {
      display: none;
      flex-direction: column;
      align-items: center;
      margin-top: auto;
    }
  }

  @media only screen and (max-width: 768px) {
    .details {
      .add-cart {
        display: flex;
      }
      // .title {
      //   margin-top: 1rem;
      // }
    }
  }
`;

export const StyledProductCard2 = styled.div`
  text-align: center;

  img {
    border-radius: 10px;
    width: 100%;
  }
  .title {
    margin-top: 0.75rem;
    margin-bottom: 0.25rem;
    color: ${getTheme("colors.text.secondary")};
  }
  .price {
    margin: 0;
    color: ${getTheme("colors.primary.main")};
  }
`;

export const StyledProductCard3 = styled.div`
  display: inline-block;
  border-radius: 8px;
  background-color: ${getTheme("colors.body.default")};
  transition: all 250ms ease-in-out;

  &:hover {
    box-shadow: ${getTheme("shadows.6")};
    .details {
      .add-cart {
        display: flex;
      }
    }
  }

  .image-holder {
    position: relative;
    display: inlin-block;
    text-align: center;

    .sale-chip {
      display: inline-block;
      position: absolute;
      top: 0.625rem;
      left: 0.625rem;
      padding: 0.4rem 0.78rem;
      border-radius: 500px;
      color: white;
      font-size: 13px;
      background: ${getTheme("colors.primary.main")};
    }
  }

  .details {
    padding: 1rem;

    h4 {
      margin: 0 0 0.5rem;
      color: ${getTheme("colors.text.secondary")};
    }

    .price {
      display: flex;
      margin-top: 0.5rem;
      font-weight: 600;

      h4 {
        margin: 0px;
        padding-right: 0.5rem;
        color: ${getTheme("colors.primary.main")};
      }
      del {
        color: ${getTheme("colors.text.hint")};
      }
    }

    .icon-holder {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
    }

    .favorite-icon {
      cursor: pointer;
    }
    .outlined-icon {
      svg path {
        fill: ${getTheme("colors.text.hint")};
      }
    }
    .add-cart {
      display: none;
      align-items: center;
      margin-top: auto;

      span {
        padding: 0px 0.5rem;
        font-size: 15px;
        font-weight: 600;
      }
    }
  }
`;

export const StyledProductCard5 = styled.div`
  display: inlin-block;
  text-align: center;

  img {
    border-radius: 10px;
    display: block;
    width: 100%;
  }
  .title {
    margin-top: 10px;
    margin-bottom: 0px;
    font-size: 18px;
    font-weight: 700;
    color: ${getTheme("colors.text.primary")};
  }
`;

export const StyledProductCard7 = styled.div`
  position: relative;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${getTheme("colors.body.paper")};
  box-shadow: ${getTheme("shadows.4")};

  .product-details {
    padding: 20px;
  }
  .title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media only screen and (max-width: 425px) {
    flex-wrap: wrap;
    img {
      height: auto;
      min-width: 100%;
    }
    .product-details {
      // padding: 1rem;
    }
  }
  ${space}
`;

export const StyledProductCard9 = styled(Card)`
  .quick-view {
    display: none;
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    cursor: pointer;
  }
  .categories {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .categories {
    display: flex;
    .link {
      margin-right: 0.5rem;
      text-decoration: underline;
      font-size: 14px;
      color: ${getTheme("colors.text.hint")};
    }
  }

  h4 {
    margin: 0.5rem 0px;
    color: ${getTheme("colors.text.secondary")};
    text-align: left;
  }

  .price {
    display: flex;
    margin-top: 0.5rem;
    font-weight: 600;

    h4 {
      margin: 0px;
      padding-right: 0.5rem;
      color: ${getTheme("colors.primary.main")};
    }
    del {
      color: ${getTheme("colors.text.hint")};
    }
  }

  .icon-holder {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }

  .favorite-icon {
    cursor: pointer;
  }
  .outlined-icon {
    svg path {
      fill: ${getTheme("colors.text.hint")};
    }
  }
  .add-cart {
    display: none;
  }

  &:hover {
    .add-cart {
      display: flex;
    }
    .quick-view {
      display: block;
    }
  }
`;

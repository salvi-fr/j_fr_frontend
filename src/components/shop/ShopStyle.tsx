import styled from "styled-components";
import Card from "../Card";

export const ShopIntroWrapper = styled(Card)`
  .cover-image {
    background-image: url(/assets/images/banners/shop-cover.png);
    background-size: cover;
    background-position: center;
  }

  .description-holder {
    min-width: 250px;

    @media only screen and (max-width: 500px) {
      margin-left: 0px;
    }
  }
`;

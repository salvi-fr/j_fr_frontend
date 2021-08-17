import styled from "styled-components";
import Box from "../Box";

const FrequentlyBoughtWrapper = styled(Box)`
  @media only screen and (max-width: 425px) {
    .card-holder {
      position: relative;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0px;
    }

    .gray-box {
      min-width: 0px;
      width: 100%;
      margin-left: 0px;
      margin-right: 0px;
    }
  }
`;

export default FrequentlyBoughtWrapper;

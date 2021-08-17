import styled from "styled-components";
import Card from "../Card";

export const StyledSessionCard = styled(Card)`
  width: 500px;
  overflow: hidden;
  .content {
    padding: 3rem 3.75rem 0px;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    .content {
      padding: 1.5rem 1rem 0px;
    }
  }
`;

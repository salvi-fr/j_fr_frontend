import styled from "styled-components";

export const StyledCarouselCard1 = styled.div`
  text-align: left;
  margin-left: 280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0 1rem 2rem;

  .title {
    font-size: 50px;
    margin-top: 0px;
    margin-bottom: 1.35rem;
    line-height: 1.2;
  }

  .image-holder {
    position: relative;
    //   width: 50%;
    img {
      width: 100%;
    }
  }

  @media only screen and (max-width: 900px) {
    margin-left: 0px;
    padding-left: 0px;

    .title {
      font-size: 32px;
    }
  }

  @media only screen and (max-width: 425px) {
    .title {
      font-size: 16px;
    }
    .title + * {
      font-size: 13px;
    }
    .button-link {
      padding: 0.66rem 0.95rem;
      font-size: 13px;
    }
  }
`;

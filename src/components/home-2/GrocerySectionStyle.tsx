import styled from "styled-components";
import { deviceSize } from "utils/constants";

export const GrocerySection1Wrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;

  .card__inner-box {
    padding: 40px 0px 97px 72px;
  }

  .carousel-dot {
    position: absolute;
    bottom: 40px;
    left: 72px;
  }

  @media only screen and (max-width: ${deviceSize.sm}px) {
    .card__inner-box {
      padding: 1rem 1rem 4rem;
    }
    .carousel-dot {
      left: 1rem;
      bottom: 0.75rem;
    }
  }
`;

export const GrocerySection6Wrapper = styled.div`
  .carousel-card {
    position: relative;
    padding: 64px 72px;

    @media only screen and (max-width: ${deviceSize.sm}px) {
      padding: 1rem 1rem;
    }
  }
`;

export const GrocerySection10Wrapper = styled.div`
  .quote {
    position: absolute;

    & > div {
      height: 4rem;
      width: 4rem;
    }
  }
  .quote-open {
    left: 0;
    top: 0;
  }
  .quote-close {
    right: 0;
    bottom: 0;
  }

  .quote-content {
    padding: 3.5rem 6rem;
  }

  .avatar {
    margin-top: 0.3rem;
    margin-bottom: 1rem;
    margin-right: 2.5rem;
    transform: rotate(-15deg);
  }

  .carousel-card {
    position: relative;
    padding: 2.25rem 5rem;
  }

  @media only screen and (max-width: ${deviceSize.sm}px) {
    .carousel-card {
      padding: 1rem 1rem;
    }
    .quote {
      & > div {
        height: 2rem;
        width: 2rem;
      }
    }
    .content {
      padding: 1.25rem 3rem;
    }
  }
`;

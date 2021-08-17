import React from "react";
import Button from "../buttons/Button";
import Typography from "../Typography";
import { StyledCarouselCard1 } from "./CarouselCardStyle";

export interface CarouselCard1Props {}

const CarouselCard1: React.FC<CarouselCard1Props> = () => {
  return (
    <StyledCarouselCard1>
      <div>
        <h1 className="title">50% Off For Your First Shopping</h1>
        <Typography color="secondary.main" mb="1.35rem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis
          consequat eu, quam etiam at quis ut convallis.
        </Typography>
        <Button
          className="button-link"
          variant="contained"
          color="primary"
          p="1rem 1.5rem"
        >
          Visit Collections
        </Button>
      </div>

      <div className="image-holder">
        <img
          src="/assets/images/products/apple-watch-0.png"
          alt="apple-watch-1"
        />
      </div>
    </StyledCarouselCard1>
  );
};

export default CarouselCard1;

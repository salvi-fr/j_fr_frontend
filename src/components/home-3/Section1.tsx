import Carousel from "@component/carousel/Carousel";
import CategorySectionCreator from "@component/CategorySectionCreator";
import React from "react";
import Grid from "../grid/Grid";
import FashionCard1 from "./FashionCard1";
import Section2 from "./Section2";
import Section4 from "./Section4";
import Section5 from "./Section5";

export interface Section1Props {}

const arrowButtonStyle = {
  boxShadow: "none",
  background: "transparent",
};

const Section1: React.FC<Section1Props> = () => {
  return (
    <CategorySectionCreator>
      <Grid container spacing={6}>
        <Grid item md={5} xs={12}>
          <Carousel
            totalSlides={5}
            visibleSlides={1}
            arrowButtonColor="inherit"
            leftButtonStyle={{
              ...arrowButtonStyle,
              left: 8,
            }}
            rightButtonStyle={{
              ...arrowButtonStyle,
              right: 8,
            }}
          >
            {[...new Array(5)].map((_item, ind) => (
              <FashionCard1 key={ind} />
            ))}
          </Carousel>
        </Grid>
        <Grid item md={7} xs={12}>
          <Section2 />
          <Section4 />
          <Section5 />
        </Grid>
      </Grid>
    </CategorySectionCreator>
  );
};

export default Section1;

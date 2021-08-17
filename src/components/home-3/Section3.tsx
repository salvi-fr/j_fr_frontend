import React from "react";
import Grid from "../grid/Grid";
import FashionCard1 from "./FashionCard1";
import FashionCard2 from "./FashionCard2";
import FashionCard3 from "./FashionCard3";

export interface Section3Props {}

const Section3: React.FC<Section3Props> = () => {
  return (
    <Grid container spacing={6}>
      <Grid item md={4} xs={12}>
        <FashionCard1 />
      </Grid>
      <Grid item md={8} xs={12}>
        <FashionCard2 />
        <FashionCard3 />
      </Grid>
    </Grid>
  );
};

export default Section3;

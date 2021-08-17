import CategorySectionCreator from "@component/CategorySectionCreator";
import Grid from "@component/grid/Grid";
import React from "react";
import FashionCard5 from "./FashionCard5";

export interface Section7Props {}

const Section7: React.FC<Section7Props> = () => {
  return (
    <CategorySectionCreator>
      <Grid container spacing={6}>
        <Grid item md={6} xs={12}>
          <FashionCard5
            title="Big Saves on Home Decoration. Save Upto 80%"
            subtitle="Easy payment policy, 12 months 0% in interest."
            imgUrl="/assets/images/products/Rectangle 140.png"
            productUrl="/"
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <FashionCard5
            title="Exclusive Men’s Clothes. Save Upto 50%"
            subtitle="Comfortable, stylish, elegant and long lasting."
            imgUrl="/assets/images/products/Rectangle 140 (1).png"
            productUrl="/"
            bg="text.muted"
            color="white"
            subtitleColor="gray.400"
          />
        </Grid>
      </Grid>
    </CategorySectionCreator>
  );
};

export default Section7;

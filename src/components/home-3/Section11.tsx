import CategorySectionCreator from "@component/CategorySectionCreator";
import Grid from "@component/grid/Grid";
import React from "react";
import FashionCard6 from "./FashionCard6";

export interface Section11Props {}

const Section11: React.FC<Section11Props> = () => {
  return (
    <CategorySectionCreator>
      <Grid container spacing={6}>
        <Grid item md={6} xs={12}>
          <FashionCard6
            title="Art of Keeping Home Minimal & Organised."
            description="Maecenas leo ante, gravida vel lectus ac, iaculis lobortis enim. Proin nec orci nec nisl consequat molestie quis sit amet elit. Ut venenatis dignissim diam in auctor."
            imgUrl="/assets/images/products/photo (1).png"
            blogUrl="/"
            date="2020-02-24"
            commentCount={3}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <FashionCard6
            title="The Monthly Guide to Cleaning Your Home"
            description="Maecenas leo ante, gravida vel lectus ac, iaculis lobortis enim. Proin nec orci nec nisl consequat molestie quis sit amet elit. Ut venenatis dignissim diam in auctor."
            imgUrl="/assets/images/products/photo.png"
            blogUrl="/"
            date="2020-01-12"
            commentCount={14}
          />
        </Grid>
      </Grid>
    </CategorySectionCreator>
  );
};

export default Section11;

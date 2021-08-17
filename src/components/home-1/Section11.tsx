import productDatabase from "@data/product-database";
import React from "react";
import CategorySectionHeader from "../CategorySectionHeader";
import Container from "../Container";
import Grid from "../grid/Grid";
import ProductCard1 from "../product-cards/ProductCard1";

const Section11: React.FC = () => {
  return (
    <Container mb="70px">
      <CategorySectionHeader title="More For You" seeMoreLink="#" />
      <Grid container spacing={6}>
        {productDatabase.slice(48, 60).map((item, ind) => (
          <Grid item lg={3} md={4} sm={6} xs={12} key={ind}>
            <ProductCard1 price={23} off={25} hoverEffect {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Section11;

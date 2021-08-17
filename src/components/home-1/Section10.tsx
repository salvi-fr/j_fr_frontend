import LazyImage from "@component/LazyImage";
import productDatabase from "@data/product-database";
import Link from "next/link";
import React from "react";
import Card from "../Card";
import CategorySectionHeader from "../CategorySectionHeader";
import Container from "../Container";
import Grid from "../grid/Grid";
import Typography from "../Typography";

const Section10: React.FC = () => {
  return (
    <Container mb="70px">
      <CategorySectionHeader
        title="Categories"
        iconName="categories"
        seeMoreLink="#"
      />

      <Grid container spacing={6}>
        {categoryList.map((item, ind) => (
          <Grid item lg={2} md={3} sm={4} xs={12} key={ind}>
            <Link href="/">
              <a>
                <Card
                  display="flex"
                  alignItems="center"
                  p="0.75rem"
                  boxShadow="small"
                  borderRadius={8}
                  hoverEffect
                >
                  <LazyImage
                    src={productDatabase[ind * 13 + 100].imgUrl}
                    alt="fashion"
                    height="52px"
                    width="52px"
                    objectFit="contain"
                    borderRadius={8}
                  />
                  <Typography fontWeight="600" fontSize="14px" ml="10px">
                    {item}
                  </Typography>
                </Card>
              </a>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const categoryList = [
  "Automobile",
  "Car",
  "Fashion",
  "Electronics",
  "Mobile",
  "Laptop",
  "Desktop",
  "Tablet",
  "Fashion",
  "Electronics",
  "Furniture",
  "Camera",
];

export default Section10;

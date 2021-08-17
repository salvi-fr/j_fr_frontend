import Box from "@component/Box";
import Card from "@component/Card";
import FlexBox from "@component/FlexBox";
import Grid from "@component/grid/Grid";
import LazyImage from "@component/LazyImage";
import Link from "next/link";
import React from "react";
import { H3, H5, Tiny } from "../Typography";

const GrocerySection3: React.FC = () => {
  return (
    <Box>
      <H3 fontSize="25px" mb="2rem">
        Shop By Category
      </H3>

      <Grid container spacing={6}>
        {serviceList.map((item, ind) => (
          <Grid item md={4} sm={6} xs={12} key={ind}>
            <Link href={item.url}>
              <a>
                <FlexBox
                  as={Card}
                  alignItems="center"
                  px="2rem"
                  py="1rem"
                  height="100%"
                  hoverEffect={true}
                >
                  <LazyImage
                    src={item.imgUrl}
                    height={46}
                    width={46}
                    objectFit="contain"
                  />
                  <Box ml="2rem">
                    <Tiny color="primary.main">{item.subtitle}</Tiny>
                    <H5>{item.title}</H5>
                  </Box>
                </FlexBox>
              </a>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const serviceList = [
  {
    imgUrl: "/assets/images/icons/healthy-food.svg",
    title: "Fruits & Vegatables",
    subtitle: "Upto 60% off",
    url: "/",
  },
  {
    imgUrl: "/assets/images/icons/feeding-bottle.svg",
    title: "Baby Food",
    subtitle: "Upto 30% off",
    url: "/",
  },
  {
    imgUrl: "/assets/images/icons/wheat-flour.svg",
    title: "Rice & Flour",
    subtitle: "Upto 40% off",
    url: "/",
  },
  {
    imgUrl: "/assets/images/products/Orange 1kg 2.png",
    title: "Fruits & Vegatables",
    subtitle: "Upto 40% off",
    url: "/",
  },
  {
    imgUrl: "/assets/images/icons/feeding-bottle.svg",
    title: "Baby Food",
    subtitle: "Upto 30% off",
    url: "/",
  },
  {
    imgUrl: "/assets/images/icons/wheat-flour.svg",
    title: "Rice & Flour",
    subtitle: "Upto 60% off",
    url: "/",
  },
];

export default GrocerySection3;

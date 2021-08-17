import AppStore from "@component/AppStore";
import Box from "@component/Box";
import Card from "@component/Card";
import Carousel from "@component/carousel/Carousel";
import FlexBox from "@component/FlexBox";
import LazyImage from "@component/LazyImage";
import { H1, H5, H6 } from "@component/Typography";
import React from "react";
import { GrocerySection1Wrapper } from "./GrocerySectionStyle";

const GrocerySection1: React.FC = () => {
  return (
    <GrocerySection1Wrapper>
      <Carousel
        totalSlides={3}
        visibleSlides={1}
        showDots={true}
        showArrow={false}
        autoPlay={true}
        dotClass="carousel-dot"
        dotColor="white"
        spacing="0px"
      >
        {[...new Array(3)].map((_item) => (
          <Card
            bg="primary.main"
            color="white"
            borderRadius={0}
            position="relative"
          >
            <FlexBox alignItems="center" flexWrap="wrap">
              <Box className="card__inner-box" flex="1 1 0">
                <H1 maxWidth="280px" mb="0.5rem" lineHeight="1.27">
                  Get Your Grocery Within 40 Minutes
                </H1>
                <H6
                  maxWidth="470px"
                  color="inherit"
                  fontWeight="400"
                  mb="2.5rem"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                  sed pellentesque nibh tortor.
                </H6>

                <H5 fontSize="18px" fontWeight="700" mb="1.25rem">
                  Try our mobile app!
                </H5>

                <AppStore />
              </Box>
              <Box
                flex="1 1 0"
                minWidth="285px"
                height="180px"
                position="relative"
              >
                <LazyImage
                  src="/assets/images/products/cumin.png"
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
            </FlexBox>
          </Card>
        ))}
      </Carousel>
    </GrocerySection1Wrapper>
  );
};

export default GrocerySection1;

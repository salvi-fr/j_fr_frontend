import Carousel from "@component/carousel/Carousel";
import ProductCard11 from "@component/product-cards/ProductCard11";
import productDatabase from "@data/product-database";
import useWindowSize from "@hook/useWindowSize";
import React, { useEffect, useState } from "react";
import Box from "../Box";

export interface Section5Props {}

const Section5: React.FC<Section5Props> = () => {
  const [visibleSlides, setVisibleSlides] = useState(4);
  const width = useWindowSize();

  useEffect(() => {
    if (width < 500) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(3);
    else setVisibleSlides(4);
  }, [width]);

  return (
    <Box>
      <Carousel
        totalSlides={10}
        visibleSlides={visibleSlides}
        arrowButtonColor="inherit"
      >
        {productDatabase.slice(255, 265).map((item, ind) => (
          <ProductCard11 key={ind} {...item} />
        ))}
      </Carousel>
    </Box>
  );
};

export default Section5;

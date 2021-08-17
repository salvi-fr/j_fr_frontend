import Box from "@component/Box";
import Carousel from "@component/carousel/Carousel";
import ProductCard10 from "@component/product-cards/ProductCard10";
import productDatabase from "@data/product-database";
import useWindowSize from "@hook/useWindowSize";
import React, { useEffect, useState } from "react";
import { H3 } from "../Typography";

const GrocerySection7: React.FC = () => {
  const [visibleSlides, setVisibleSlides] = useState(3);
  const width = useWindowSize();

  useEffect(() => {
    if (width < 500) setVisibleSlides(1);
    //   else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(2);
    else setVisibleSlides(3);
  }, [width]);

  return (
    <Box>
      <H3 fontSize="25px" mb="2rem">
        Best of Home Essentials
      </H3>

      <Box my="-0.25rem">
        <Carousel
          totalSlides={9}
          visibleSlides={visibleSlides}
          step={3}
          showDots
          arrowButtonColor="inherit"
          showArrowOnHover={true}
        >
          {productDatabase.slice(190, 199).map((item, ind) => (
            <Box py="0.25rem">
              <ProductCard10 {...item} off={25} key={ind} />
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default GrocerySection7;

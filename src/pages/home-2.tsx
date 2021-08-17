import Box from "@component/Box";
import GrocerFooter from "@component/home-2/GroceryFooter";
import GrocerySection1 from "@component/home-2/GrocerySection1";
import GrocerySection2 from "@component/home-2/GrocerySection2";
import GrocerySection3 from "@component/home-2/GrocerySection3";
import GrocerySection4 from "@component/home-2/GrocerySection4";
import GrocerySection5 from "@component/home-2/GrocerySection5";
import GrocerySection6 from "@component/home-2/GrocerySection6";
import GrocerySection7 from "@component/home-2/GrocerySection7";
import GrocerySection8 from "@component/home-2/GrocerySection8";
import GrocerySection9 from "@component/home-2/GrocerySection9";
import GrocerySidenav from "@component/home-2/GrocerySidenav";
import GroceryWrapper from "@component/home-2/GroceryWrapper";
import GroceryLayout from "@component/layout/GroceryLayout";
import { debounce } from "lodash";
import React, { useCallback, useEffect, useState } from "react";

const Home2 = () => {
  const [isSidenavFixed, setSidenavFixed] = useState(false);

  const scrollListener = useCallback(
    debounce(() => {
      setSidenavFixed(window.pageYOffset > 60);
    }, 0),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  return (
    <GroceryWrapper isSidenavFixed={isSidenavFixed}>
      <Box className="sidenav">
        <GrocerySidenav isFixed={isSidenavFixed} />
      </Box>
      <Box className="content">
        <Box className="section-1">
          <GrocerySection1 />
        </Box>
        <Box mb="3rem" overflow="hidden">
          <GrocerySection2 />
        </Box>
        <Box mb="3rem">
          <GrocerySection3 />
        </Box>
        <Box mb="3rem">
          <GrocerySection4 />
        </Box>
        <Box mb="3rem">
          <GrocerySection5 />
        </Box>
        <Box mb="3rem">
          <GrocerySection6 />
        </Box>
        <Box mb="3rem">
          <GrocerySection7 />
        </Box>
        <Box mb="3rem">
          <GrocerySection8 />
        </Box>
        <Box mb="3rem">
          <GrocerySection9 />
        </Box>

        <GrocerFooter />
      </Box>
    </GroceryWrapper>
  );
};

Home2.layout = GroceryLayout;

export default Home2;

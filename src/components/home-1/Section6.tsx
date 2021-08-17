import LazyImage from "@component/LazyImage";
import productDatabase from "@data/product-database";
import React, { useState } from "react";
import Box from "../Box";
import CategorySectionHeader from "../CategorySectionHeader";
import Container from "../Container";
import FlexBox from "../FlexBox";
import Grid from "../grid/Grid";
import Hidden from "../hidden/Hidden";
import ProductCard1 from "../product-cards/ProductCard1";
import StyledProductCategory from "./ProductCategoryStyle";

const Section6: React.FC = () => {
  const [selected, setSelected] = useState("");

  const handleCategoryClick = ({ target: { id: brand } }) => {
    if (selected.match(brand)) {
      setSelected("");
    } else setSelected(brand);
  };

  return (
    <Container mb="80px">
      <FlexBox>
        <Hidden down={768} mr="1.75rem">
          <Box shadow={6} borderRadius={10} padding="1.25rem" bg="white">
            {brandList.map((brand, ind) => (
              <StyledProductCategory
                key={brand}
                id={brand}
                mb="0.75rem"
                bg={selected.match(brand) ? "white" : "gray.100"}
                shadow={selected.match(brand) ? 4 : null}
                onClick={handleCategoryClick}
              >
                <LazyImage
                  width="20px"
                  height="20px"
                  layout="fixed"
                  objectFit="contain"
                  src={`/assets/images/logos/${ind % 2 === 0 ? "v" : "u"}.png`}
                  alt="apple"
                />
                <span className="product-category-title">{brand}</span>
              </StyledProductCategory>
            ))}

            <StyledProductCategory
              id="all"
              mt="4rem"
              bg={selected.match("all") ? "white" : "gray.100"}
              shadow={selected.match("all") ? 4 : null}
              onClick={handleCategoryClick}
            >
              <span id="all" className="product-category-title show-all">
                View All Brands
              </span>
            </StyledProductCategory>
          </Box>
        </Hidden>

        <Box flex="1 1 0" minWidth="0px">
          <CategorySectionHeader title="Cars" seeMoreLink="#" />
          <Grid container spacing={6}>
            {productDatabase.slice(0, 6).map((item, ind) => (
              <Grid item lg={4} sm={6} xs={12} key={ind}>
                <ProductCard1 hoverEffect {...item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </FlexBox>
    </Container>
  );
};

const brandList = ["zerrari", "fesla", "btw", "boyota", "gini", "lord"];

export default Section6;

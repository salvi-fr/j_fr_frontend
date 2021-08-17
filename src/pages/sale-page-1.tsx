import Box from "@component/Box";
import { Chip } from "@component/Chip";
import Container from "@component/Container";
import FlexBox from "@component/FlexBox";
import Grid from "@component/grid/Grid";
import Icon from "@component/icon/Icon";
import SaleLayout1 from "@component/layout/SaleLayout1";
import SaleNavbar from "@component/navbar/SaleNavbar";
import Pagination from "@component/pagination/Pagination";
import ProductCard1 from "@component/product-cards/ProductCard1";
import Sticky from "@component/sticky/Sticky";
import { H1, H5, SemiSpan } from "@component/Typography";
import productDB from "@data/product-database";
import shadows from "@utils/themeShadows";
import React, { useCallback, useEffect, useState } from "react";

const SalePage1 = () => {
  const productPerPage = 28;
  const [productList, setProductList] = useState([]);
  const [isFixed, setIsFixed] = useState(false);
  const [selected, setSelected] = useState(1);
  const [page, setPage] = useState(0);

  const handleCategoryClick = useCallback(
    (category) => () => {
      setSelected(category);
    },
    []
  );

  const toggleIsFixed = useCallback((fixed) => {
    setIsFixed(fixed);
  }, []);

  const handlePageChange = (page) => {
    console.log(page);
    setPage(page);
  };

  const renderProductCount = () => {
    let startNumber = page * productPerPage;
    let endNumber = (page + 1) * productPerPage;
    let totalProduct = productDB.length;

    if (endNumber > totalProduct) endNumber = totalProduct;

    return `Showing ${
      startNumber + 1
    }-${endNumber} of ${totalProduct} products`;
  };

  useEffect(() => {
    setProductList(
      productDB.slice(page * productPerPage, (page + 1) * productPerPage)
    );
  }, [page]);

  return (
    <Container mt="2rem">
      <Sticky fixedOn={0} onSticky={toggleIsFixed}>
        {!isFixed ? (
          <Box display="none" />
        ) : (
          <SaleNavbar saleCategoryList={saleCategoryList} />
        )}
      </Sticky>

      <Box>
        <FlexBox mb="2rem" flexWrap="wrap">
          <H1 color="primary.main" mr="0.5rem" lineHeight="1">
            Flash Deals,
          </H1>
          <H1 color="text.muted" lineHeight="1">
            Enjoy Upto 80% discounts
          </H1>
        </FlexBox>
        <Box mb="2rem" overflow="hidden">
          <FlexBox m="-0.75rem" flexWrap="wrap">
            {saleCategoryList.map((item, ind) => (
              <FlexBox
                borderRadius="8px"
                border="1px solid"
                borderColor="gray.400"
                minWidth="200px"
                height="175px"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                m="0.75rem"
                flex="1 1 0"
                position="relative"
                cursor="pointer"
                bg={ind === selected ? "white" : "transparent"}
                transition="all 250ms ease-in-out"
                key={ind}
                onClick={handleCategoryClick(ind)}
              >
                <Icon
                  size="44px"
                  color={ind === selected ? "primary" : "secondary"}
                >
                  {item.icon}
                </Icon>
                <H5 color={ind === selected ? "primary.main" : "inherit"}>
                  {item.title}
                </H5>
                <Chip
                  fontWeight="600"
                  fontSize="10px"
                  p="5px 10px"
                  bg={ind === selected ? "primary.main" : "gray.300"}
                  color={ind === selected ? "white" : "inherit"}
                  position="absolute"
                  top="1rem"
                  right="1rem"
                  boxShadow={ind === selected ? shadows.badge : "inherit"}
                >
                  Upto 40% off
                </Chip>
              </FlexBox>
            ))}
          </FlexBox>
        </Box>
      </Box>

      <Grid container spacing={6}>
        {productList.map((item, ind) => (
          <Grid item lg={3} md={4} sm={6} xs={12} key={ind}>
            <ProductCard1 {...item} />
          </Grid>
        ))}
      </Grid>

      <FlexBox
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        my="4rem"
      >
        <SemiSpan>{renderProductCount()}</SemiSpan>
        <Pagination
          pageCount={Math.ceil(productDB.length / productPerPage)}
          onChange={handlePageChange}
        />
      </FlexBox>
    </Container>
  );
};

const saleCategoryList = [
  {
    icon: "women-dress",
    title: "Women",
  },
  {
    icon: "beauty-products",
    title: "Cosmetics",
  },
  {
    icon: "camera",
    title: "Eelctronics",
  },
  {
    icon: "sofa",
    title: "Furniture",
  },
];

SalePage1.layout = SaleLayout1;

export default SalePage1;

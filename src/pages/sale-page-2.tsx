import productDatabase from "@data/product-database";
import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import FlexBox from "../components/FlexBox";
import Grid from "../components/grid/Grid";
import SaleLayout2 from "../components/layout/SaleLayout2";
import Pagination from "../components/pagination/Pagination";
import ProductCard1 from "../components/product-cards/ProductCard1";
import { SemiSpan } from "../components/Typography";

const SalePage2 = () => {
  const productPerPage = 28;
  const [productList, setProductList] = useState([]);
  const [page, setPage] = useState(0);

  const handlePageChange = (page) => {
    console.log(page);
    setPage(page);
  };

  const renderProductCount = () => {
    let startNumber = page * productPerPage;
    let endNumber = (page + 1) * productPerPage;
    let totalProduct = productDatabase.length;

    if (endNumber > totalProduct) endNumber = totalProduct;

    return `Showing ${
      startNumber + 1
    }-${endNumber} of ${totalProduct} products`;
  };

  useEffect(() => {
    setProductList(
      productDatabase.slice(page * productPerPage, (page + 1) * productPerPage)
    );
  }, [page]);

  return (
    <Container mt="2rem">
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
          pageCount={Math.ceil(productDatabase.length / productPerPage)}
          onChange={handlePageChange}
        />
      </FlexBox>
    </Container>
  );
};

SalePage2.layout = SaleLayout2;

export default SalePage2;

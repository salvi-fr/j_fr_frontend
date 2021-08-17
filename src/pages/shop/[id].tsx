import FlexBox from "@component/FlexBox";
import Grid from "@component/grid/Grid";
import Hidden from "@component/hidden/Hidden";
import Icon from "@component/icon/Icon";
import NavbarLayout from "@component/layout/NavbarLayout";
import ProductCardList from "@component/products/ProductCard1List";
import ProductFilterCard from "@component/products/ProductFilterCard";
import ShopIntroCard from "@component/shop/ShopIntroCard";
import Sidenav from "@component/sidenav/Sidenav";
import React from "react";
import useWindowSize from "../../hooks/useWindowSize";

const Shop = () => {
  const width = useWindowSize();
  const isTablet = width < 1025;

  return (
    <div>
      <ShopIntroCard />
      <Grid container spacing={6}>
        <Hidden as={Grid} item md={3} xs={12} down={1024}>
          <ProductFilterCard />
        </Hidden>

        <Grid item md={9} xs={12}>
          {isTablet && (
            <Sidenav
              position="left"
              scroll={true}
              handle={
                <FlexBox justifyContent="flex-end" mb="12px">
                  <Icon>options</Icon>
                </FlexBox>
              }
            >
              <ProductFilterCard />
            </Sidenav>
          )}
          <ProductCardList />
        </Grid>
      </Grid>
    </div>
  );
};

Shop.layout = NavbarLayout;

export default Shop;

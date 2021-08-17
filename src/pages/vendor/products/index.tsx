import Avatar from "@component/avatar/Avatar";
import IconButton from "@component/buttons/IconButton";
import FlexBox from "@component/FlexBox";
import Hidden from "@component/hidden/Hidden";
import Icon from "@component/icon/Icon";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";
import VendorDashboardLayout from "@component/layout/VendorDashboardLayout";
import Pagination from "@component/pagination/Pagination";
import TableRow from "@component/TableRow";
import Typography, { H5 } from "@component/Typography";
import Link from "next/link";
import React from "react";

const Products = () => {
  return (
    <div>
      <DashboardPageHeader title="Products" iconName="delivery-box" />

      <Hidden down={769}>
        <TableRow padding="0px 18px" mb="-0.125rem" boxShadow="none" bg="none">
          <FlexBox my="0px" mx="6px" flex="2 2 220px !important">
            <H5 ml="56px" color="text.muted" textAlign="left">
              Name
            </H5>
          </FlexBox>
          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Stock
          </H5>
          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Regular price
          </H5>
          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Sale Price
          </H5>
          <H5
            flex="0 0 0 !important"
            color="text.muted"
            px="22px"
            my="0px"
          ></H5>
        </TableRow>
      </Hidden>

      {productList.map((item, ind) => (
        <Link href={item.href} key={ind}>
          <TableRow as="a" href={item.href} my="1rem" padding="6px 18px">
            <FlexBox alignItems="center" m="6px" flex="2 2 220px !important">
              <Avatar src="/assets/images/products/imageshoes.png" size={36} />
              <Typography textAlign="left" ml="20px">
                Nike React Phantom Run Flyknit 2
              </Typography>
            </FlexBox>
            <H5
              m="6px"
              textAlign="left"
              fontWeight="600"
              color={item.stock < 6 ? "error.main" : "inherit"}
            >
              {item.stock.toString().padStart(2, "0")}
            </H5>
            <H5 m="6px" textAlign="left" fontWeight="400">
              ${item.price.toFixed(2)}
            </H5>
            <H5 m="6px" textAlign="left" fontWeight="400">
              ${item.price.toFixed(2)}
            </H5>

            <Hidden flex="0 0 0 !important" down={769}>
              <Typography textAlign="center" color="text.muted">
                <IconButton size="small">
                  <Icon variant="small" defaultcolor="currentColor">
                    arrow-right
                  </Icon>
                </IconButton>
              </Typography>
            </Hidden>
          </TableRow>
        </Link>
      ))}

      <FlexBox justifyContent="center" mt="2.5rem">
        <Pagination
          pageCount={5}
          onChange={(data) => {
            console.log(data.selected);
          }}
        />
      </FlexBox>
    </div>
  );
};

const productList = [
  {
    orderNo: "1050017AS",
    stock: 30,
    price: 350,
    href: "/vendor/products/5452423",
  },
  {
    orderNo: "1050017AS",
    stock: 20,
    price: 500,
    href: "/vendor/products/5452423",
  },
  {
    orderNo: "1050017AS",
    stock: 2,
    price: 700,
    href: "/vendor/products/5452423",
  },
  {
    orderNo: "1050017AS",
    stock: 25,
    price: 300,
    href: "/vendor/products/5452423",
  },
  {
    orderNo: "1050017AS",
    stock: 1,
    price: 700,
    href: "/vendor/products/5452423",
  },
];

Products.layout = VendorDashboardLayout;

export default Products;

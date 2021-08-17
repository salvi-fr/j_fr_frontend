import Link from "next/link";
import React, { Fragment } from "react";
import IconButton from "../buttons/IconButton";
import FlexBox from "../FlexBox";
import Hidden from "../hidden/Hidden";
import Icon from "../icon/Icon";
import Pagination from "../pagination/Pagination";
import TableRow from "../TableRow";
import Typography, { H5 } from "../Typography";

export interface VendorProductListProps {}

const VendorProductList: React.FC<VendorProductListProps> = () => {
  return (
    <Fragment>
      <Hidden down={769}>
        <TableRow padding="0px 18px" boxShadow="none">
          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Order #
          </H5>
          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Status
          </H5>
          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Date purchased
          </H5>
          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Total
          </H5>
          <H5
            flex="0 0 0 !important"
            color="text.muted"
            px="22px"
            my="0px"
          ></H5>
        </TableRow>
      </Hidden>

      {productList.map((item) => (
        <Link href={item.href}>
          <TableRow as="a" href={item.href} my="1rem" padding="6px 18px">
            <H5 m="6px" textAlign="left">
              {item.orderNo}
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
    </Fragment>
  );
};

const productList = [
  {
    orderNo: "1050017AS",
    status: "Pending",
    purchaseDate: new Date(),
    price: 350,
    href: "/vendor/orders/5452423",
  },
  {
    orderNo: "1050017AS",
    status: "Processing",
    purchaseDate: new Date(),
    price: 500,
    href: "/vendor/orders/5452423",
  },
  {
    orderNo: "1050017AS",
    status: "Delivered",
    purchaseDate: "2020/12/23",
    price: 700,
    href: "/vendor/orders/5452423",
  },
  {
    orderNo: "1050017AS",
    status: "Delivered",
    purchaseDate: "2020/12/23",
    price: 700,
    href: "/vendor/orders/5452423",
  },
  {
    orderNo: "1050017AS",
    status: "Cancelled",
    purchaseDate: "2020/12/15",
    price: 300,
    href: "/vendor/orders/5452423",
  },
];

export default VendorProductList;

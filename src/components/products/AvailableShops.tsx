import Link from "next/link";
import React from "react";
import Avatar from "../avatar/Avatar";
import Box from "../Box";
import Card from "../Card";
import FlexBox from "../FlexBox";
import Grid from "../grid/Grid";
import { H3, H4 } from "../Typography";

export interface AvailableShopsProps {}

const AvailableShops: React.FC<AvailableShopsProps> = () => {
  return (
    <Box mb="3.75rem">
      <H3 mb="1.5rem">Also Available at</H3>
      <Grid container spacing={8}>
        {shopList.map((item) => (
          <Grid item lg={2} md={3} sm={4} xs={12} key={item.name}>
            <Link href="/shop/53324">
              <a>
                <FlexBox
                  as={Card}
                  p="26px"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                >
                  <Avatar src={item.imgUrl} />
                  <H4 mt="0.75rem" color="gray.800">
                    {item.name}
                  </H4>
                </FlexBox>
              </a>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const shopList = [
  {
    name: "Tech Friend",
    imgUrl: "/assets/images/faces/propic.png",
  },
  {
    name: "Smart Shop",
    imgUrl: "/assets/images/faces/propic(1).png",
  },
  {
    name: "Gadget 360",
    imgUrl: "/assets/images/faces/propic(8).png",
  },
];

export default AvailableShops;

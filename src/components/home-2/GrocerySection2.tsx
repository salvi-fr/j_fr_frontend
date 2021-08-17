import Box from "@component/Box";
import React from "react";
import FlexBox from "../FlexBox";
import Grid from "../grid/Grid";
import Icon from "../icon/Icon";
import { H4, SemiSpan } from "../Typography";

const GrocerySection2: React.FC = () => {
  return (
    <Grid container spacing={6}>
      {serviceList.map((item, ind) => (
        <Grid item md={4} sm={6} xs={12} key={ind}>
          <FlexBox
            alignItems="center"
            p="1.5rem"
            border="1px solid"
            borderColor="gray.400"
            borderRadius={8}
          >
            <Box color="text.muted" mr="1rem">
              <Icon size="50px" defaultcolor="currentColor">
                {item.iconName}
              </Icon>
            </Box>
            <div>
              <H4 color="gray.900" fontSize="1.25rem" fontWeight="700">
                {item.title}
              </H4>
              <SemiSpan>{item.subtitle}</SemiSpan>
            </div>
          </FlexBox>
        </Grid>
      ))}
    </Grid>
  );
};

const serviceList = [
  {
    iconName: "truck",
    title: "Fast Delivery",
    subtitle: "Start from $10",
  },
  {
    iconName: "feedback-thumbs-up",
    title: "Great Feedback",
    subtitle: "97% positive",
  },
  {
    iconName: "shield",
    title: "Secure Payment",
    subtitle: "100% secured",
  },
];

export default GrocerySection2;

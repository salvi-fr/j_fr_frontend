import Box from "@component/Box";
import FlexBox from "@component/FlexBox";
import Icon from "@component/icon/Icon";
import { H3, SemiSpan } from "@component/Typography";
import React from "react";

const Section8: React.FC = () => {
  return (
    <FlexBox
      mb="3.75rem"
      p="1rem"
      border="1px solid"
      borderColor="gray.400"
      borderRadius={8}
      flexWrap="wrap"
    >
      {serviceList.map((item) => (
        <FlexBox alignItems="center" p="1rem" mx="auto" key={item.title}>
          <Icon size="42px" mr="0.87rem">
            {item.iconName}
          </Icon>
          <Box>
            <H3 lineHeight="1.3">{item.title}</H3>
            <SemiSpan color="text.muted">{item.subtitle}</SemiSpan>
          </Box>
        </FlexBox>
      ))}
    </FlexBox>
  );
};

const serviceList = [
  {
    title: "Free Delivery",
    subtitle: "Orders over",
    iconName: "delivery-truck",
  },
  {
    title: "Money Gurantee",
    subtitle: "7 Days Back",
    iconName: "piggy-bank",
  },
  {
    title: "365 Days",
    subtitle: "For free return",
    iconName: "alarm-clock",
  },
  {
    title: "Payment",
    subtitle: "Secure system",
    iconName: "credit-card-2",
  },
  {
    title: "Online Support",
    subtitle: "24/7 daily",
    iconName: "smartphone",
  },
];

export default Section8;

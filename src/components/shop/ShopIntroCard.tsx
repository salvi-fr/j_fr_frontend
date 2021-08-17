import React from "react";
import Avatar from "../avatar/Avatar";
import Box from "../Box";
import Button from "../buttons/Button";
import FlexBox from "../FlexBox";
import Icon from "../icon/Icon";
import Rating from "../rating/Rating";
import { H3, SemiSpan, Small } from "../Typography";
import { ShopIntroWrapper } from "./ShopStyle";

export interface ShopIntroCardProps {}

const ShopIntroCard: React.FC<ShopIntroCardProps> = () => {
  return (
    <ShopIntroWrapper mb="32px" pb="20px" overflow="hidden">
      <Box className="cover-image" height="202px" />

      <FlexBox mt="-64px" px="30px" flexWrap="wrap">
        <Avatar
          src="/assets/images/faces/propic.png"
          size={120}
          mr="37px"
          border="4px solid"
          borderColor="gray.100"
        />

        <Box className="description-holder" flex="1 1 0">
          <FlexBox
            flexWrap="wrap"
            justifyContent="space-between"
            alignItems="center"
            mt="3px"
            mb="22px"
          >
            <Box
              bg="secondary.main"
              borderRadius="4px"
              p="4px 16px"
              display="inline-block"
              my="8px"
            >
              <H3 fontWeight="600" color="gray.100">
                Scarlett Beauty
              </H3>
            </Box>

            <FlexBox my="8px">
              {socialLinks.map((item, ind) => (
                <a href={item.url} target="_blank" rel="noreferrer noopener">
                  <Icon
                    mr={ind < socialLinks.length - 1 && "10px"}
                    defaultcolor="auto"
                    size="30px"
                  >{`${item.name}_filled`}</Icon>
                </a>
              ))}
            </FlexBox>
          </FlexBox>

          <FlexBox
            flexWrap="wrap"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <FlexBox alignItems="center" mb="14px">
                <Rating color="warn" value={5} outof={5} readonly />
                <Small color="text.muted" pl="0.75rem" display="block">
                  (45)
                </Small>
              </FlexBox>

              <FlexBox color="text.muted" mb="8px" maxWidth="270px">
                <Icon defaultcolor="currentColor" size="15px" mt="5px">
                  map-pin-2
                </Icon>
                <SemiSpan color="text.muted" ml="12px">
                  845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark
                </SemiSpan>
              </FlexBox>

              <FlexBox color="text.muted" mb="8px">
                <Icon defaultcolor="currentColor" size="15px" mt="4px">
                  phone_filled
                </Icon>
                <SemiSpan color="text.muted" ml="12px">
                  (613) 343-9004
                </SemiSpan>
              </FlexBox>
            </Box>

            <a href="mailto:scarletbeauty@xmail.com">
              <Button variant="outlined" color="primary" my="12px">
                Contact Vendor
              </Button>
            </a>
          </FlexBox>
        </Box>
      </FlexBox>
    </ShopIntroWrapper>
  );
};

const socialLinks = [
  {
    name: "facebook",
    url: "https://facebook.com",
  },
  {
    name: "twitter",
    url: "https://twitter.com",
  },
  {
    name: "youtube",
    url: "https://youtube.com",
  },
  {
    name: "instagram",
    url: "https://instagram.com",
  },
];

export default ShopIntroCard;

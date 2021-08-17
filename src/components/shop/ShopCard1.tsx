import Link from "next/link";
import React from "react";
import Avatar from "../avatar/Avatar";
import Box from "../Box";
import IconButton from "../buttons/IconButton";
import FlexBox from "../FlexBox";
import Icon from "../icon/Icon";
import Rating from "../rating/Rating";
import { H3, SemiSpan } from "../Typography";
import { ShopCard1Wrapper } from "./ShopCardStyle";

export interface ShopCard1Props {
  name: string;
  rating: number;
  address: string;
  phone: string;
  coverImgUrl: string;
  imgUrl: string;
  shopUrl: string;
}

const ShopCard1: React.FC<ShopCard1Props> = ({
  name,
  rating,
  address,
  phone,
  coverImgUrl,
  imgUrl,
  shopUrl,
}) => {
  return (
    <ShopCard1Wrapper overflow="hidden" coverImgUrl={coverImgUrl}>
      <Box className="black-box" p="17px 30px 56px">
        <H3 fontWeight="600" mb="8px">
          {name}
        </H3>

        <Box mb="13px">
          <Rating size="small" value={rating || 0} outof={5} color="warn" />
        </Box>

        <FlexBox mb="8px">
          <Icon defaultcolor="currentColor" size="15px" mt="5px">
            map-pin-2
          </Icon>
          <SemiSpan color="white" ml="12px">
            {address}
          </SemiSpan>
        </FlexBox>

        <FlexBox>
          <Icon defaultcolor="currentColor" size="15px" mt="4px">
            phone_filled
          </Icon>
          <SemiSpan color="white" ml="12px">
            {phone}
          </SemiSpan>
        </FlexBox>
      </Box>

      <FlexBox pl="30px" pr="18px" justifyContent="space-between">
        <Avatar
          src={imgUrl}
          size={64}
          mt="-32px"
          border="4px solid"
          borderColor="gray.100"
        />
        <Link href={shopUrl}>
          <a>
            <IconButton size="small" my="0.25rem">
              <Icon defaultcolor="auto">arrow-long-right</Icon>
            </IconButton>
          </a>
        </Link>
      </FlexBox>
    </ShopCard1Wrapper>
  );
};

export default ShopCard1;

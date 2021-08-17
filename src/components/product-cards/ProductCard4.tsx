import Box from "@component/Box";
import HoverBox from "@component/HoverBox";
import LazyImage from "@component/LazyImage";
import { H4, Small } from "@component/Typography";
import React from "react";
import { CSSProperties } from "styled-components";
import FlexBox from "../FlexBox";
import Rating from "../rating/Rating";

export interface ProductCard4Props {
  className?: string;
  style?: CSSProperties;
  imgUrl: string;
  rating: number;
  title: string;
  price: number;
  reviewCount: number;
}

const ProductCard4: React.FC<ProductCard4Props> = ({
  imgUrl,
  rating,
  title,
  price,
  reviewCount,
}) => {
  return (
    <Box>
      <HoverBox mb="1rem" mx="auto" borderRadius={8}>
        <LazyImage
          src={imgUrl}
          width="100%"
          height="auto"
          layout="responsive"
          alt={title}
          mx="auto"
        />
      </HoverBox>

      <FlexBox justifyContent="center" alignItems="center" mb="0.25rem">
        <Rating value={rating} color="warn" />
        <Small fontWeight="600" pl="0.25rem">
          ({reviewCount})
        </Small>
      </FlexBox>

      <H4
        fontWeight="600"
        fontSize="14px"
        textAlign="center"
        mb="0.25rem"
        title={title}
        ellipsis
      >
        {title}
      </H4>
      <H4
        fontWeight="600"
        fontSize="14px"
        textAlign="center"
        color="primary.main"
      >
        ${Math.ceil(price).toLocaleString()}
      </H4>
    </Box>
  );
};

export default ProductCard4;

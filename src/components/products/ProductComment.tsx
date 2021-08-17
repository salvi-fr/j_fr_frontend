import React from "react";
import { getDateDifference } from "../../utils/utils";
import Avatar from "../avatar/Avatar";
import Box from "../Box";
import FlexBox from "../FlexBox";
import Rating from "../rating/Rating";
import { H5, H6, Paragraph, SemiSpan } from "../Typography";

export interface ProductCommentProps {
  name;
  imgUrl: string;
  rating: number;
  date: string;
  comment: string;
}

const ProductComment: React.FC<ProductCommentProps> = ({
  name,
  imgUrl,
  rating,
  date,
  comment,
}) => {
  return (
    <Box mb="32px" maxWidth="600px">
      <FlexBox alignItems="center" mb="1rem">
        <Avatar src={imgUrl} />
        <Box ml="1rem">
          <H5 mb="4px">{name}</H5>
          <FlexBox alignItems="center">
            <Rating value={rating} color="warn" readonly />
            <H6 mx="10px">{rating}</H6>
            <SemiSpan>{getDateDifference(date)}</SemiSpan>
          </FlexBox>
        </Box>
      </FlexBox>

      <Paragraph color="gray.700">{comment}</Paragraph>
    </Box>
  );
};

export default ProductComment;

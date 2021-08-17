import HoverBox from "@component/HoverBox";
import LazyImage from "@component/LazyImage";
import Link from "next/link";
import React from "react";
import Card from "../Card";
import FlexBox from "../FlexBox";
import { H6, SemiSpan } from "../Typography";

export interface ProductCard8Props {
  id: string;
  imgUrl: string;
  price: number;
  title: string;
  [key: string]: unknown;
}

const ProductCard8: React.FC<ProductCard8Props> = ({
  id,
  imgUrl,
  price,
  title,
  ...props
}) => {
  return (
    <Card p="1rem" {...props}>
      <Link href={`/product/${id}`}>
        <a>
          <HoverBox mb="0.75rem" borderRadius={8}>
            <LazyImage
              src={imgUrl || "/assets/images/products/Rectangle 116.png"}
              borderRadius={8}
              height={500}
              width={500}
              layout="responsive"
              objectFit="contain"
              objectPosition="center"
            />
          </HoverBox>
          <SemiSpan
            title={title}
            mb="0.25rem"
            color="inherit"
            ellipsis
            display="block"
          >
            {title}
          </SemiSpan>
          <FlexBox alignItems="center">
            <H6 color="primary.main" mr="0.25rem">
              ${price}
            </H6>
            <SemiSpan>
              <del>$1600</del>
            </SemiSpan>
          </FlexBox>
        </a>
      </Link>
    </Card>
  );
};

export default ProductCard8;

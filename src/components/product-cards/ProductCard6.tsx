import Card from '@component/Card';
import { Chip } from '@component/Chip';
import HoverBox from '@component/HoverBox';
import LazyImage from '@component/LazyImage';
import React from 'react';

export interface ProductCard6Props {
  imgUrl: string;
  title: string;
  subtitle: string;
}

const ProductCard6: React.FC<ProductCard6Props> = ({
  title,
  subtitle,
  imgUrl,
}) => {
  return (
    <Card position="relative">
      <Chip
        bg="secondary.main"
        position="absolute"
        color="white"
        fontWeight="600"
        fontSize="10px"
        p="4px 10px"
        top="0.875rem"
        left="0.875rem"
        zIndex={2}
      >
        {title}
      </Chip>

      <Chip
        bg="gray.300"
        position="absolute"
        color="gray.800"
        fontWeight="600"
        fontSize="10px"
        p="4px 10px"
        top="0.875rem"
        right="0.875rem"
        zIndex={2}
      >
        {subtitle}
      </Chip>

      <HoverBox position="relative" height="120px" borderRadius={8}>
        <LazyImage src={imgUrl} layout="fill" objectFit="cover" />
      </HoverBox>
    </Card>
  );
};

export default ProductCard6;

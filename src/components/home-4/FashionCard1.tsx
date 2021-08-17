import Box from "@component/Box";
import Card from "@component/Card";
import LazyImage from "@component/LazyImage";
import Typography, { H3, Small, Span } from "@component/Typography";
import Link from "next/link";
import React from "react";

export interface FashionCard1Props {}

const FashionCard1: React.FC<FashionCard1Props> = () => {
  return (
    <Link href="/">
      <a>
        <Card
          p="2.5rem"
          boxShadow="border"
          height="100%"
          borderRadius={4}
          hoverEffect
        >
          <LazyImage
            width={30}
            height={20}
            layout="responsive"
            objectFit="contain"
            src="/assets/images/products/shoes-1.png"
            alt="shoes"
          />

          <Box mt="3.5rem">
            <Typography color="text.muted" mb="0.5rem">
              SPECIAL OFFER
            </Typography>

            <H3 mb="0.5rem" fontSize="30px" lineHeight="1.3">
              <Span color="primary.main" fontSize="30px">
                Comfortable
              </Span>{" "}
              Original Cotton Sneaker
            </H3>

            <Typography color="text.muted" mb="1rem">
              Handcrafted from genuine Italian leather. One inner compartment
              with black satin lining
            </Typography>

            <Small
              fontWeight="700"
              borderBottom="2px solid"
              borderColor="primary.main"
            >
              SHOP NOW
            </Small>
          </Box>
        </Card>
      </a>
    </Link>
  );
};

export default FashionCard1;

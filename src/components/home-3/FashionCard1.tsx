import Button from "@component/buttons/Button";
import Link from "next/link";
import React from "react";
import Box from "../Box";
import Card from "../Card";
import Image from "../Image";
import { H2, H6, SemiSpan } from "../Typography";

export interface FashionCard1Props {}

const FashionCard1: React.FC<FashionCard1Props> = () => {
  return (
    <Card boxShadow="none" height="100%" borderRadius={4}>
      <Box maxWidth="320px" pt="70px" mx="auto">
        <H2 mb="0.5rem" textAlign="center">
          Introducing New Winter Collection
        </H2>
        <SemiSpan display="block" textAlign="center" mb="1.5rem">
          Starting at $39 & save upto 40%
        </SemiSpan>

        <Link href="/">
          <a>
            <Button mx="auto">
              <H6
                fontSize="12px"
                textAlign="center"
                borderBottom="2px solid"
                borderColor="primary.main"
                pb="2px"
              >
                SHOP NOW
              </H6>
            </Button>
          </a>
        </Link>
      </Box>

      <Image
        width="100%"
        src="/assets/images/products/Rectangle 130.png"
        alt="shoes"
      />
    </Card>
  );
};

export default FashionCard1;

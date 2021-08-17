import LazyImage from "@component/LazyImage";
import Link from "next/link";
import React from "react";
import Box from "../Box";
import Card from "../Card";
import Grid from "../grid/Grid";
import Typography, { H3, Small, Span } from "../Typography";

export interface FashionCard2Props {}

const FashionCard2: React.FC<FashionCard2Props> = () => {
  return (
    <Link href="/">
      <a>
        <Card boxShadow="border" borderRadius={4} mb="1.5rem">
          <Grid container spacing={0} flexWrap="wrap-reverse">
            <Grid item sm={6} xs={12}>
              <Box p="2.5rem">
                <Typography color="text.muted" mb="0.5rem">
                  WOMEN'S HANDBAG
                </Typography>

                <H3 mb="0.5rem" fontSize="30px" lineHeight="1.3">
                  <Span color="primary.main" fontSize="30px">
                    Minimalist
                  </Span>{" "}
                  Genuine Leather Bag
                </H3>

                <Typography color="text.muted" mb="1rem">
                  Handcrafted from genuine Italian leather. One inner
                  compartment with black satin lining
                </Typography>

                <Small
                  fontWeight="700"
                  borderBottom="2px solid"
                  borderColor="primary.main"
                >
                  SHOP NOW
                </Small>
              </Box>
            </Grid>

            <Grid item sm={6} xs={12}>
              <Box height="100%" position="relative">
                <LazyImage
                  src="/assets/images/models/model-3.png"
                  layout="fill"
                  objectFit="contain"
                  alt="model"
                />
              </Box>
            </Grid>
          </Grid>
        </Card>
      </a>
    </Link>
  );
};

export default FashionCard2;

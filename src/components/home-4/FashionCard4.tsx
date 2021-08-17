import LazyImage from "@component/LazyImage";
import Link from "next/link";
import React from "react";
import Box from "../Box";
import Card from "../Card";
import Grid from "../grid/Grid";
import Typography, { H3, Span } from "../Typography";

export interface FashionCard4Props {}

const FashionCard4: React.FC<FashionCard4Props> = () => {
  return (
    <Link href="/">
      <a>
        <Card boxShadow="border" height="100%" borderRadius={4} hoverEffect>
          <Grid
            container
            spacing={0}
            flexWrap="wrap-reverse"
            containerHeight="100%"
          >
            <Grid item sm={6} xs={12}>
              <Box p="2rem 2rem 0px">
                <Typography color="text.muted" mb="0.5rem">
                  SPECIAL OFFER
                </Typography>

                <H3 mb="0.5rem" fontSize="30px" lineHeight="1.3">
                  <Span color="primary.main" fontSize="30px">
                    $100 Off
                  </Span>{" "}
                  Over $1200
                </H3>

                <Typography color="text.muted" mb="1rem">
                  Handcrafted from genuine Italian
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Box height="100%" minHeight="200px" position="relative">
                <LazyImage
                  src="/assets/images/products/paper-bag.png"
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

export default FashionCard4;

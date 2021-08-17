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
    <Box flex="1 1 0">
      <Link href="/">
        <a>
          <Card
            p="1rem"
            boxShadow="border"
            borderRadius={4}
            mb="1.5rem"
            hoverEffect
          >
            <Grid container spacing={0} flexWrap="wrap-reverse">
              <Grid item sm={6} xs={12}>
                <Box p="1.5rem">
                  <Typography color="text.muted" mb="0.5rem">
                    WOMEN'S HANDBAG
                  </Typography>

                  <H3 mb="0.5rem" fontSize="30px" lineHeight="1.3">
                    <Span color="primary.main" fontSize="30px">
                      Minimalist
                    </Span>{" "}
                    Genuine Cotton Jacket
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
                <Box p="1.5rem">
                  <Box height="100%" minHeight="190px" position="relative">
                    <LazyImage
                      src="/assets/images/products/jacket.png"
                      layout="fill"
                      objectFit="contain"
                      alt="model"
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </a>
      </Link>
    </Box>
  );
};

export default FashionCard2;

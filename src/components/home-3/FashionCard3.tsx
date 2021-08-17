import Link from "next/link";
import React from "react";
import Box from "../Box";
import Card from "../Card";
import Grid from "../grid/Grid";
import Image from "../Image";
import Typography, { H3, Small, Span } from "../Typography";

export interface FashionCard3Props {}

const FashionCard3: React.FC<FashionCard3Props> = () => {
  return (
    <Link href="/">
      <a>
        <Card boxShadow="border" borderRadius={4}>
          <Grid container spacing={0} flexWrap="wrap-reverse">
            <Grid item sm={6} xs={12}>
              <Image
                pt="1.25rem"
                mx="auto"
                height="100%"
                maxWidth="100%"
                src="/assets/images/models/model-2.png"
                alt="model"
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <Box p="2.5rem">
                <Typography color="text.muted" mb="0.5rem">
                  MEN’S SHOE
                </Typography>

                <H3 mb="0.5rem" fontSize="30px" lineHeight="1.3">
                  <Span color="primary.main" fontSize="30px">
                    Stylish
                  </Span>{" "}
                  Genuine Leather Shoe
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
          </Grid>
        </Card>
      </a>
    </Link>
  );
};

export default FashionCard3;

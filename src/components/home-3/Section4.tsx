import FlexBox from "@component/FlexBox";
import LazyImage from "@component/LazyImage";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { getTheme } from "utils/utils";
import Box from "../Box";
import Card from "../Card";
import Grid from "../grid/Grid";
import Typography, { H3, Small } from "../Typography";

export interface Section4Props {}

const StyledCard = styled(Card)`
  transition: all 250ms ease-in-out;

  :hover {
    box-shadow: ${getTheme("shadows.large")};
  }
`;

const Section4: React.FC<Section4Props> = () => {
  return (
    <Box flex="1 1 0" mb="3rem">
      <Link href="/">
        <a>
          <StyledCard boxShadow="border" borderRadius={4} height="100%">
            <Grid
              container
              spacing={0}
              flexWrap="wrap-reverse"
              containerHeight="100%"
            >
              <Grid item sm={6} xs={12}>
                <Box p="1rem" position="relative">
                  <FlexBox
                    flexDirection="column"
                    height="100%"
                    minHeight="190px"
                    justifyContent="flex-end"
                    alignItems="center"
                    position="relative"
                  >
                    <LazyImage
                      layout="fill"
                      objectFit="contain"
                      src="/assets/images/products/kris-gerhard-0BKZfcamvGg-unsplash-removebg-preview 1.png"
                      alt="shoe"
                    />
                  </FlexBox>
                </Box>
              </Grid>

              <Grid item sm={6} xs={12}>
                <Box p="2rem">
                  <H3 mb="0.5rem">Converse Collecitons</H3>

                  <Typography color="text.muted" mb="1.5rem" maxWidth="200px">
                    Get the most exciting deals. Starting at $59
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
          </StyledCard>
        </a>
      </Link>
    </Box>
  );
};

export default Section4;

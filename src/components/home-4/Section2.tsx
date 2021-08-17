import React from "react";
import Box from "../Box";
import Card from "../Card";
import Grid from "../grid/Grid";
import Icon from "../icon/Icon";
import { H3, SemiSpan } from "../Typography";
import FashionCard4 from "./FashionCard4";

export interface Section2Props {}

const Section2: React.FC<Section2Props> = () => {
  return (
    <Box mb="1.5rem">
      <Grid container spacing={6}>
        <Grid item lg={3} sm={6} xs={12}>
          <Card
            display="flex"
            flexDirection="column"
            alignItems="center"
            p="2rem 3.5rem"
            boxShadow="border"
            height="100%"
            hoverEffect
          >
            <Icon color="primary" size="50px" mb="1.5rem">
              credit
            </Icon>

            <H3 mb="0.5rem" textAlign="center">
              Secure Payment
            </H3>

            <SemiSpan textAlign="center">
              100% secured payment & privacy
            </SemiSpan>
          </Card>
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <Card
            display="flex"
            flexDirection="column"
            alignItems="center"
            p="2rem 3.5rem"
            boxShadow="border"
            height="100%"
            hoverEffect
          >
            <Icon color="primary" size="50px" mb="1.5rem">
              feedback-thumbs-up
            </Icon>

            <H3 mb="0.5rem" textAlign="center">
              Great Feedback
            </H3>

            <SemiSpan textAlign="center">
              More than 97% positive & happy customers
            </SemiSpan>
          </Card>
        </Grid>
        <Grid item lg={6} xs={12}>
          <FashionCard4 />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section2;

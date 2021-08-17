import LazyImage from "@component/LazyImage";
import Link from "next/link";
import React from "react";
import Box from "../Box";
import Card from "../Card";
import Grid from "../grid/Grid";
import { H3, H6, SemiSpan } from "../Typography";

export interface FashionCard5Props {
  title: string;
  subtitle: string;
  productUrl: string;
  imgUrl: string;
  bg?: string;
  color?: string;
  subtitleColor?: string;
}

const FashionCard5: React.FC<FashionCard5Props> = ({
  title,
  subtitle,
  productUrl,
  imgUrl,
  bg,
  color,
  subtitleColor,
}) => {
  return (
    <Link href={productUrl}>
      <a>
        <Card height="100%" bg={bg || "body.paper"} color={color}>
          <Grid
            container
            spacing={1}
            flexWrap="wrap-reverse"
            alignItems="center"
          >
            <Grid item sm={6} xs={12}>
              <Box p="2rem">
                <H3 mb="0.5rem">{title}</H3>
                <SemiSpan color={subtitleColor || "text.muted"} display="block">
                  {subtitle}
                </SemiSpan>
                <Link href={productUrl}>
                  <a>
                    <H6
                      display="inline-block"
                      mt="1.5rem"
                      fontSize="12px"
                      textAlign="center"
                      borderBottom="2px solid"
                      borderColor="primary.main"
                      pb="2px"
                      color={color || "inherit"}
                    >
                      SHOP NOW
                    </H6>
                  </a>
                </Link>
              </Box>
            </Grid>
            <Grid item sm={6} xs={12}>
              <LazyImage
                src={imgUrl}
                width="100%"
                height="auto"
                layout="responsive"
                objectFit="contain"
                alt="model"
              />
            </Grid>
          </Grid>
        </Card>
      </a>
    </Link>
  );
};

export default FashionCard5;

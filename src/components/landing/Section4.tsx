import Box from "@component/Box";
import Card from "@component/Card";
import Container from "@component/Container";
import FlexBox from "@component/FlexBox";
import Grid from "@component/grid/Grid";
import LazyImage from "@component/LazyImage";
import { H3, H4 } from "@component/Typography";
import { getTheme } from "@utils/utils";
import React from "react";
import styled from "styled-components";

export interface Section4Props {}

const StyledContent = styled.div`
  position: relative;
  z-index: 1;

  :after,
  :before {
    content: " ";
    position: absolute;
    height: 150px;
    width: 150px;

    background: ${getTheme("colors.gray.300")};
    z-index: -1;
  }

  :after {
    top: 0;
    right: 0;
    border-radius: 300px;
    margin-right: -75px;
    margin-top: -65px;
    background: #fbeef0;
  }

  :before {
    bottom: 0;
    left: 0;
    border-radius: 300px;
    margin-left: -75px;
    margin-bottom: -65px;
  }
`;

const Section4: React.FC<Section4Props> = () => {
  return (
    <Container mb="7rem" id="technologies">
      <H3
        fontSize="40px"
        textAlign="center"
        fontWeight="900"
        color="secondary.main"
        mb="3.75rem"
      >
        Technologies Used
      </H3>

      <StyledContent>
        <Grid container spacing={7}>
          {list.map((item) => (
            <Grid item lg={3} md={4} sm={6} xs={12} key={item.title}>
              <Card
                as={FlexBox}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                minHeight="260px"
                boxShadow="large"
              >
                <Box mb="1rem">
                  <LazyImage
                    src={item.imgUrl}
                    height={60}
                    width={60}
                    objectFit="contain"
                    objectPosition="center"
                  />
                </Box>
                <H4
                  fontSize="18px"
                  fontWeight="700"
                  maxWidth="200px"
                  textAlign="center"
                  mx="auto"
                >
                  {item.title}
                </H4>
              </Card>
            </Grid>
          ))}
        </Grid>
      </StyledContent>
    </Container>
  );
};

const list = [
  {
    imgUrl: "/assets/images/logos/react.png",
    title: "React.Js",
  },
  {
    imgUrl: "/assets/images/logos/next-js.png",
    title: "Next.Js",
  },
  {
    imgUrl: "/assets/images/logos/typescript.png",
    title: "Typescript",
  },
  {
    imgUrl: "/assets/images/logos/styled-component.png",
    title: "Styled Component",
  },
  {
    imgUrl: "/assets/images/logos/styled-system.png",
    title: "Styled System",
  },
  {
    imgUrl: "/assets/images/logos/carousel.png",
    title: "Pure React Carousel",
  },
  {
    imgUrl: "/assets/images/logos/chart-js.png",
    title: "Chart.Js",
  },
  {
    imgUrl: "/assets/images/logos/formik.png",
    title: "Formik",
  },
];

export default Section4;

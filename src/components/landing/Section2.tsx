import Card from "@component/Card";
import Container from "@component/Container";
import FlexBox from "@component/FlexBox";
import Grid from "@component/grid/Grid";
import Icon from "@component/icon/Icon";
import { H3, H4 } from "@component/Typography";
import { getTheme } from "@utils/utils";
import React from "react";
import styled from "styled-components";

export interface Section2Props {}

const StyledContent = styled.div`
  position: relative;
  z-index: 1;

  :after,
  :before {
    content: " ";
    position: absolute;
    height: 100px;
    width: 200px;

    background: ${getTheme("colors.gray.300")};
    z-index: -1;
  }

  :after {
    top: 0;
    right: 0;
    border-top-right-radius: 300px;
    border-top-left-radius: 300px;
    margin-right: -100px;
    margin-top: -50px;
  }

  :before {
    bottom: 0;
    left: 0;
    border-bottom-right-radius: 300px;
    border-bottom-left-radius: 300px;
    margin-left: -100px;
    margin-bottom: -50px;
  }
`;

const Section2: React.FC<Section2Props> = () => {
  return (
    <Container mb="7rem" id="features">
      <H3
        fontSize="40px"
        textAlign="center"
        fontWeight="900"
        color="secondary.main"
        mb="3.75rem"
      >
        Powerful Features
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
                <Icon color="inherit" size="64px" mb="1.5rem">
                  {item.iconName}
                </Icon>
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
    iconName: "verify",
    title: "SEO Friendly",
  },
  {
    iconName: "cloud-data",
    title: "Server Side Rendered",
  },
  {
    iconName: "multivendor",
    title: "Multi-Vendor Support",
  },
  {
    iconName: "code",
    title: "Clean Code",
  },
  {
    iconName: "optimization",
    title: "Optimized for Mobile",
  },
  {
    iconName: "lighting",
    title: "Blazing Fast",
  },
  {
    iconName: "admin-dashboard",
    title: "Admin Dashboard",
  },
  {
    iconName: "figma",
    title: "Figma Ready",
  },
];

export default Section2;

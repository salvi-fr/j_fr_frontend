import Box from '@component/Box';
import Button from '@component/buttons/Button';
import Card from '@component/Card';
import Container from '@component/Container';
import FlexBox from '@component/FlexBox';
import Icon from '@component/icon/Icon';
import LazyImage from '@component/LazyImage';
import { H2, H4, Paragraph, Span } from '@component/Typography';
import React from 'react';
import { Link as Scroll } from 'react-scroll';
import styled from 'styled-components';
import Header from './Header';

const SectionWrapper = styled.div`
  background: url(/assets/images/landing/landing-bg-1.svg);
  background-size: cover;
`;

const Section1: React.FC = () => {
  return (
    <SectionWrapper>
      <Header />

      <Container id="section-1" mt="4rem" mb="7rem" position="relative">
        <Box maxWidth="830px" mx="auto" mb="100px" textAlign="center">
          <Box mx="auto" maxWidth="360px">
            <LazyImage
              src="/assets/images/landing/this-bonik.svg"
              width={362}
              height={73}
              layout="responsive"
            />
          </Box>
          <H4 color="primary.main" fontSize="18px">
            React, NextJs, Typescript
          </H4>
          <H2 color="secondary.main" fontSize="40px" mb="1rem" fontWeight="900">
            The Best React eCommerce Template
          </H2>
          <Paragraph color="gray.700" maxWidth="400px" mx="auto" mb="2rem">
            SEO friendly server side rendered React Next.js multipurpose
            eCommerce template.
          </Paragraph>
          <FlexBox justifyContent="center" m="-0.5rem">
            {/* <a
              href="https://themeforest.net/item/bonik-react-ecommerce-template/31837448?ref=bonik"
              target="_blank"
              rel="noreferrer noopener"
            > */}
            <a href="https://1.envato.market/oeNbNe">
              <Button variant="contained" color="primary" m="0.5rem">
                Purchase Now
              </Button>
            </a>
            {/* </a> */}
            <Scroll to="demos" duration={400} offset={-72 - 16} smooth={true}>
              <Button variant="outlined" color="primary" m="0.5rem">
                View Demos
              </Button>
            </Scroll>
          </FlexBox>
        </Box>

        <LazyImage
          src="/assets/images/landing/page-group.png"
          width={1207}
          height={318}
          layout="responsive"
        />

        <Card
          position="absolute"
          bottom="-36px"
          left="calc(50% - 95px)"
          boxShadow="regular"
          borderRadius={8}
        >
          <Button variant="text" size="none" p="1.5rem 2.5rem">
            <Span fontWeight="700">Ready For</Span>
            <Icon color="inherit" ml="1rem">
              figma
            </Icon>
          </Button>
        </Card>
      </Container>
    </SectionWrapper>
  );
};

export default Section1;

import Box from '@component/Box';
import Button from '@component/buttons/Button';
import Container from '@component/Container';
import FlexBox from '@component/FlexBox';
import Grid from '@component/grid/Grid';
import { H2, H4, Paragraph } from '@component/Typography';
import React, { useState } from 'react';
import styled from 'styled-components';
import PageCard from './PageCard';

const SectionWrapper = styled(Box)`
  background: url(/assets/images/landing/landing-bg-2.svg) center/contain
    no-repeat;
`;

const Section3: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const page = [demoPageList, shopPageList, customerPageList, vendorPageList];

  const list = page[selectedTab];

  const handleTabChange = (ind) => () => {
    setSelectedTab(ind);
  };

  return (
    <SectionWrapper mb="7rem" id="demos">
      <Container id="section-3" position="relative">
        <Box maxWidth="830px" mx="auto" mb="100px" textAlign="center">
          <H4 color="primary.main" fontSize="58px" fontWeight="900">
            25+
          </H4>

          <Paragraph color="primary.main" fontSize="18px">
            Server side rendered
          </Paragraph>

          <H2 color="secondary.main" fontSize="40px" fontWeight="900" mb="2rem">
            Demos & Pages
          </H2>

          <FlexBox justifyContent="center" flexWrap="wrap" m="-0.5rem">
            {['Demos', 'Shop Pages', 'User Account', 'Vendor Account'].map(
              (item, ind) => (
                <Button
                  variant={selectedTab === ind ? 'contained' : 'outlined'}
                  color="primary"
                  m="0.5rem"
                  onClick={handleTabChange(ind)}
                  key={item}
                >
                  {item}
                </Button>
              )
            )}
          </FlexBox>
        </Box>

        <Grid container spacing={8}>
          {list.map((item) => (
            <Grid item md={6} xs={12} key={item.previewUrl}>
              <PageCard {...item} />
            </Grid>
          ))}
        </Grid>

        {/* <a
          href="https://themeforest.net/item/bonik-react-ecommerce-template/31837448?ref=bonik"
          target="_blank"
          rel="noreferrer noopener"
        > */}
        <a href="https://1.envato.market/oeNbNe">
          <Button
            variant="contained"
            color="primary"
            minWidth="125px"
            mx="auto"
            mt="2.25rem"
          >
            Purchase Now
          </Button>
        </a>
        {/* </a> */}
      </Container>
    </SectionWrapper>
  );
};

const demoPageList = [
  {
    imgUrl: '/assets/images/landing/page-1.png',
    previewUrl: '/',
    title: 'Super Store',
  },
  {
    imgUrl: '/assets/images/landing/page-2.png',
    previewUrl: '/home-2',
    title: 'Grocery',
  },
  {
    imgUrl: '/assets/images/landing/page-3.png',
    previewUrl: '/home-4',
    title: 'Niche Market 1',
  },
  {
    imgUrl: '/assets/images/landing/page-4.png',
    previewUrl: '/home-3',
    title: 'Niche Market 2',
  },
];

const shopPageList = [
  {
    imgUrl: '/assets/images/landing/shop/page-7.png',
    previewUrl: '/sale-page-1',
    title: 'Sale Page 1',
  },
  {
    imgUrl: '/assets/images/landing/shop/page-8.png',
    previewUrl: '/sale-page-2',
    title: 'Sale Page 2',
  },
  {
    imgUrl: '/assets/images/landing/shop/page-2.png',
    previewUrl: '/shop/4345643',
    title: 'Shop',
  },
  {
    imgUrl: '/assets/images/landing/shop/page-6.png',
    previewUrl: '/product/456346',
    title: 'Product Details',
  },
  {
    imgUrl: '/assets/images/landing/shop/page-3.png',
    previewUrl: '/cart',
    title: 'Cart',
  },
  {
    imgUrl: '/assets/images/landing/shop/page-4.png',
    previewUrl: '/checkout',
    title: 'Checkout',
  },
  {
    imgUrl: '/assets/images/landing/shop/page-5.png',
    previewUrl: '/checkout-alternative',
    title: 'Checkout Alternative',
  },
  {
    imgUrl: '/assets/images/landing/shop/page-1.png',
    previewUrl: '/shops',
    title: 'Shop List',
  },
];

const vendorPageList = [
  {
    imgUrl: '/assets/images/landing/vendor/page-1.png',
    previewUrl: '/vendor/dashboard',
    title: 'Dashboard',
  },
  {
    imgUrl: '/assets/images/landing/vendor/page-2.png',
    previewUrl: '/vendor/account-settings',
    title: 'Account Settings',
  },
  {
    imgUrl: '/assets/images/landing/vendor/page-3.png',
    previewUrl: '/vendor/products',
    title: 'Products',
  },
  {
    imgUrl: '/assets/images/landing/vendor/page-4.png',
    previewUrl: '/vendor/add-product',
    title: 'Add Product',
  },
  {
    imgUrl: '/assets/images/landing/vendor/page-5.png',
    previewUrl: '/vendor/orders',
    title: 'Orders',
  },
  {
    imgUrl: '/assets/images/landing/customer/page-1.png',
    previewUrl: '/orders/23234',
    title: 'Order Details',
  },
];

const customerPageList = [
  {
    imgUrl: '/assets/images/landing/customer/page-5.png',
    previewUrl: '/profile',
    title: 'Profile',
  },
  {
    imgUrl: '/assets/images/landing/customer/page-6.png',
    previewUrl: '/profile/edit',
    title: 'Edit Profile',
  },
  {
    imgUrl: '/assets/images/landing/customer/page-2.png',
    previewUrl: '/orders',
    title: 'Orders',
  },
  {
    imgUrl: '/assets/images/landing/customer/page-1.png',
    previewUrl: '/address',
    title: 'Addresses',
  },
  {
    imgUrl: '/assets/images/landing/customer/page-3.png',
    previewUrl: '/orders/23234',
    title: 'Order Details',
  },
  {
    imgUrl: '/assets/images/landing/customer/page-4.png',
    previewUrl: '/payment-methods',
    title: 'Payment Methods',
  },
  {
    imgUrl: '/assets/images/landing/customer/page-7.png',
    previewUrl: '/support-tickets',
    title: 'Support Tickets',
  },
  {
    imgUrl: '/assets/images/landing/customer/page-8.png',
    previewUrl: '/support-tickets/32432423',
    title: 'Ticket Details',
  },
  {
    imgUrl: '/assets/images/landing/customer/page-9.png',
    previewUrl: '/wish-list',
    title: 'Wish List',
  },
];

export default Section3;

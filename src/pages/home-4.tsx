import Box from "@component/Box";
import Section3 from "@component/home-1/Section2";
import Section1 from "@component/home-4/Section1";
import Section2 from "@component/home-4/Section2";
import Section4 from "@component/home-4/Section4";
import Section5 from "@component/home-4/Section5";
import Section6 from "@component/home-4/Section6";
import Section7 from "@component/home-4/Section7";
import Section8 from "@component/home-4/Section8";
import Section9 from "@component/home-4/Section9";
import Navbar from "@component/navbar/Navbar";
import { Fragment } from "react";
import Container from "../components/Container";
import AppLayout from "../components/layout/AppLayout";

const Home4 = () => {
  return (
    <Fragment>
      <Navbar />
      <Container my="2rem">
        <Section1 />
        <Box mb="3.75rem">
          <Section2 />
        </Box>
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
      </Container>
    </Fragment>
  );
};

Home4.layout = AppLayout;

export default Home4;

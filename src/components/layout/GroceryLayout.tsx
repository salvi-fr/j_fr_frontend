import GroceryHeader from "@component/header/GroceryHeader";
import MobileNavigationBar from "@component/mobile-navigation/MobileNavigationBar";
import Navbar2 from "@component/navbar/Navbar2";
import Sticky from "@component/sticky/Sticky";
import Head from "next/head";
import React from "react";
import StyledAppLayout from "./AppLayoutStyle";

type Props = {
  title?: string;
  navbar?: React.ReactChild;
};

const GroceryLayout: React.FC<Props> = ({
  children,
  title = "React Next.js Ecommerce Template",
}) => (
  <StyledAppLayout>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Sticky fixedOn={0}>
      <GroceryHeader />
    </Sticky>

    <div className="section-after-sticky">
      <Navbar2 />
    </div>

    {children}

    <MobileNavigationBar />
  </StyledAppLayout>
);

export default GroceryLayout;

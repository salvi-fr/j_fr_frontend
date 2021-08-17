import Button from "@component/buttons/Button";
import FlexBox from "@component/FlexBox";
import Image from "@component/Image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Error404 = () => {
  const router = useRouter();

  const handleGoBack = async () => {
    router.back();
  };

  return (
    <FlexBox
      flexDirection="column"
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      px="1rem"
    >
      <Image
        src="/assets/images/illustrations/404.svg"
        maxWidth="320px"
        width="100%"
        mb="2rem"
      />
      <FlexBox flexWrap="wrap">
        <Button
          variant="outlined"
          color="primary"
          m="0.5rem"
          onClick={handleGoBack}
        >
          Go Back
        </Button>
        <Link href="/">
          <Button variant="contained" color="primary" m="0.5rem">
            Go to Home
          </Button>
        </Link>
      </FlexBox>
    </FlexBox>
  );
};

export default Error404;

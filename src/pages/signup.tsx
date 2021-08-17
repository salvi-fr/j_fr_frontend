import React from "react";
import FlexBox from "../components/FlexBox";
import Signup from "../components/sessions/Signup";

const SignUpPage = () => {
  return (
    <FlexBox
      flexDirection="column"
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Signup />
    </FlexBox>
  );
};

export default SignUpPage;

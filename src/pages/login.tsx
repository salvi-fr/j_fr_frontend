import React from "react";
import FlexBox from "../components/FlexBox";
import Login from "../components/sessions/Login";

const LoginPage = () => {
  return (
    <FlexBox
      flexDirection="column"
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Login />
    </FlexBox>
  );
};

export default LoginPage;

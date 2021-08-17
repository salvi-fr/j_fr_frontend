import Box from "@component/Box";
import Button from "@component/buttons/Button";
import FlexBox from "@component/FlexBox";
import Icon from "@component/icon/Icon";
import TextField from "@component/text-field/TextField";
import { H3, Paragraph } from "@component/Typography";
import React from "react";

const Section9: React.FC = () => {
  return (
    <Box mb="3.75rem" py="1rem">
      <FlexBox justifyContent="center">
        <Icon size="40px" mb="1.5rem">
          telegram
        </Icon>
      </FlexBox>
      <H3 textAlign="center" fontSize="25px" mb="1rem" lineHeight="1.2">
        Subscribe To Our Newsletter
      </H3>
      <Paragraph
        maxWidth="220px"
        textAlign="center"
        color="text.muted"
        mx="auto"
        mb="1.25rem"
      >
        and receive $20 coupon for the first Shopping
      </Paragraph>

      <Box mx="auto" maxWidth="600px">
        <TextField
          type="email"
          placeholder="Enter Your Mail Here"
          fullwidth
          endAdornment={
            <Button
              style={{ right: 0 }}
              borderRadius="0px"
              borderBottomRightRadius="8px"
              borderTopRightRadius="8px"
              variant="contained"
              color="primary"
            >
              SUBSCRIBE
            </Button>
          }
        />
      </Box>
    </Box>
  );
};

export default Section9;

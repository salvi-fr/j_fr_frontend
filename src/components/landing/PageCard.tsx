import Box from "@component/Box";
import IconButton from "@component/buttons/IconButton";
import Card from "@component/Card";
import FlexBox from "@component/FlexBox";
import Icon from "@component/icon/Icon";
import LazyImage from "@component/LazyImage";
import { H3 } from "@component/Typography";
import Link from "next/link";
import React, { Fragment } from "react";
import styled from "styled-components";

const Wrapper = styled(Box)`
  .overlay {
    transition: opacity 250ms ease-in-out;
  }

  :hover {
    .overlay {
      opacity: 1;
    }
  }
`;

export interface PageCardProps {
  imgUrl: string;
  previewUrl: string;
  title: string;
}

const PageCard: React.FC<PageCardProps> = ({ imgUrl, previewUrl, title }) => {
  return (
    <Fragment>
      <Wrapper
        // p="60px 84px 0px"
        p="10% 10% 0px"
        bg="gray.200"
        border="1px solid"
        borderColor="gray.300"
        borderRadius={8}
        position="relative"
        mb="1.5rem"
      >
        <Card boxShadow="large">
          <LazyImage
            src={imgUrl}
            width={470}
            height={400}
            layout="responsive"
            objectFit="cover"
            objectPosition="top center"
          />
        </Card>

        <Link href={previewUrl}>
          <a target="_blank">
            <FlexBox
              className="overlay"
              position="absolute"
              top="0"
              right="0"
              left="0"
              bottom="0"
              borderRadius={8}
              bg="rgba(0,0,0, 0.54)"
              justifyContent="center"
              alignItems="center"
              opacity="0"
            >
              <IconButton>
                <Icon>eye</Icon>
              </IconButton>
            </FlexBox>
          </a>
        </Link>
      </Wrapper>

      <H3 textAlign="center" lineHeight="1">
        {title}
      </H3>
    </Fragment>
  );
};

export default PageCard;

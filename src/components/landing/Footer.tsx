import Container from "@component/Container";
import FlexBox from "@component/FlexBox";
import Icon from "@component/icon/Icon";
import React from "react";
import styled from "styled-components";

const Wrapper = styled(Container)`
  @media only screen and (max-width: 400px) {
    .flex {
      padding-bottom: 1rem;
      width: 100%;
      justify-content: center;
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <Wrapper py="4rem">
      <FlexBox justifyContent="space-between" flexWrap="wrap">
        <FlexBox className="flex" alignItems="center">
          Developed with{" "}
          <Icon color="primary" mx="0.5rem" size="16px">
            heart_filled
          </Icon>{" "}
          & Care by Ui Lib
        </FlexBox>

        <FlexBox className="flex">
          {iconList.map((item) => (
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer noopenner"
              key={item.iconName}
            >
              <Icon size="1.25rem" defaultcolor="auto" mx="0.5rem">
                {item.iconName}
              </Icon>
            </a>
          ))}
        </FlexBox>
      </FlexBox>
    </Wrapper>
  );
};

const iconList = [
  { iconName: "facebook-1", url: "https://www.facebook.com/UILibOfficial" },
  { iconName: "twitter-1", url: "/" },
  {
    iconName: "youtube-1",
    url: "https://www.youtube.com/channel/UCsIyD-TSO1wQFz-n2Y4i3Rg",
  },
  { iconName: "instagram-1", url: "/" },
];

export default Footer;

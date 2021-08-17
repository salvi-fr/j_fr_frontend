import Link from "next/link";
import React from "react";
import FlexBox from "./FlexBox";
import Icon from "./icon/Icon";
import { H2, SemiSpan } from "./Typography";

export interface CategorySectionHeaderProps {
  title?: string;
  seeMoreLink?: string;
  iconName?: string;
}

const CategorySectionHeader: React.FC<CategorySectionHeaderProps> = ({
  title,
  seeMoreLink,
  iconName,
}) => {
  return (
    <FlexBox justifyContent="space-between" alignItems="center" mb="1.5rem">
      <FlexBox alignItems="center">
        {iconName && (
          <Icon defaultcolor="auto" mr="0.5rem">
            {iconName}
          </Icon>
        )}
        <H2 fontWeight="bold" lineHeight="1">
          {title}
        </H2>
      </FlexBox>

      {seeMoreLink && (
        <Link href={seeMoreLink}>
          <a>
            <FlexBox alignItems="center" ml="0.5rem" color="text.muted">
              <SemiSpan mr="0.5rem">View all</SemiSpan>
              <Icon size="12px" defaultcolor="currentColor">
                right-arrow
              </Icon>
            </FlexBox>
          </a>
        </Link>
      )}
    </FlexBox>
  );
};

export default CategorySectionHeader;

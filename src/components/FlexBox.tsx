import styled from "styled-components";
import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from "styled-system";
import Box from "./Box";

const FlexBox = styled(Box)<
  FlexboxProps & LayoutProps & SpaceProps & ColorProps & BorderProps
>`
  display: flex;
  flex-direction: row;

  ${layout}
  ${color}
  ${flexbox}
  ${space}
  ${border}
`;

export default FlexBox;

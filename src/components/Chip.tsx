import styled from "styled-components";
import {
  color,
  ColorProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";

type ChipProps = {
  cursor?: string;
  boxShadow?: string;
};

export const Chip = styled.div<
  SpaceProps & ColorProps & TypographyProps & PositionProps & ChipProps
>`
  display: inline-flex;
  border-radius: 300px;
  cursor: ${(props) => props.cursor || "unset"};
  box-shadow: ${(props) => props.boxShadow || "unset"};
  transition: all 150ms ease-in-out;
  ${space}
  ${color}
  ${position}
  ${typography}
`;

import { themeGet } from "@styled-system/theme-get";
import styled from "styled-components";
import { color, ColorProps, space, SpaceProps } from "styled-system";

const MenuItem = styled.div<ColorProps & SpaceProps>`
  padding: 0.5rem 1rem;
  cursor: pointer;
  word-break: break-all;
  color: ${themeGet("colors.text.secondary")};
  display: flex;
  align-items: center;

  &:hover {
    color: ${themeGet("colors.primary.main")};
    background-color: ${themeGet("colors.gray.100")};
  }
  ${color}
  ${space}
`;

export default MenuItem;

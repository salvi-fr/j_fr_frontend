import NextImage, { ImageProps } from "next/image";
import styled from "styled-components";
import {
  border,
  BorderProps,
  color,
  ColorProps,
  space,
  SpaceProps,
} from "styled-system";

type LazyImageProps = ImageProps & BorderProps & SpaceProps & ColorProps;

const LazyImage = styled(({ borderRadius, ...props }: LazyImageProps) => {
  return <NextImage {...props} />;
})<ImageProps>`
  display: block;

  ${color}
  ${space}
  ${border}
`;

export default LazyImage;

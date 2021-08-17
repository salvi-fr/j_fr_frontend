import { ReactSVG } from "react-svg";
import styled from "styled-components";
import { color, compose, space, variant } from "styled-system";
import systemCss from "@styled-system/css";
import { IconProps } from "./Icon";

const StyledIcon = styled(ReactSVG)<IconProps>(
  ({ color, size, transform, defaultcolor }) =>
    systemCss({
      svg: {
        width: "100%",
        height: "100%",
        transform,

        path: {
          fill: color ? `${color}.main` : defaultcolor,
        },
        polyline: {
          color: color ? `${color}.main` : defaultcolor,
        },
        polygon: {
          color: color ? `${color}.main` : defaultcolor,
        },
      },

      div: {
        display: "flex",
        width: size,
        height: size,
      },
    }),
  ({ size }) =>
    variant({
      prop: "variant",
      variants: {
        small: {
          div: {
            width: size || "1.25rem",
            height: size || "1.25rem",
          },
        },
        medium: {
          div: {
            width: size || "1.5rem",
            height: size || "1.5rem",
          },
        },
        large: {
          div: {
            width: size || "2rem",
            height: size || "2rem",
          },
        },
      },
    }),
  compose(color, space)
);

export default StyledIcon;

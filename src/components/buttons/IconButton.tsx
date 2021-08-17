import systemCss from "@styled-system/css";
import styled from "styled-components";
import {
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  layout,
  shadow,
  space,
  SpaceProps,
  variant,
} from "styled-system";

interface IconButtonProps {
  size: "small" | "medium" | "large" | "none";
  variant: "text" | "outlined" | "contained";
  color: "primary" | "secondary" | "error" | "default";
}

const IconButton = styled.button<
  ColorProps | BackgroundProps | BorderProps | SpaceProps | IconButtonProps
>(
  systemCss({
    outline: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
    borderRadius: 500,
    padding: "1rem",
    fontWeight: 600,
    color: "inherit",
    transition: "all 150ms ease-in-out",
    bg: "body.paper",
    "&:hover": {
      bg: "gray.200",
    },
    "&:disabled": {
      bg: "text.disabled",
      color: "text.muted",
    },
  }),
  (props) =>
    variant({
      prop: "variant",
      variants: {
        text: {
          border: "none",
          color: `${props.color}.main`,
        },
        outlined: {
          color: `${props.color}.main`,
          border: "2px solid",
          borderColor: `${props.color}.main`,
          "&:focus": {
            boxShadow: `0px 1px 4px 0px ${
              props.theme.colors[props.color]?.main
            }`,
          },
        },
        contained: {
          border: "none",
          color: `${props.color}.text`,
          bg: `${props.color}.main`,
          "&:hover": {
            bg: `${props.color}.main`,
          },
          "&:focus": {
            boxShadow: `0px 1px 4px 0px ${
              props.theme.colors[props.color]?.main
            }`,
          },
        },
      },
    }),
  variant({
    prop: "size",
    variants: {
      large: {
        padding: "1.25rem",
      },
      medium: {
        padding: "1rem",
      },
      small: {
        padding: "0.75rem",
        fontSize: 14,
      },
    },
  }),
  compose(color, layout, space, border, shadow)
);

IconButton.defaultProps = {
  size: "small",
};

export default IconButton;

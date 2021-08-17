import systemCss from "@styled-system/css";
import { colorOptions } from "interfaces";
import styled from "styled-components";
import {
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  layout,
  LayoutProps,
  shadow,
  space,
  SpaceProps,
  variant,
} from "styled-system";

interface ButtonProps {
  size?: "small" | "medium" | "large" | "none";
  color?: colorOptions;
  variant?: "text" | "outlined" | "contained";
  fullwidth?: boolean;
}

const Button = styled.button<
  ColorProps &
    BackgroundProps &
    BorderProps &
    SpaceProps &
    ButtonProps &
    LayoutProps
>(
  ({ color, fullwidth }) =>
    systemCss({
      display: "flex",
      width: fullwidth ? "100%" : "unset",
      justifyContent: "center",
      alignItems: "center",
      outline: "none",
      border: "none",
      cursor: "pointer",
      padding: "11px 1.5rem",
      fontSize: "1rem",
      fontWeight: 600,
      color: color ? `${color}.main` : "body.text",
      background: "transparent",
      transition: "all 150ms ease-in-out",
      lineHeight: 1,
      "&:focus": {
        boxShadow: 3, //shadows[3]
      },
      "&:disabled": {
        bg: "text.disabled",
        color: "text.hint",
        borderColor: "text.disabled",
        cursor: "unset",
        "svg path": {
          fill: "text.hint",
        },
        "svg polyline, svg polygon": {
          color: "text.hint",
        },
      },
    }),
  ({ theme, color }) =>
    variant({
      prop: "variant",
      variants: {
        text: {
          border: "none",
          color: `${color}.main`,
          "&:hover": {
            bg: color ? `${color}.light` : "gray.100",
          },
        },
        outlined: {
          padding: "10px 16px",
          color: `${color}.main`,
          border: "1px solid",
          borderColor: color ? `${color}.main` : "text.disabled",

          "&:enabled svg path": {
            fill: color
              ? `${theme.colors[color]?.main} !important`
              : "text.primary",
          },
          "&:enabled svg polyline, svg polygon": {
            color: color
              ? `${theme.colors[color]?.main} !important`
              : "text.primary",
          },
          "&:focus": {
            boxShadow: `0px 1px 4px 0px ${theme.colors[color]?.light}`,
          },
          "&:hover:enabled": {
            bg: color && `${color}.main`,
            borderColor: color && `${color}.main`,
            color: color && `${color}.text`,
            "svg path": {
              fill: color
                ? `${theme.colors[color]?.text} !important`
                : "text.primary",
            },
            "svg polyline, svg polygon": {
              color: color
                ? `${theme.colors[color]?.text} !important`
                : "text.primary",
            },
          },
        },
        contained: {
          border: "none",
          color: `${color}.text`,
          bg: `${color}.main`,
          "&:focus": {
            boxShadow: `0px 1px 4px 0px ${theme.colors[color]?.light}`,
          },
          "&:enabled svg path": {
            fill: color
              ? `${theme.colors[color]?.text} !important`
              : "text.primary",
          },
          "&:enabled svg polyline, svg polygon": {
            color: color
              ? `${theme.colors[color]?.text} !important`
              : "text.primary",
          },
        },
      },
    }),
  variant({
    prop: "size",
    variants: {
      large: {
        height: "56px",
        px: 30,
      },
      medium: {
        height: "48px",
        px: 30,
      },
      small: {
        height: "40px",
        fontSize: 14,
      },
    },
  }),
  compose(color, layout, space, border, shadow)
);

Button.defaultProps = {
  size: "small",
  borderRadius: 5,
};

export default Button;

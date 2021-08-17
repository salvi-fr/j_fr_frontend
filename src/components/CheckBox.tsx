import systemCss from "@styled-system/css";
import { InputHTMLAttributes, useEffect, useState } from "react";
import styled from "styled-components";
import { color, compose, space, SpaceProps } from "styled-system";
import { colorOptions } from "../interfaces";

type CheckBoxProps = {
  color?: colorOptions;
  labelColor?: colorOptions;
  labelPlacement?: "start" | "end";
  label?: any;
  id?: any;
  size?: number;
};

type WrapperProps = {
  labelPlacement?: "start" | "end";
};

const SyledCheckBox = styled.input<
  CheckBoxProps & InputHTMLAttributes<HTMLInputElement>
>(
  ({ color, size }) =>
    systemCss({
      /* remove standard background appearance */
      "-webkit-appearance": "none",
      "-moz-appearance": "none",
      "-webkit-user-select": "none",
      "-moz-user-select": "none",
      "-ms-user-select": "none",
      "user-select": "none",
      appearance: "none",
      outline: "none",
      cursor: "pointer",

      margin: 0,
      width: size,
      height: size,
      border: "2px solid",
      borderColor: "text.hint",
      borderRadius: 2,
      position: "relative",

      "&:checked": {
        borderColor: `${color}.main`,
      },

      /* create custom radiobutton appearance */
      "&:after": {
        width: "calc(100% - 5px)",
        height: "calc(100% - 5px)",
        top: "50%",
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)",
        position: "absolute",
        bg: "transparent",
        content: '" "',
        visibility: "visible",
        borderRadius: 1,
        transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      },

      /* appearance for checked radiobutton */
      "&:checked:after": {
        bg: `${color}.main`,
      },

      "&:disabled": {
        borderColor: `text.disabled`,
      },

      "&:checked:disabled:after": {
        bg: `text.disabled`,
      },
    }),
  compose(color)
);

const Wrapper = styled.div<WrapperProps & SpaceProps>`
  display: flex;
  align-items: center;
  flex-direction: ${(props) =>
    props.labelPlacement !== "end" ? "row" : "row-reverse"};
  input {
    ${(props) =>
      props.labelPlacement !== "end"
        ? "margin-right: 0.5rem"
        : "margin-left: 0.5rem"};
  }
  label {
    cursor: pointer;
  }
  input[disabled] + label {
    color: text.disabled;
    cursor: unset;
  }

  ${color}
  ${space}
`;

const CheckBox: React.FC<
  InputHTMLAttributes<HTMLInputElement> & CheckBoxProps & SpaceProps
> = ({ id, label, labelPlacement, labelColor, ...props }: CheckBoxProps) => {
  const [checkboxId, setCheckboxId] = useState(id);

  // extract spacing props
  let spacingProps = {};
  for (const key in props) {
    if (key.startsWith("m") || key.startsWith("p"))
      spacingProps[key] = props[key];
  }

  useEffect(() => {
    setCheckboxId(Math.random());
  }, []);

  return (
    <Wrapper
      labelPlacement={labelPlacement}
      color={`${labelColor}.main`}
      {...spacingProps}
    >
      <SyledCheckBox id={checkboxId} type="checkbox" {...props} />
      <label htmlFor={checkboxId}>{label}</label>
    </Wrapper>
  );
};

CheckBox.defaultProps = {
  color: "secondary",
  size: 18,
};

export default CheckBox;

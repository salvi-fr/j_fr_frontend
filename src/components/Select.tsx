import React, { InputHTMLAttributes } from "react";
import ReactSelect from "react-select";
import { SpaceProps } from "styled-system";
import { colors } from "../utils/themeColors";
import Box from "./Box";
import Typography from "./Typography";

type SelectOption = {
  label: any;
  value: any;
};

interface SelectProps
  extends InputHTMLAttributes<HTMLInputElement>,
    SpaceProps {
  options: SelectOption[];
  value?: any;
  defaultValue?: any;
  label?: string;
  errorText?: any;
}

const Select: React.FC<SelectProps> = ({
  options,
  id,
  label,
  errorText,
  ...props
}) => {
  // extract spacing props
  let spacingProps = {};
  for (const key in props) {
    if (key.startsWith("m") || key.startsWith("p"))
      spacingProps[key] = props[key];
  }

  return (
    <Box {...spacingProps}>
      {label && (
        <Typography fontSize="0.875rem" mb="6px">
          {label}
        </Typography>
      )}
      <ReactSelect
        // label="Single Select"
        // placeholder="Single Select"
        // defaultValue={options[0]}
        // isDisabled={isDisabled}
        // isLoading={isLoading}
        // isClearable={true}
        // isRtl={isRtl}
        // isSearchable={isSearchable}
        // menuIsOpen={true}
        // name="color"
        options={options}
        styles={customStyles}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary50: colors.gray[100],
            primary: colors.primary.main,
            neutral20: colors.text.disabled,
          },
        })}
        {...props}
      />
      {errorText && (
        <Typography color="error.main" ml="0.25rem" mt="0.25rem" as="small">
          {errorText}
        </Typography>
      )}
    </Box>
  );
};

const customStyles = {
  input: (styles) => ({ ...styles, height: 30 }),
  option: (provided, state) => ({
    ...provided,
    color: "inherit",
    backgroundColor: state.isFocused ? "rgba(0,0,0, 0.015)" : "inherit",
    cursor: "pointer",
  }),
};

export default Select;

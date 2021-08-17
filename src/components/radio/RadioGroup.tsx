import { Children, cloneElement, ReactElement } from "react";
import { SpaceProps } from "styled-system";
import { RadioProps } from "./Radio";
import StyledRadioGroup from "./RadioGroup.style";

export interface RadioGroupProps extends SpaceProps {
  children: ReactElement<RadioProps>[];
  value?: number | string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  value,
  name,
  onChange,
  ...props
}: any) => {
  return (
    <StyledRadioGroup {...props}>
      {Children.map(children, (child, index) => {
        return cloneElement(child, {
          id: index,
          name,
          checked: value ? child.props.value === value : undefined,
          onChange,
        });
      })}
    </StyledRadioGroup>
  );
};

export default RadioGroup;

import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

const StyledRadioGroup = styled.fieldset<HTMLFieldSetElement | SpaceProps>`
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  ${space}
`;

export default StyledRadioGroup;

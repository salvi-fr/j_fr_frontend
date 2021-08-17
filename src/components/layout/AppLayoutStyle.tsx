import styled from "styled-components";
import { getTheme } from "../../utils/utils";

const StyledAppLayout = styled.div`
  .header-container {
    box-shadow: ${getTheme("shadows.regular")};
  }
`;

export default StyledAppLayout;

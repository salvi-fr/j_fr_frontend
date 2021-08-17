import styled from "styled-components";
import FlexBox from "../FlexBox";

const StyledModal = styled(FlexBox)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;

  .container {
    position: relative;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    overflow: auto;
    background: transparent;
  }
`;

export default StyledModal;

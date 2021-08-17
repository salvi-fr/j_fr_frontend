import React, { cloneElement } from "react";
import { createPortal } from "react-dom";
import FlexBox from "../FlexBox";
import StyledModal from "./ModalStyle";

export interface ModalProps {
  open?: boolean;
  children?: React.ReactElement;
  onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, open, onClose }) => {
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  const handleBackdropClick = () => {
    if (onClose) onClose();
  };

  if (globalThis.document && open) {
    let modal = document.querySelector("#modal-root");

    if (!modal) {
      modal = document.createElement("div");
      modal.setAttribute("id", "modal-root");
      document.body.appendChild(modal);
    }

    return createPortal(
      <StyledModal
        flexDirection="column"
        alignItems="center"
        onClick={handleBackdropClick}
      >
        <div className="container">
          <FlexBox justifyContent="center" m="0.5rem">
            {cloneElement(children, {
              onClick: handleModalContentClick,
            })}
          </FlexBox>
        </div>
      </StyledModal>,
      modal
    );
  } else return null;
};

Modal.defaultProps = {
  open: false,
};

export default Modal;

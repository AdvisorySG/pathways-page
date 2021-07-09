import React, { useRef } from "react";
import ReactModal from "react-modal";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import { MdClose } from "react-icons/md";

import "./profile-modal.css";

const CloseButton = ({ onClose }) => (
  <button className="modal-close" onClick={onClose}>
    <MdClose />
  </button>
);

const ProfileModal = ({ isOpen, onClose }) => {
  const scrollEl = useRef(null);

  // Disable body scroll when modal is open.
  const onAfterOpenHandler = () =>
    disableBodyScroll(scrollEl.current, { reserveScrollBarGap: true });
  const onAfterCloseHandler = () => clearAllBodyScrollLocks();

  return (
    <ReactModal
      className="modal-container"
      overlayClassName="modal-overlay"
      isOpen={isOpen}
      shouldCloseOnOverlayClick={true}
      onAfterOpen={onAfterOpenHandler}
      onRequestClose={onClose}
      onAfterClose={onAfterCloseHandler}
      /* Set a timeout so modal element is removed after transition (0.3s). */
      closeTimeoutMS={300}
      contentLabel="View Details"
    >
      <CloseButton onClose={onClose} />
    </ReactModal>
  );
};

export default ProfileModal;

import React, { useRef } from "react";
import ReactModal from "react-modal";

import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import { format } from "date-fns";
import { MdClose } from "react-icons/md";

import "./profile-modal.css";

const CloseButton = ({ onClose }) => (
  <button className="modal-close" onClick={onClose}>
    <MdClose />
  </button>
);

const ProfileModal = ({ isOpen, pathway, onClose }) => {
  const { title, dates, videoUrl, blurb, instructors } = pathway ?? {};

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
      <div className="modal-content" ref={scrollEl}>
        <div className="modal-main">
          <div className="modal-left">
            <div class="modal-metadata-container">
              <h2>{title}</h2>
              {dates && (
                <p style={{ color: "#444" }}>
                  <b>Class Dates*</b>:{" "}
                  {dates.map((date) => format(date, "MMM d")).join(", ")}
                </p>
              )}
              <p style={{ fontSize: "1.1rem" }}>{blurb}</p>
              <small>
                * Before applying to this Pathway, please ensure that you are
                able to attend and commit to all of the class dates listed.
              </small>
            </div>
          </div>
          <div className="modal-right">
            <iframe
              className="modal-video"
              src={videoUrl}
              title={title}
            ></iframe>
          </div>
        </div>
        <h3 className="modal-bottom-header">Meet Our Faculty</h3>
        <div className="modal-bottom">
          {instructors &&
            instructors.map(({ name, designation, imageUrl }) => (
              <div className="modal-instructor">
                <img
                  className="modal-image"
                  src={process.env.PUBLIC_URL + imageUrl}
                  alt={name}
                />
                <div className="modal-instructor-text">
                  <b>{name}</b>
                  <p>{designation}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </ReactModal>
  );
};

export default ProfileModal;

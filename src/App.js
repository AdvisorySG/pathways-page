import React, { useState, useEffect } from "react";

import Header from "./components/header";
import ProfileCard from "./components/profile-card";
import ProfileModal from "./components/profile-modal";
import pathways from "./pathways";

import "./App.css";

const setHash = (hash) => window.history.replaceState({}, "", `#${hash}`);

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePathwayId, setActivePathwayId] = useState("");

  const activateModal = (pathwayId) => {
    setActivePathwayId(pathwayId);
    setIsModalOpen(true);
  };

  useEffect(() => {
    // Checks hash and ensures that any modal with a corresponding name is open.
    const ensureModalFromHash = () => {
      const pathwayId = window.location.hash.slice(1);
      if (pathways.hasOwnProperty(pathwayId)) {
        if (!isModalOpen || pathwayId !== activePathwayId) {
          activateModal(pathwayId);
          return true;
        }
      }
    };

    // If modal is open, ensure that the hash is active.
    if (isModalOpen) {
      setHash(activePathwayId);
    } else {
      // If modal is not open and `activeMentorId === ""`, this must be the
      // initial load. Check for a hash, and open the modal if such an ID
      // exists.
      if (activePathwayId === "") {
        if (!ensureModalFromHash()) {
          // Otherwise, set a default ID, but do not open the modal.
          setActivePathwayId("");
        }
      } else {
        // An ID exists, but the modal is not open, so remove the hash.
        setHash("");
      }
    }

    // Add event listeners to catch if the user manually changes the hash.
    window.addEventListener("hashchange", ensureModalFromHash, false);
    return () =>
      window.removeEventListener("hashchange", ensureModalFromHash, false);
  }, [isModalOpen, activePathwayId]);

  return (
    <div className="container">
      <Header />

      <div className="canvas">
        <div className="card-container">
          {Object.entries(pathways).map(([key, pathway]) => (
            <ProfileCard
              key={key}
              pathwayDetails={pathway}
              onReadMore={() => {
                activateModal(key);
              }}
            />
          ))}
        </div>
        <ProfileModal
          isOpen={isModalOpen}
          pathway={pathways[activePathwayId]}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
}

export default App;

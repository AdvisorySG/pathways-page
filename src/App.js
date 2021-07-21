import React from "react";

import pathways from "./pathways";
import Header from "./components/header";
import ProfileCard from "./components/profile-card";
// import ProfileModal from "./components/profile-modal";
import "./App.css";

// const setHash = (hash) => window.history.replaceState({}, "", `#${hash}`);

function App() {
  /*
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [activePathwayId, setActivePathwayId] = useState("");
  const activateModal = (pathwayId) => {
    setActivePathwayId(pathwayId);
    setIsModalOpen(true);
  };
  */

  return (
    <div className="container">
      <Header />

      <div className="canvas">
        <p className="disclaimer">
          <small>
            The privacy and safety of our mentors is of utmost priority to
            Advisory. Any attempt to approach or contact our mentors outside of
            the parameters of the Advisory Mentorship Programme—whilst claiming
            affiliation to Advisory, or misrepresenting a relationship to
            Advisory—will be treated as misrepresentation, even fraudulent
            misrepresentation, as considered under the Misrepresentation Act.
            Advisory will take legal action against any individuals or
            organisations who attempt to deceive, harass, or otherwise request
            dishonest assistance from our mentors.
          </small>
        </p>
        <div className="card-container">
          {Object.entries(pathways).map(([key, pathway]) => (
            <ProfileCard
              key={key}
              pathwayDetails={pathway}
              onReadMore={() => {}}
            />
          ))}
        </div>
        {/* <ProfileModal
          isOpen={isModalOpen}
          pathway={pathwayDetails[activePathwayId]}
          onClose={() => setIsModalOpen(false)}
        /> */}
      </div>
    </div>
  );
}

export default App;

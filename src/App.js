import React from "react";

import Header from "./components/header";
import ProfileCard from "./components/profile-card";
// import ProfileModal from "./components/profile-modal";
import "./App.css";

// const setHash = (hash) => window.history.replaceState({}, "", `#${hash}`);
const pathways = {
  businessStrategy: {
    title: "Business Strategy",
    imageUrl: "/pathways/BusinessStrategy.jpg",
    instructors: [
      {
        name: "Philip Hur",
        designation: "Head of APAC Partnerships, Commerce & Signals",
      },
      { name: "Jimmy Guo", designation: "Partner Solutions Manager" },
    ],
    blurb:
      "As companies look to scale, many layers of thinking are applied to effect better decision making. In this pathway, we will cover foundational business strategy, explore some key strategic frameworks, and go through real-life case studies where these frameworks can be applied. At the end of this Pathway, you will learn strategic tools, concepts and perspectives that will allow you to understand and apply effective strategic thinking at a company level.",
  },
  careerDevelopment: {
    title: "Career Development",
    imageUrl: "/pathways/CareerDevelopment.jpg",
    instructors: [
      { name: "Kush Sagar", designation: "Commerce Platforms Lead, APAC" },
      { name: "Cecilia", designation: "tbc" },
      { name: "Nayna", designation: "tbc" },
    ],
    blurb:
      "Students often face difficulties in navigating the transition between school and work. You might find it difficult to envision how the subjects or courses you learn in school can directly translate into your future career. In this pathway, we will provide you with a mechanism to identify potential career options, based on your individual skills and accomplishments, and teach you what we wish we had known at the start of our careers. Join us to discover how to map your experiences to different job opportunities and take a step towards owning your career journey.",
  },
  digitalMarketingStrategy: {
    title: "Digital Marketing Strategy",
    imageUrl: "/pathways/DigitalMarketing.jpg",
    instructors: [
      {
        name: "Anthony Isaakidis",
        designation: "Manager, Technical Partner Management",
      },
      { name: "Vinh Mai", designation: "Measurement Partnerships Lead, APAC" },
      {
        name: "Naomi Peles",
        designation: "Partner Solutions Lead, Australia & New Zealand",
      },
    ],
    blurb:
      "The world has undergone a seismic shift in the way we communicate information. In this pathway, we will provide you with a high level overview of digital marketing, and how it fits into a company’s broader marketing tools. We will explore how marketing managers use digital advertising to meet specific objectives, and how they set key performance indicators to assess their campaigns. At the end of this Pathway, you will come away with awareness of the different career paths and opportunities that students interested in digital marketing can explore. ",
  },
  computationalThinking: {
    title: "Computational Thinking",
    imageUrl: "/pathways/ComputationalThinking.jpg",
    instructors: [
      { name: "Rishi Daryanani", designation: "Solutions Engineer" },
    ],
    blurb:
      "Coding forms the backbone of the technology around us, and behind coding lies concepts. In this pathway, you will learn about certain foundational concepts of computing and how these relate to the thought process behind scale in companies. In addition we will explore some basics in Python and data structures, and in managing tech interviews with greater ease. At the end of this Pathway, you will take away an entry point to break into the tech industry, based on my own personal career journey, including my sharing on bridging interests between the business world and engineering.",
  },
};

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

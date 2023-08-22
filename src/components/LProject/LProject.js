import React from "react";
import project1 from "../../assets/Images/Project Images/project1.jpg";
import project2 from "../../assets/Images/Project Images/project2.jpg";
import project3 from "../../assets/Images/Project Images/project3.jpg";
import project4 from "../../assets/Images/Project Images/project4.jpg";
import project5 from "../../assets/Images/Project Images/project5.jpg";
import project6 from "../../assets/Images/Project Images/project6.jpeg";

const PhotoBox = ({ image, title }) => {
  return (
    <div className="relative w-full h-[70%] md:w-full md:h-[70%] mx-auto p-2">
      <div className="bg-stone-900 border-stone-900 rounded-md overflow-hidden group transition-transform hover:scale-105 text-center text-stone-900">
        <img src={image} alt={title} className="object-cover w-full h-full" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-filter backdrop-blur-lg transition-opacity">
          <p className="text-2xl text-stone-900">{title}</p>
        </div>
      </div>
    </div>
  );
};

const LProject = () => {
  return (
    <div className="bg-white text-black p-8">
      <h2 className="text-4xl font-bold mb-[100px] mt-12 text-center">
        <span className="text-stone-900">OUR</span>
        <span className="text-yellow-500"> PROJECTS</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PhotoBox
          image={project1}
          title="Synergetic Living Area Design Fusion, Nagpur"
        />
        <PhotoBox
          image={project2}
          title="ElevateVisage: Innovative Elevation and Facade Design Solutions, Arguni, Dt. Gondia"
        />
        <PhotoBox
          image={project3}
          title="EnvisionElegance: Innovative Bedroom Design Solutions for a Harmonious Living Space, Nagpur"
        />
        <PhotoBox
          image={project4}
          title="VerdantEco: Terrace Garden Enhancement Initiative, Nagpur"
        />
        <PhotoBox
          image={project5}
          title="Synergistic Fusion: Elevation and Facade Harmony in Architectural Design, Amravati"
        />
        <PhotoBox image={project6} title="Many More..." />
      </div>
      <Quote /> {/* Adding the Quote component */}
    </div>
  );
};

const Quote = () => {
  return (
    <h2 className="text-2xl font-semibold mt-[7%] text-center">
      <span className="text-stone-900">
        "Unlocking Architectural Marvels: Where Dreams Take Shape -
        <span className="text-yellow-500">
          {" "}
          Shivam Management Overseas Pvt. Ltd.{" "}
        </span>
        We transform spaces into timeless works of art, curating designs that
        harmonize aesthetics with practicality. Elevate your environment with
        our expert touch."
      </span>
    </h2>
  );
};

export default LProject;

import React from "react";
import { Fade } from "react-reveal";
import service1Image from "../assets/Images/Services Images/service1Image.jpg";
import service2Image from "../assets/Images/Services Images/service2Image.png";
import service3Image from "../assets/Images/Services Images/service3Image.jpg";
import service4Image from "../assets/Images/Services Images/service4Image.jpg";
import service5Image from "../assets/Images/Services Images/service5Image.jpg";
import service6Image from "../assets/Images/Services Images/service6Image.jpg";
import service7Image from "../assets/Images/Services Images/service7Image.jpg";
import service8Image from "../assets/Images/Services Images/service8Image.jpg";
import service9Image from "../assets/Images/Services Images/service9Image.jpg";
import ServiceCard from "../ServiceCard";

const Services = () => {
  const services = [
    {
      image: service1Image,
      title: "Architectural Consultant",
      description:
        "Guiding your architectural aspirations with expertise and vision. Our consultancy service shapes spaces that merge aesthetics with functionality, creating timeless designs that inspire",
    },
    {
      image: service2Image,
      title: "BIM Architecture",
      description:
        "Harness the power of Building Information Modeling (BIM) to revolutionize the design and construction process, enhancing collaboration, efficiency, and precision.",
    },
    {
      image: service3Image,
      title: "Interior Consultant",
      description:
        "Transform spaces with our expert interior consulting services, seamlessly merging aesthetics and functionality to craft inspiring environments.",
    },
    {
      image: service4Image,
      title: "3D Visualization",
      description:
        "Experience your designs come to life through our cutting-edge 3D visualization services. Immerse yourself in realistic renderings that showcase your projects potential.",
    },
    {
      image: service5Image,
      title: "Industrial Architecture",
      description:
        "Transforming industrial spaces into visionary masterpieces, our Industrial Architecture services merge functionality with aesthetics, delivering innovative solutions for a dynamic world.",
    },
    {
      image: service6Image,
      title: "Project Management Consultant",
      description: "Expert oversight and guidance for seamless project execution. From inception to completion, we ensure your vision transforms into reality with efficient planning and diligent coordination.",
    },
    {
      image: service7Image,
      title: "Turnkey Project Operator",
      description: "Empower your visions with comprehensive project solutions. From conception to completion, we orchestrate seamless Turnkey projects that bring your ideas to life",
    },
    {
      image: service8Image,
      title: "Government Contractor",
      description: "Expertise in executing projects aligned with government standards, regulations, and policies, delivering innovative solutions for public infrastructure and spaces.",
    },
    {
      image: service9Image,
      title: "Overseas Consultant",
      description: "Unlock global opportunities with our Overseas Consulting service, guiding you through international projects with precision and insight.",
    },
  ];

  return (
    <div className="bg-white text-black p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-[100px] mt-12 text-center animate-bounce">
          <span className="text-stone-900">Crafting Excellence: Our Array of </span>
          <span className="text-yellow-500"> Prestigious Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Fade key={index} delay={index * 200}>
              <ServiceCard {...service} />
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

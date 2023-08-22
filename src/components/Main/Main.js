import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../../assets/Images/Home Images/image1.jpg";
import image2 from "../../assets/Images/Home Images/image2.jpg";
import image3 from "../../assets/Images/Home Images/image3.jpg";
import image4 from "../../assets/Images/Home Images/image4.jpg";

const Slide = ({ image, title, description }) => {
  return (
    <div className="relative overflow-hidden group ">
      <div className="flex">
        <div className="w-full">
          <div className="h-full">
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-[850px] transform scale-110 transition-transform group-hover:scale-100"
            />
          </div>
        </div>
        <div className="w-1/2 bg-stone-900 p-8  ">
          <h2 className="text-3xl font-bold mt-[50%] ml-[10%] text-white">
            {title}
          </h2>
          <p className="text-lg text-yellow-500 ml-[10%] mt-[25px]">
            {description}
          </p>
          <button className="text-lg border text-stone-900 font-bold rounded-full border-yellow-500 bg-gray-200 px-6 py-2 hover:bg-yellow-500 ml-[10%] mt-[30px] hover:border-gray-300 ">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

const Main = () => {
  const slides = [
    {
      image: image1,
      title: "Architecture and Interior Consultancy",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: image2,
      title: "Designing Spaces for You",
      description: "Suspendisse tristique nulla eget elit pretium interdum.",
    },
    {
      image: image3,
      title: "Transforming Dreams into Reality",
      description: "Fusce at ligula eu sem volutpat blandit eu sit amet ex.",
    },
    {
      image: image4,
      title: "Creating Functional Spaces",
      description: "Aenean et magna sed lectus consectetur fermentum.",
    },
  ];

  return (
    <div>
      <div className="mt-0">
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          showArrows={true}
          autoPlay
          infiniteLoop
        >
          {slides.map((slide, index) => (
            <Slide key={index} {...slide} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Main;

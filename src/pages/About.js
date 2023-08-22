import React from "react";
import priyaImage from "../assets/Images/About Images/priyaImage.jpg";
import pranayImage from "../assets/Images/About Images/pranayImage.jpg";
import nandkishorImage from "../assets/Images/About Images/nandkishorImage.jpg";

const About = () => {
  return (
    <div className="bg-white text-black p-8">
      <div className="bg-white text-black p-8 mt-16">
        <div className="container mx-auto">
          <div className="text-center mb-16 text-4xl font-bold">
            <span className="text-stone-900">Step into the world of </span>
            <span className="text-yellow-500">
              {" "}
              Shivam Management Overseas Pvt. Ltd.
            </span>

            <p className="text-xl mt-8">
              A powerhouse of architectural and interior innovation, igniting
              spaces with artistry since our inception in 2006. As a beacon of
              excellence, we proudly hold the ISO certification, a testament to
              our commitment to raising the bar in design.
            </p>
          </div>

          <div className="flex justify-between mb-8 space-x-8">
            <div className="w-1/3 text-center transition-transform transform hover:scale-110">
              <img
                src={nandkishorImage}
                alt="Mr. Nandkishor D. Wankhade"
                className="w-36 h-36 mx-auto rounded-full mb-4 hover:shadow-lg cursor-pointer"
              />
              <h3 className="text-xl font-semibold mb-2">
                Mr. Nandkishor D. Wankhade
              </h3>
              <p className="text-yellow-600 font-semibold">
                Founder & Director
              </p>
              <p className="text-lg mt-4 text-stone-900 ">
                At the helm of our journey stands the formidable presence, a
                beacon whose brilliance has illuminated our path since
                inception. A luminary of unparalleled stature, he infused
                vitality into our odyssey, imbuing it with purpose and vision.
                With a rich tapestry of experience spanning a remarkable
                <br></br> <b>16 years</b> in architecture and interior design,
                his stewardship serves as the driving force behind our
                avant-garde spirit.
              </p>
            </div>

            <div className="w-1/3 text-center transition-transform transform hover:scale-110">
              <img
                src={priyaImage}
                alt="Mrs. Priya Wankhade"
                className="w-36 h-36 mx-auto rounded-full mb-4 hover:shadow-lg cursor-pointer"
              />
              <h3 className="text-xl font-semibold mb-2">
                Mrs. Priya N. Wankhade
              </h3>
              <p className="text-yellow-600 font-semibold">Joint Director</p>
              <p className="text-lg mt-4 text-stone-900">
                Exuding brilliance and dynamism, stands as a driving force,
                infusing our journey with her profound strategic insights. Her
                visionary perspective, coupled with an unwavering commitment to
                innovation, serves as a cornerstone for propelling us towards
                uncharted horizons and shaping our path towards transformative
                excellence.
              </p>
            </div>

            <div className="w-1/3 text-center transition-transform transform hover:scale-110">
              <img
                src={pranayImage}
                alt="Ar. Pranay R. Wankhade"
                className="w-36 h-36 mx-auto rounded-full mb-4 hover:shadow-lg cursor-pointer"
              />
              <h3 className="text-xl font-semibold mb-2">
                Ar. Pranay R. Wankhade
              </h3>
              <p className="text-yellow-600 font-semibold">Architect</p>
              <p className="text-lg mt-4 text-stone-900">
                Possessing an unwavering gaze for detail and an unbridled
                passion. He breathes life into each project, infusing it with an
                unmistakable vitality. Backed by four years of honed
                professional expertise and a solid foundation in architecture,
                he stands as the living manifestation of our dedication to
                architectural eminence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

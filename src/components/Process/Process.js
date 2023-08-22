import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faComments,
  faLightbulb,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

const Process = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 mt-16">
          <span className="text-stone-900">OUR</span>
          <span className="text-yellow-500"> PROCESS</span>
        </h2>
        <p className="text-lg mb-12 text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor...
        </p>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-stone-900 rounded-lg p-[50px] text-white text-center flex flex-col items-center">
            <FontAwesomeIcon
              icon={faUsers}
              className="text-yellow-500 text-2xl mb-2"
            />
            <h3 className="text-xl font-bold mb-2">MEET</h3>
            <p className="text-sm">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accuntium.
            </p>
          </div>
          <div className="bg-stone-900 rounded-lg p-[50px] text-white text-center flex flex-col items-center">
            <FontAwesomeIcon
              icon={faComments}
              className="text-yellow-500 text-2xl mb-2"
            />
            <h3 className="text-xl font-bold mb-2">DISCUSSION</h3>
            <p className="text-sm">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accuntium.
            </p>
          </div>
          <div className="bg-stone-900 rounded-lg p-[50px] text-white text-center flex flex-col items-center">
            <FontAwesomeIcon
              icon={faLightbulb}
              className="text-yellow-500 text-2xl mb-2"
            />
            <h3 className="text-xl font-bold mb-2">IDEAS</h3>
            <p className="text-sm">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accuntium.
            </p>
          </div>
          <div className="bg-stone-900 rounded-lg p-[50px] text-white text-center flex flex-col items-center">
            <FontAwesomeIcon
              icon={faTools}
              className="text-yellow-500 text-2xl mb-2"
            />
            <h3 className="text-xl font-bold mb-2">EXECUTE</h3>
            <p className="text-sm">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accuntium.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

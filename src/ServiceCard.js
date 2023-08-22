import React from "react";

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg transition-transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-[250px] object-cover" />
      <div className="p-6 pb-10">
        <h3 className="text-2xl font-semibold text-yellow-700 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

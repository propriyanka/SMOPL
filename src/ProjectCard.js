import React, { useState } from 'react';

const ProjectCard = ({ image, category, name }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-lg transition-transform ${
        isHovered ? 'scale-105' : 'scale-100'
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={image} alt={name} className="w-full h-[250px] object-cover" />
      <div
        className={`absolute inset-0 flex items-center justify-center ${
          isHovered ? 'opacity-100' : 'opacity-0'
        } transition-opacity bg-black bg-opacity-60`}
      >
        <p className="text-2xl font-bold text-yellow-500">{name}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

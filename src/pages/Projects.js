import React, { useState } from 'react';
import residentialImage from '../assets/Images/Project Images/residentialImage.jpg';
import interiorImage from '../assets/Images/Project Images/interiorImage.jpg';
import interiorImage1 from '../assets/Images/Project Images/interiorImage1.jpg';
import interiorImage2 from '../assets/Images/Project Images/interiorImage2.jpg';
import commercialImage from '../assets/Images/Project Images/commercialImage.jpg';
import residentialImage2 from  '../assets/Images/Project Images/residentialImage3.jpg';
import residentialImage3 from  '../assets/Images/Project Images/residentialImage2.jpg';
import ProjectCard from '../ProjectCard';

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Residential Architecture', 'Interior Architecture', 'Commercial/Retail Architecture'];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const projects = [
    { image: residentialImage, category: 'Residential Architecture', name: 'Residential Project 1' },
    { image: interiorImage, category: 'Interior Architecture', name: 'Interior Project 1' },
    { image: commercialImage, category: 'Commercial/Retail Architecture', name: 'Commercial Project 1' },
    { image: residentialImage2, category: 'Residential Architecture', name: 'Residential Project 2' },
  { image: residentialImage3, category: 'Residential Architecture', name: 'Residential Project 3' },
  { image: interiorImage1, category: 'Interior Architecture', name: 'Interior Project 1' },
  { image: interiorImage2, category: 'Interior Architecture', name: 'Interior Project 1' },
  ];

  return (
    <div className="bg-white text-black p-8 mt-10 ">
      <div className="container mx-auto">
        <div className="flex justify-center mb-[4.5%]">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 mx-2 rounded-md transition-colors hover:bg-yellow-500 hover:text-stone-900 ${
                selectedCategory === category ? 'bg-yellow-500 text-stone-900' : 'bg-stone-900 text-white'
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects
            .filter((project) => selectedCategory === 'All' || project.category === selectedCategory)
            .map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Project;

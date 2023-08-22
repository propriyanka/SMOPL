import React from 'react';
import Header from '../components/Header/Header';


const ProjectsLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default ProjectsLayout;

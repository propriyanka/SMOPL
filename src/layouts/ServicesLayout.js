import React from 'react';
import Header from '../components/Header/Header';


const ServicesLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default ServicesLayout;

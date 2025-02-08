import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Routes = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet />

      <Footer />
      
    </div>
  );
};

export default Routes;
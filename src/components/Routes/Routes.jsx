import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Routes = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar></Navbar>
      <div className='flex-1 p-5'>
        <Outlet></Outlet>
      </div>

      <Footer />
      
    </div>
  );
};

export default Routes;
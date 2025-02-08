import React from 'react';
import Banner from '../Banner/Banner';
import Books from '../Books/Books';

const Home = () => {
  return (
    <div >
     <Banner />
     <div className='mx-auto justify-center items-center'>
      <Books />
     </div>
    </div>
  );
};

export default Home;
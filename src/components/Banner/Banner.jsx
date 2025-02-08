import React from 'react';
import banner from "../../assets/data/books.jpg"

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-96 p-10 rounded-2xl">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={banner}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Books to Freshen up your bookshelf</h1>
     
      <button className="btn btn-primary mt-10">View The List</button>
    </div>
  </div>
</div>
      
    </div>
  );
};

export default Banner;
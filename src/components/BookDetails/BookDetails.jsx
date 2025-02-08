import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {

  const {bookId} = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const book = data.find(book => book.bookId === id)
  const{ bookId : bookid , image, author,review} = book
  return (
    <div>
      <div className="hero px-32 py-10 min-h-screen ">
  <div className="hero-content  lg:flex-row gap-8">
    <img
      src={image}
      className=" rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{author}</h1>
      <p className="py-6">
        {review}
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
      
      
    </div>
  );
};

export default BookDetails;
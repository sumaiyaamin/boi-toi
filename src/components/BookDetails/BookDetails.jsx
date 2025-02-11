import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addtoReadList, setWish } from '../../utilities/addtoDb';

const BookDetails = () => {

  const {bookId} = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const book = data.find((book) => Number(book.bookId) === id);

  const{ bookId : bookid , image, author,review} = book

  const handleMarkRead =(id)=>{
    addtoReadList(id)
  }
  const handleWishList =(id) =>{
    setWish(id);
  }

  return (
    <div>
      <div className="hero px-32 py-10 min-h-screen ">
  <div className="hero-content  lg:flex-row gap-8">
    <img
      src={image}
      className=" rounded-lg shadow-2xl h-5/6 w-5/12" />
    <div>
      <h1 className="text-5xl font-bold">{author}</h1>
      <p className="py-6">
        {review}
      </p>
      <button onClick={()=>handleMarkRead(id)}className="btn btn-primary">Mark as Read</button>
      <button onClick={()=> handleWishList(id)}className="btn btn-outline btn-primary m-5">Wishlist</button>
    </div>
  </div>
</div>
      
      
    </div>
  );
};

export default BookDetails;
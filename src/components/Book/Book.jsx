import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {

  const {bookId,image,bookName, author,tags,category,rating} = book;

  return (
    <Link to={`books/${bookId}`}>
    <div className="card bg-base-100 w-80 shadow-xl mx-auto">
  <figure className='border bg-slate-100 rounded-xl mb-3 mt-5 w-11/12 mx-auto' >
    <img className='h-40 p-3 '
      src={book.image}
      alt="book-image" />
  </figure>
  <div className="card-body">
  <div>
    {book.tags.map((tag, index) => <span key={index} className='bg-green-300 rounded-2xl px-2 py-0.5 m-1 '>{tag}</span>)}
  </div>
    <h2 className="card-title">
    
      {book.bookName}
      
    </h2>
    <p>{book.author}</p>
    <hr className='border border-gray-300'></hr>
    <div className="flex card-actions justify-between">
      <div className="badge badge-outline">{book.category}</div>
      <div className='card-actions justify-end'>{book.rating}</div>
     
    </div>
  </div>
</div>
    </Link>
  );
};

export default Book;
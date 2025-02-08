import React from 'react';

const Book = ({book}) => {

  const {image,bookName, author,tags,category,rating} = book;

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure className='border bg-slate-100 rounded-xl mb-5 mt-5 w-11/12 mx-auto' >
    <img className='h-56 p-5 '
      src={book.image}
      alt="book-image" />
  </figure>
  <div className="card-body">
  <div>
    {book.tags.map((tag, index) => <span key={index} className='bg-green-300 rounded-2xl px-2 py-1 m-1 '>{tag}</span>)}
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
  );
};

export default Book;
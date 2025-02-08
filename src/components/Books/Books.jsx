import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {

  const [books, setBooks] = useState([]);

  useEffect(() =>{
    fetch('./booksData.json')
    .then(res => res.json())
    .then(data => setBooks(data))
    
  },[])


 
  return (
    <div>
      <h2 className='text-center text-3xl'>Books</h2>

    <div className='grid grid-cols-3 gap-5'>{
      books.map( book => <Book book={book} key={book.bookId} ></Book>)
    }
    </div>
    </div>
  );
};

export default Books;
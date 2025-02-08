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

    <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 justify-center'>{
      books.map( book => <Book book={book} key={book.bookId} ></Book>)
    }
    </div>
    </div>
  );
};

export default Books;
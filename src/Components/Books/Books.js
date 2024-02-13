import React from 'react'
import './books.css'
import book from './book.json'

function Books() {
  return (
    <div className='booksContainer'>
      <h1>Buy Recipe Books here</h1>

      <div className="bookCardsContainer">
        {
          book.map((bookData) =>(
            <div key={bookData.id} className="booksDiv">
              <div className="booksBanner">
                <img src={bookData.image} alt="books Image" />
              </div>

              <div className="booksInfo">
                <p>{bookData.name}</p>
                <p>{bookData.description}</p>
              </div>

              <div className="showBooksBtn">
                <button><a target='_blank' href={bookData.linkToBook}>Show Book</a></button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Books
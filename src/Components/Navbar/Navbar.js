import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className='Navbar'>
        <h1>#Foodie</h1>

        <ul>
            <li><Link to='/'><a href="/">Home</a></Link></li>
            <li><Link to='books'><a href="/books">Books</a></Link></li>
            <li><Link to='/favourites'><a href="/favourites">Favourites</a></Link></li>
        </ul>
    </div>
  )
}

export default Navbar
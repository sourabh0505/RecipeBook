import React from 'react'
import './footer.css'
import { SocialIcon } from 'react-social-icons'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footerContainer'>
        <div className="copyrightDiv">
            <h1>#Foodie</h1>
            <p>© All Copyrights Reserved</p>
        </div>

        <div className="freshFoodsDiv">
            <div className="freshFoodsContainer">
            <h3>Fresh Dishes</h3>
            <p><a href="/">Recipes</a></p>
            <p><a href="/">Winter Salads</a></p>
            </div>

            <div className="aboutUsDiv">
                <h3>About Us</h3>
                <p><Link to='/about'><a href="/about">Contact Us</a></Link></p>
            </div>
        </div>

        <div className="newsletterDiv">
            <input type="email" placeholder='Email' />
            <p>Subscribe for Newsletter here</p>

            <div className="socialMediaIcons">
            <a href="/"><SocialIcon url='https://instagram.com'/></a>
            <a href="/"><SocialIcon url='https://twitter.com'/></a>
            <a href="/"><SocialIcon url='https://facebook.com'/></a>
            <a href="/"><SocialIcon url='https://snapchat.com'/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer
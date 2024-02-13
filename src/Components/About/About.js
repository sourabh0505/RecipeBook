import React from 'react'
import './about.css'
import profileImage from './profileImage.jpg'

function About() {
  return (
    <div className='aboutContainer'>
      <div className="headingandImg">
      <h1>About Our Publisher</h1>
      <img src={profileImage} alt="publisher Image" />
      </div>

      <div className="publisherDes">
        
        <div className="description">
          <p>All the recipes on the website are taken from recipeBook. This is to certify that the publisher is genuine and authentic person, he just took the content for this website so as to complete this project.</p>
        </div>

        <div className="contactUs">
          <h1>Contact Us: </h1>
          <p>Email Id: sourabhvishnoi05@gmail.com</p>
          <p>Call Us: +91-7728974846</p>
        </div>
      </div>
    </div>
  )
}

export default About
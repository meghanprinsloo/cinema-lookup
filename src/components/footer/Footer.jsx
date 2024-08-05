import React from "react"
import "./footer.css"

// This component creates the footer of the website
const Footer = () => {
  // Footer items are not clickable or in full function.
  // It's purely for a nice looking page and not the purpose of this project :)
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box'>
            <ul className='flex'>
              <li>Terms of Use</li>
              <li>Privacy-Policy</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Watch List</li>
            </ul>
            <p>© 2024 Cinema Lookup. All Rights Reserved. This website project and all it's contents have been created by Meghan Prinsloo. Duplication or copy of this is strictly prohibited.</p>
          </div>
          <div className='box'>
            <h3>Follow Us</h3>
            <i className='fab fa-facebook-f'></i>
            <i className='fab fa-twitter'></i>
            <i className='fab fa-github'></i>
            <i className='fab fa-instagram'></i>
          </div>
          <div className='box'>
            <h3>Cinema Lookup App</h3>
            <div className='img flexSB'>
              <img src='https://img.icons8.com/color/48/000000/apple-app-store--v3.png' alt=''/>
              <span>App Store</span>
              <img src='https://img.icons8.com/fluency/48/000000/google-play.png' alt=''/>
              <span>Google Play Store</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

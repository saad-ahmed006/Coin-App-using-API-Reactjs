import React from 'react'
import FooterLogo from '../assets/images.jfif'
import '../Styles/Footer.css'

export default function Footer() {
    return (
        <div className='Footer'>
            <div className='Heading'>
                <h1>About Us</h1>
                <p> We are the best crypto trading app in India, we provide our guidance at a very cheap price.</p>
            </div>
            <div className='Image'>
                <img src={FooterLogo} alt="Footer Img"></img>
                <p>Our Founder</p>

            </div>
        </div>
    )
}

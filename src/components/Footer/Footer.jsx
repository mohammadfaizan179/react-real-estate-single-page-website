import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <section className="footer-wrapper wrapper-width">
        <div className="paddings innerWidth flexCenter footer-container">
            <div className='flexColStart f-left'>
                <div className='f-img'>
                    <img src="./logo2.png" alt="footer" />
                </div>
                <span className='secondaryText'>Our vision is to make all people the best place to live for them.</span>
            </div>
            <div className='flexColStart f-right'>
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>145 New York, FL 4571, USA</span>
                <div className='flexCenter f-menu'>
                    <span>Property</span>
                    <span>Service</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
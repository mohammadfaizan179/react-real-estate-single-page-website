import React from 'react'
import "./GetStarted.css"

const GetStarted = () => {
  return (
    <section className="gs-wrapper wrapper-width">
        <div className="paddings innerWidth gs-container">
            <div className='flexColCenter inner-container'>
                <span className='primaryText'>Get Started with Homyz</span>   
                <span className='secondaryText'>
                    Subscribed and find super attactive price quotes from us
                    <br />
                    Find your residence soon
                </span> 
                <span>
                    <button className='button'>
                        <a href="mailto:faizan.meo179@gmail.com">Get Started</a>
                    </button>
                </span>
            </div>
        </div>
    </section>
  )
}

export default GetStarted
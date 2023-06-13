import React from 'react'
import "./Hero.css"
import { HiLocationMarker } from 'react-icons/hi'
import CountUp from 'react-countup';

const Hero = () =>{
    return(
        <section className='hero-wrapper'>
            <div className="paddings innerWidth flexCenter hero-container">
                {/* left side */}
                <div className="flexColStart hero-left">
                    <div className="orange-circle" />
                    <div className="hero-title">
                        <h1>
                            Disconver <br />
                            Most Suitable <br />
                            Property
                        </h1>
                    </div>
                    <div className="flexColStart hero-dec">
                        <span className='secondaryText'>Find a variety of properties that suites you very easily</span>
                        <span className='secondaryText'>Forget all difficulties in finding a residence for you!</span>
                    </div>
                    <div className='flexCenter search-bar'>
                        <HiLocationMarker color="var(--blue)" size={25} />
                        <input type="text" placeholder='Search here...'/>
                        <button className='button'>Search</button>
                    </div>
                    <div className='flexCenter stats'>
                        <div className='flexColStart stat'>
                            <span>
                                <CountUp start={8800} end={9000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Premium Product</span>
                        </div>
                        <div className='flexColStart stat'>
                            <span>
                                <CountUp start={1950} end={2000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Happy Customer</span>
                        </div>
                        <div className='flexColStart stat'>
                            <span>
                                <CountUp end={28} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Award Winning</span>
                        </div>
                    </div>
                </div>
                
                {/* right side */}
                <div className="flexCenter hero-right">
                    <div className='img-container'>
                        <img src="./hero-image.png" alt="Hero-Image" />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Hero
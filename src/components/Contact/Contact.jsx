import React from 'react'
import "./Contact.css"
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi'

const Contact = () => {
    return (
        <section className="contact-wrapper wrapper-width">
            <div className="paddings flexCenter innerWidth contact-container">
                {/* Left - Side */}
                <div className='flexColStart c-left'>
                    <span className='orangeText'>Our Contacts</span>
                    <span className='primaryText'>Easy to Contact Us</span>
                    <span className='secondaryText'>We always ready to help by providing the best services for you. We believe a good blace to live can make your life better</span>

                    <div className="flexColStart contactModes">
                        {/* First Row */}
                        <div className='flexStart row'>
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Call</span>
                                        <span className="secondaryText">021 123 145 14</span>
                                    </div>
                                </div>
                                <div className='flexCenter button'>Call Now</div>
                            </div>
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Chat</span>
                                        <span className="secondaryText">021 123 145 14</span>
                                    </div>
                                </div>
                                <div className='flexCenter button'>Chat Now</div>
                            </div>
                        </div>

                        {/* Second Row */}
                        <div className='flexStart row'>
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Video Call</span>
                                        <span className="secondaryText">021 123 145 14</span>
                                    </div>
                                </div>
                                <div className='flexCenter button'>Video Call Now</div>
                            </div>
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Message</span>
                                        <span className="secondaryText">021 123 145 14</span>
                                    </div>
                                </div>
                                <div className='flexCenter button'>Message Now</div>
                            </div>
                        </div>
                    </div>
                
                </div>

                {/* Right - Side */}
                <div className='flexColEnd c-right'>
                    <div className='img-container'>
                        <img src="./contact.jpg" alt="contact" />
                    </div>
                </div>    
            </div>        
        </section>
    )
}

export default Contact
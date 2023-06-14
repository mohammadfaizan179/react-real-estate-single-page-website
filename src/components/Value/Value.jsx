import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from "react-accessible-accordion"
import "react-accessible-accordion/dist/fancy-example.css"
import { MdOutlineArrowDropDown } from "react-icons/md"
import "./Value.css"
import data from "../../utils/accordion"

const Value = () => {
    const [className, setClassName] = useState(null)
                                
    return (
        <section className="v-warper wrapper-width">
            <div className="paddings innerWidth flexCenter v-container">
                {/* Left - side */}
                <div className='v-left'>
                    <div className='img-container'>
                        <img src="./value.png" alt="Values" />
                    </div>
                </div>

                {/* Right - Side */}
                <div className="flexColStart v-right">
                    <span className='orangeText'>Our Value</span>
                    <span className='primaryText'>Value We Give to You</span>
                    <span className='secondaryText'>
                        We are always ready to help you by proving the best services for you.
                        <br />
                        We blieve a good place to live can make you life better
                    </span>

                    <Accordion
                        className='accordion'
                        allowMultipleExpanded={false}
                        preExpanded={[0]}           
                    >
                        {   
                            data.map((item, i)=>{
                                return(
                                    <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className='flexCenter accordionButton'>
                                                <AccordionItemState>
                                                    {({expanded}) => 
                                                        expanded 
                                                        ? setClassName("expanded") 
                                                        : setClassName("collapsed")
                                                    }
                                                </AccordionItemState>
                                                <div className="flexCenter icon">{item.icon}</div>
                                                <span className="primaryText">{item.heading}</span>
                                                <div className="flexCenter icon"><MdOutlineArrowDropDown size={20} /></div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p className="secondayText">{item.detail}</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                )
                            })
                        }
                    </Accordion>

                </div>
            </div>
        </section>
    )
}

export default Value
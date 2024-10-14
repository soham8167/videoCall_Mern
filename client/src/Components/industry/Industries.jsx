import React from 'react'
import "./Industries.css"
import { IoSchool } from "react-icons/io5";
import { GiHealing } from "react-icons/gi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { RiGovernmentFill } from "react-icons/ri";
import { FaBoxOpen } from "react-icons/fa";
import { IoStorefront } from "react-icons/io5";

const Industries = () => {
  return (
    <>
    {/* parent Container*/}
    <div className='container'>
        {/* left */}
        <div className='left-sec '>
            <h1 className='ih1'>Powering Organisations acrosss <br/>
                Industries and Geographies
            </h1>
            <h3 className='ih3 mt-10 leading-8'>Helps us in consolidating communications, connect people,
                and<br/> collaborate better together in the boardroom, classroom,<br/>
                operating room, and everywhere in between
            </h3>
        </div>
        {/* right */}
        <div className='right-sec '>
            <div className='industries row '>
                <div className='box '>
                    <IoSchool />
                    <h2>Education</h2>
                </div>
                <div className='box'>
                    <GiHealing /> 
                    <h2>Healthcare</h2>
                </div>
                <div className='box'>
                    <RiMoneyDollarCircleFill />
                    <h2>Financial Services</h2>
                </div>
                <div className='box'>
                    <RiGovernmentFill/> 
                    <h2>Government</h2>
                </div>
                <div className='box'>
                    <FaBoxOpen />
                    <h2>Manufacturing</h2>
                </div>
                <div className='box'>
                    <IoStorefront /> 
                    <h2>Retail</h2>
                </div>
            </div>
        </div>
      
    </div>
    </>
  )
}

export default Industries

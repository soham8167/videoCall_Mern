import React from 'react'
import "./UserCount.css"
import CountUp from "react-countup"
import { motion } from "framer-motion"
import image from "../../Images/vc.png"
import { Link } from 'react-router-dom';

const UserCount = () => {
    return (
        <section className="h-wrapper w-100 ">
            <div className="total ">
                {/* Left */}
                <div className="h-left">
                    {/* left title */}
                    <div className="hero-title">
                        <div className="orange-circle" />
                        <motion.h1
                            initial={{ y: "2rem", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 2, type: "tween" }}
                        >
                            <h1>
                                Made in India<br />
                                Made for the World.
                            </h1>
                        </motion.h1>
                        <div className="blue-circle" />
                    </div>
                    
                    
                        <div className="stats w-full grid grid-cols-2 gap-10 z-10 mt-10">
                            
                                <div className="stat">
                                    <span >
                                        <CountUp start={8800} end={9000} duration={4} />
                                        <span>+</span>
                                    </span>
                                    <span className="secondaryText">User Globally</span>

                                </div>
                                <div className=" stat">
                                    <span >
                                        <CountUp start={120} end={150} duration={4} />
                                        <span>+</span>
                                    </span>
                                    <span className="secondaryText">Countries Served</span>
                                </div>
                                <div className=" stat">
                                    <span >
                                        <CountUp start={20} end={27} duration={4} />
                                        <span>+</span>
                                    </span>
                                    <span className="secondaryText">Awards</span>
                                </div>
                                <div className=" stat">
                                    <span >
                                        <CountUp start={20} end={27} duration={4} />
                                        <span>+</span>
                                    </span>
                                    <span className="secondaryText">Years in Business</span>
                                </div>
                                <div className=" stat">
                                    <span >
                                        <CountUp start={200} end={265} duration={4} />
                                        <span>+</span>
                                    </span>
                                    <span className="secondaryText">Employee</span>
                                </div>
                        </div>
                      <Link to="/about">  <button className='btn btn-primary w-40 mb-10'>More about Us</button></Link>

                    
                </div>
                {/* Right */}
                <div className=" h-right ">
                    <motion.div
                        initial={{ x: "7rem", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2, type: "tween" }}
                    >
                        <div className="image-container">
                            <img src={image} alt="" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default UserCount

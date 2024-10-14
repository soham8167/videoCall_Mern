import React from 'react'
import IMG from '../Images/videoconfo1.png'
import './hero.css'
import {Link} from 'react-router-dom' 
import { isLoggedIn } from '../utils/auth'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import 'animate.css';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleLogin = ()=>{
    Swal.fire({
      title: "Login First",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    })
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  }
    
  return (
    <div>
        <section className="bg-gray-900">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className=" mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
                Transform the Way You Communicate
                </h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                  Connect, collaborate, and conquer with our all-in-one video conferencing solution. Enjoy seamless communication and secure connections, enhancing productivity for teams everywhere.
                </p>
                <div className='middd'>
                  {isLoggedIn()?
                  <Link to="/create-meeting"   className="no-underline text-current inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-slate-300 hover:text-blue-950  dark:focus:ring-primary-900" style={{ boxShadow : "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"}}>
                  Create Meeting
                  <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" ></path>
                  </svg>
                </Link>
                :
                <button  onClick={handleLogin}   className="no-underline text-current inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-slate-300 hover:text-blue-950  dark:focus:ring-primary-900" style={{ boxShadow : "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"}}>
                Create Meeting
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" ></path>
                </svg>
              </button>
                }
                
                <Link to="/services" className="no-underline text-current inline-flex items-center justify-center border-4 px-5 py-3 text-base font-medium text-center   border-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 focus:ring-4 focus:ring-gray-100 text-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                  Speak to Sales
                </Link>
                </div>
              </div>
              <div className=" lg:mt-0 lg:col-span-5 lg:flex">
                <img src={IMG} alt="mockup" />
              </div>
            </div>
    </section>
    </div>
  )
}
 
export default HeroSection
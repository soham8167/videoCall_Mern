import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import UserCount from '../Components/usercount/UserCount'
import Industries from '../Components/industry/Industries'
import BuinessPlan from '../Components/businessplan/BusinessPlan'
import Foooter from '../Components/Foooter'
import Privacy from '../Components/Privacy'


const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <UserCount/>
        <Industries/>
        <BuinessPlan/>
        <Privacy/>
        <Foooter/>
    </div>
  )
}

export default Home
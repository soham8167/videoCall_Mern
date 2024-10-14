import React from 'react'
import Sidebar from '../Components/admin/Sidebar'
import Foooter from '../Components/Foooter'
import Dashboard from '../Components/admin/Dashboard'

const AdminDashboard = () => {
  return (
    <div >
      <div className='flex'>
      <Sidebar/>
      <Dashboard/>
      </div>
      
      <Foooter/>
    </div>
  )
}

export default AdminDashboard

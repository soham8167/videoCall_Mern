import React from 'react'
import Sidebar from '../Components/admin/Sidebar'
import Foooter from '../Components/Foooter'
import User from '../Components/admin/user'


const AdminUser = () => {
  return (
    <div >
      <div className='flex'>
        <Sidebar />
        <User/>
      </div>
      <Foooter />

    </div>
  )
}

export default AdminUser

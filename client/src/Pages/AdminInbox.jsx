import React from 'react'
import Sidebar from '../Components/admin/Sidebar'
import Foooter from '../Components/Foooter'
import Inbox from '../Components/admin/Inbox'


const AdminInbox = () => {
  return (
    <div >
      <div className='flex'>
        <Sidebar />
        <Inbox/>
      </div>
      <Foooter />

    </div>
  )
}

export default AdminInbox
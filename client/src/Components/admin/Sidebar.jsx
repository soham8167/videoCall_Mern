import React, { useState } from 'react'
import { LuMenuSquare } from "react-icons/lu";
import { MdStackedBarChart } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { MdMoveToInbox } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Logo from "../../Images/logo.png"

const Sidebar = () => {
    const [open, setOpen] = useState(true)
    const handleOpen = () => {
        setOpen(!open)
    }
    const Menus = [
        {
            title: "Dashboard",
            logo: <MdStackedBarChart />,
            path: "/admin/dashboard"
        },
        {
            title: "Users",
            logo: <HiUsers />,
            path: "/admin/user"
        },
        {
            title: "Inbox",
            logo: <MdMoveToInbox />,
            path: "/admin/inbox"
        },
        {
            title: "Logout",
            logo: <IoLogOut />,
            path: "/logout"
        },
    ]
    return (
        <div >
            <div className={`${open ? "w-64" : "w-16"} relative duration-150 h-screen bg-gray-800 text-gray-200 flex flex-col overflow-y-hidden-hidden`}>
                <div className='flex items-center  gap-3 rtl:space-x-reverse p-2 pt-3 pb-3'>
                    <a href="/" className={`${!open && 'hidden'} flex  space-x-3 ml-2 items-center`} >
                        <img
                            src={Logo}
                            className="h-12"
                            alt="logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                        MeetUp
                        </span>
                    </a>
                    <div className=' items-center'>
                        <LuMenuSquare onClick={handleOpen} className={`${open ? 'ml-4' : 'ml-2'} w-8 h-8  cursor-pointer`} />
                    </div>
                </div>
                <div>
                    <ul className='pt-5'>
                        {Menus.map((menu, index) => (
                            <Link to={menu.path}>
                                <li key={index} className='text-gray-300 cursor-pointer gap-x-4 mr-2 ml-1 pt-2 pb-1 flex items-center text-center justify-start pr-4 pl-2 mt-3 text-xl font-semibold hover:bg-slate-50 hover:text-gray-700 rounded-md'>
                                    <span className='text-3xl items-center'>{menu.logo}</span>
                                    <span className={`${!open && 'hidden'} origin-left duration-150`}>{menu.title}</span>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar

import React, { useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BsFacebook, BsMessenger } from 'react-icons/bs'
import { CgMenuGridR, CgProfile } from 'react-icons/cg'
import { IoLogoGameControllerA, IoMdNotifications } from 'react-icons/io'
import { MdOutlineAirplay } from 'react-icons/md'
import { TiGroup } from 'react-icons/ti'
import { Link } from 'react-router-dom'

export const Header = () => {

    const [iconColor, setIconColor] = useState(false)
    const currentLocation = window.location.href

    return (
        <div className="navbar border-b  fixed top-0 z-10 bg-gray-50 ">
            <div className="flex-1 space-x-10 justify-between">
                <div className=' flex space-x-10'>
                    <Link to='/'><BsFacebook className=' cursor-pointer text-4xl text-blue-600' /></Link>
                    <input className=' input input-bordereds outline-none' type='text' placeholder='Search Facebook' />
                </div>


                <ul className="menu menu-horizontal space-x-20 px-1 mr-72">
                    <Link className='' to='/'><AiFillHome className={`text-4xl text-gray-500 ${currentLocation ? 'text-blue-600' : ''}`} /></Link>
                    <Link className='' to='/'><MdOutlineAirplay className=' text-4xl text-gray-500' /></Link>
                    <Link className='' to='/'><TiGroup className=' text-4xl text-gray-500' /></Link>
                    <Link className='' to='/'><IoLogoGameControllerA className=' text-4xl text-gray-500' /></Link>
                </ul>
                <div className=' flex space-x-2'>
                    <Link onClick={() => setIconColor(!iconColor)} className={`box-border text-3xl rounded-full bg-zinc-200 p-2  ${iconColor ? 'bg-zinc-500' : ''}`} to='/'><CgMenuGridR /></Link>
                    <Link className='  box-border text-3xl rounded-full bg-zinc-200 p-2 ' to='/'><BsMessenger /></Link>
                    <Link className='  box-border text-3xl rounded-full bg-zinc-200 p-2 ' to='/'><IoMdNotifications /></Link>
                    <Link className='  box-border text-3xl rounded-full bg-zinc-200 p-2 ' to='/'><CgProfile /></Link>
                </div>
            </div>
        </div>
    )
}

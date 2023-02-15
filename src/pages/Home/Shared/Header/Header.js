import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
    const menue = <>
        <div className='ml-10
                '>
            <Link to='/'><span className='fromLeft'>Home</span></Link>
        </div>
        <div className='ml-10
                '>
            <Link to='/'><span className='fromLeft'>Project</span></Link>
        </div>
        <div className='ml-10
                '>
            <Link className=' border-2 py-2 px-4 hover:bg-[#3FA796] transition-all  duration-1000 border-[#3FA796] ' to='/'><span className='about'>About Me </span></Link>
        </div>
        <div className='  ml-10
                '>
            <Link to='/'><span className='fromLeft'>Home</span></Link></div>
    </>
    return (
        <div>
            <div className=' hidden lg:block'>
                <div className=' flex justify-around h-20'>
                    <div className=' mt-10'>
                        <p style={{ fontFamily: 'burtons' }} className='text-xl md:text-2xl lg:text-2xl font-bold text-[#3FA796]'>DevTanvir</p>
                    </div>
                    <div style={{ fontFamily: 'Work Sans' }} className='  flex mt-10 font-bold'>
                        {menue}
                    </div>
                </div>

            </div>
            <div style={{ fontFamily: 'Work Sans' }} className="dropdown flex justify-between lg:hidden">
                <div className=' mt-10'>
                    <p style={{ fontFamily: 'burtons' }} className='  text-3xl text-[#3FA796]'>DevTanvir</p>
                </div>
                <div className=' mt-10'>
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <AiOutlineMenu className=' text-3xl text-[#3FA796]' />
                    </label>
                    <ul tabIndex={0} className=" menu menu-compact dropdown-content mt-3 p-10 shadow rounded-box w-52 text-white">
                        {menue}
                    </ul>
                </div>
            </div>
        </div>

    )
}

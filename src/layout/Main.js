import React, { useState } from 'react'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { FaFacebookMessenger, FaUserFriends } from 'react-icons/fa'
import { FcAdvertising } from 'react-icons/fc'
import { SiGooglemybusiness, SiSimpleanalytics } from 'react-icons/si'
import { Link } from 'react-router-dom'
import marketplace from '../assets/facebook-react/marketplace.png'
import { Home } from '../Pages/Home/Home/Home'
import { Header } from '../Pages/Home/shared/Header/Header'
export const Main = () => {
    const [iconColor, setIconColor] = useState(false)
    return (
        <div className='relative'>
            <Header />
            <div className=' flex justify-evenly '>
                <div className="drawer drawer-mobile sticky top-20 z-10">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                            <li><Link to='/'><FaUserFriends className=' text-3xl' /> <span>Friends</span></Link></li>
                            <li><Link to='/'><BsFillBookmarkFill className=' text-3xl' /> <span>Saved</span></Link></li>
                            <li><Link to='/'><img className=' w-9' src={marketplace} alt='' /> <span>Marketplace</span></Link></li>
                            <li><Link to='/'><SiSimpleanalytics onClick={() => setIconColor(!iconColor)} className={`text-3xl ${iconColor ? ` bg-base-300` : ''}`} /><span>Analytics</span></Link></li>
                            <li><Link to='/'><FcAdvertising className=' text-3xl
                            '/> <span>Advertising</span></Link></li>
                            <li><Link to='/'><FaFacebookMessenger className='text-3xl' /><span>Messenger</span></Link></li>
                            <li><Link to='/'><SiGooglemybusiness className='text-3xl' /><span>Manager</span></Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                        </ul>
                    </div>
                </div>
                <div className=' w-[600px] ml-36'>
                    <Home />
                </div>
                <div className="drawer drawer-mobile sticky top-20 z-10">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                            <li><Link to='/'><FaUserFriends /></Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                            <li><Link to='/'>Sidebar Item 2</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import { Outlet } from 'react-router-dom'

export default function LoginLayout() {

    return (
        <div className=' p-40 space-y-20 bg-slate-300'>
            <Outlet />
        </div>
    )
}

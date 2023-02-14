import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import LoginLayout from '../../layout/LoginLayout'
import { Main } from '../../layout/Main'
import { Home } from '../Home/Home/Home'
import { Login } from '../Login/Login'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
    {
        path: '/login',
        element: <LoginLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
])


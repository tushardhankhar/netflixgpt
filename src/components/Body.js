import React from 'react'
import Login from './Login'
import Browser from './Browser'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

export default function Body() {
  const router =   createBrowserRouter([
        {
            path : "/",
            element : <Browser />
        },
        {
            path : "/login",
            element: <Login />
        }
    ])
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  )
}

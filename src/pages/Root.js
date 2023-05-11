import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function RootPage() {
  return (
    <>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
    </>
  )
}

export default RootPage
import React from 'react'
import "../globals.css";
import Navbar from '@/components/Shared/Navbar/Navbar';

const layout = ({ children }) => {
  return (
    <>
      <div className='container'>
        <Navbar />
        {children}
      </div>
    </>
  )
}

export default layout
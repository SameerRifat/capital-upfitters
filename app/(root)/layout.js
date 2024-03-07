import React from 'react'
import "../globals.css";
import Navbar from '@/components/Shared/Navbar/Navbar';

const layout = ({ children }) => {
  return (
    <>
      <div className='container'>
        {/* <div className="right_ellipse_bg" />
        <div className="left_ellipse_bg" /> */}
        <Navbar />
        {children}
      </div>
    </>
  )
}

export default layout
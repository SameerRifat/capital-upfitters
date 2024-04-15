import React from 'react'
import "../globals.css";
import Navbar from '@/components/Shared/Navbar/Navbar';
import { automotiveNavLinks } from '@/constants';

const layout = ({ children }) => {
  return (
    <>
      <div className='container'>
        <Navbar navlinks={automotiveNavLinks}/>
        {children}
      </div>
    </>
  )
}

export default layout
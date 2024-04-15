import Navbar from '@/components/Shared/Navbar/Navbar'
import { commercialNavLinks } from '@/constants'
import React from 'react'

const layout = ({ children }) => {
    return (
        <div className='container'>
            <Navbar navlinks={commercialNavLinks}/>
            {children}
        </div>
    )
}

export default layout
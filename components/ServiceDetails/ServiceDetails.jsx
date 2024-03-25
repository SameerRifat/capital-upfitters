import React from 'react'

const ServiceDetails = ({ data }) => {
    return (
        <div>
            <h1 style={{ color: 'white', textAlign: 'center', marginTop: '4rem' }}>{data.serviceTitle}</h1>
        </div>
    )
}

export default ServiceDetails
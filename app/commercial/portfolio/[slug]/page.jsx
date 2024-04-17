import React from 'react'

const page = async ({ params }) => {
    const slugWithoutDash = params.slug.replace(/-/g, ' ');
    return (
        <div className='error_message'>
            <h1 style={{textAlign: 'center', textTransform: 'uppercase'}}>
                {slugWithoutDash}
            </h1>
        </div>
    )
}

export default page

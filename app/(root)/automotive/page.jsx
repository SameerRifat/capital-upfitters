import React from 'react'
import cx from 'classnames'
import Automotive from '@/components/Automotive/Automotive'
import PagesLayout from '@/layouts/PagesLayout'

export const revalidate = 30 // revalidate at most every 30 seconds

const AutomotivePage = () => {
  return (
    <>
      <PagesLayout pageClass='automotive'>
        <Automotive />
      </PagesLayout>
    </>
  )
}

export default AutomotivePage
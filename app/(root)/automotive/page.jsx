import React from 'react'
import cx from 'classnames'
import Automotive from '@/components/Automotive/Automotive'
import PagesLayout from '@/layouts/PagesLayout'

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
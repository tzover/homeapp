import React, { ReactNode } from 'react'
import Footer from '../modules/Footer'
import HomeHeader from '../modules/HomeHeader'

interface Props {
  title: string
  children: ReactNode
}

function HomeLayout(props: Props) {
  const { title, children } = props

  const copyright = 'tzover 2022'
  return (
    <>
      <div className='min-h-screen'>
        <HomeHeader title={title} />
        {children}
      </div>
      <Footer copyright={copyright} />
    </>
  )
}

export default HomeLayout

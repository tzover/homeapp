import React, { ReactNode } from 'react'
import Footer from '../modules/Footer'
import Header from '../modules/Header'

interface Props {
  title: string
  appName: string
  children: ReactNode
}

function Layout(props: Props) {
  const { title, appName, children } = props

  const copyright = 'tzover 2022'
  return (
    <>
      <div className='min-h-screen'>
        <Header title={title} appName={appName} />
        {children}
      </div>
      <Footer copyright={copyright} />
    </>
  )
}

export default Layout

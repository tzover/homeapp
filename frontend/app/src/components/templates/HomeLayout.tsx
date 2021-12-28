import React, { ReactNode } from 'react'
import HomeHeader from '../modules/HomeHeader'

interface Props {
  title: string
  children: ReactNode
}

function HomeLayout(props: Props) {
  const { title, children } = props
  return (
    <>
      <HomeHeader title={title} />
      {children}
    </>
  )
}

export default HomeLayout

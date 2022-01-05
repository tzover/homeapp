import React from 'react'
import Head from 'next/head'

interface Props {
  title: string
  appName: string
}

function Header(props: Props) {
  const { title, appName } = props
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className='flex flex-col justify-center w-full bg-blue-200'>
        <div className='p-5'>
          <h1 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
            {appName}
          </h1>
        </div>
      </div>
    </>
  )
}

export default Header

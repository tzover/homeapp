import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

interface Props {
  title: string
}

function HomeHeader(props: Props) {
  const { title } = props
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className='flex flex-col justify-center w-full bg-blue-200'>
        <div className='p-5'>
          <h1 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
            Home Apps
          </h1>
        </div>
        <div className='w-2/5 pb-20 mx-auto md:w-2/6 lg:w-2/6 xl:1/2'>
          <Image
            className='rounded-full'
            src='/sample.jpg'
            alt='sample'
            width={10}
            height={10}
            objectFit='cover'
            layout='responsive'
          />
        </div>
      </div>
    </>
  )
}

export default HomeHeader

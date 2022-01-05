import React from 'react'

interface Props {
  copyright: string
}

function Footer(props: Props) {
  const { copyright } = props

  return (
    <div className='w-full mt-5 border-t-2 border-gray-200 text-right'>
      <p className='p-2 m-2 text-gray-500 md:text-xl'> &copy; {copyright}</p>
    </div>
  )
}

export default Footer

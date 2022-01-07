import React from 'react'

interface Props {
  title: string
}

function SubTitle(props: Props) {
  const { title } = props

  return <h2 className='text-xl my-5 md:text-2xl lg:text-3xl'>{title}</h2>
}

export default SubTitle

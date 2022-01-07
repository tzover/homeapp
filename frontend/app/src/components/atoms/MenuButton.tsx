import { useRouter } from 'next/router'
import React from 'react'

interface Props {
  menuName: string
}

function MenuButton(props: Props) {
  const { menuName } = props
  const router = useRouter()

  return (
    <button
      type='button'
      className={`w-full py-10 text-xl group-hover:underline md:text-3xl md:py-20`}
      onClick={() => router.push(`/${menuName.toLowerCase()}`)}
    >
      {menuName}
    </button>
  )
}

export default MenuButton

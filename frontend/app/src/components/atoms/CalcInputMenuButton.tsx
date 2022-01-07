import { useRouter } from 'next/router'
import React from 'react'

interface Props {
  menuName: string
  path: string
}

function CalcInputMenuButton(props: Props) {
  const { menuName, path } = props
  const router = useRouter()

  return (
    <button
      type='button'
      className={`w-full py-12 text-lg break-all group-hover:underline`}
      onClick={() => router.push(`/homecalc/input/${path.toLowerCase()}`)}
    >
      {menuName}
    </button>
  )
}

export default CalcInputMenuButton

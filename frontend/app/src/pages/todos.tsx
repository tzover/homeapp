import { useRouter } from 'next/router'
import React from 'react'

function Todos() {
  const router = useRouter()
  return (
    <div>
      Todos
      <button type='button' className='p-10' onClick={() => router.push('/')}>
        back
      </button>
    </div>
  )
}

export default Todos

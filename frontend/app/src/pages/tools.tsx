import { useRouter } from 'next/router'
import React from 'react'

function Tools() {
  const router = useRouter()
  return (
    <div>
      Tools
      <button type='button' className='p-10' onClick={() => router.push('/')}>
        back
      </button>
    </div>
  )
}

export default Tools

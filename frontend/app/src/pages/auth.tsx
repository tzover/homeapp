import { useRouter } from 'next/router'
import React from 'react'

function AuthPage() {
  const router = useRouter()
  return (
    <div>
      AuthPage
      <button type='button' className='p-10' onClick={() => router.push('/')}>
        back
      </button>
    </div>
  )
}

export default AuthPage

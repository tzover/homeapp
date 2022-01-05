import { useRouter } from 'next/router'
import Layout from '../components/templates/Layout.tsx'

function HomeCalc() {
  const router = useRouter()
  return (
    <Layout title={'Home Calc'} appName={'Home Calc'}>
      <button type='button' className='p-10' onClick={() => router.push('/')}>
        back
      </button>
    </Layout>
  )
}

export default HomeCalc

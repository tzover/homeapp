import { useRouter } from 'next/router'

interface Props {
  pagePath: string
}

function PageBackButton(props: Props) {
  const { pagePath } = props
  const router = useRouter()
  return (
    <div className='text-left py-5 md:p-10'>
      <button
        type='button'
        className='bg-blue-100 rounded-full w-20 h-20 hover:bg-blue-300 md:w-24 md:h-24 md:text-xl '
        onClick={() => router.push(pagePath)}
      >
        back
      </button>
    </div>
  )
}

export default PageBackButton

import type { NextPage } from 'next'
import HomeLayout from '../components/templates/HomeLayout'

const Home: NextPage = () => {
  const homeMenu = ['Auth', 'HomeCalc']
  return (
    <HomeLayout title='HomeCalc'>
      <div className='flex justify-center p-5'>
        {homeMenu.map((item) => {
          return (
            <div
              className='bg-blue-200 w-1/3 px-5 py-10 mx-5 rounded-2xl text-center hover:bg-blue-100'
              key={item}
            >
              <button type='button' className={``} disabled>
                {item}
              </button>
            </div>
          )
        })}
      </div>
    </HomeLayout>
  )
}

export default Home

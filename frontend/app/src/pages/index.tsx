import type { NextPage } from 'next'
import HomeLayout from '../components/templates/HomeLayout'
import MenuButton from '../components/atoms/MenuButton'

const Home: NextPage = () => {
  const homeMenu = ['Auth', 'HomeCalc', 'Todos', 'Tools']
  return (
    <HomeLayout title='Home Apps'>
      <div className='flex flex-col justify-between mt-5 p-3 md:flex-row md:flex-wrap md:mt-20'>
        {homeMenu.map((item) => {
          return (
            <div
              key={item}
              className='w-full mx-auto rounded-2xl text-center group hover:bg-blue-100 md:w-1/2'
            >
              <MenuButton menuName={item} />
            </div>
          )
        })}
      </div>
    </HomeLayout>
  )
}

export default Home

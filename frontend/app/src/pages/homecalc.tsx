import Layout from '../components/templates/Layout.tsx'
import SubTitle from '../components/atoms/SubTitle'
import CalcMenuButton from '../components/atoms/CalcMenuButton'
import PageBackButton from '../components/atoms/PageBackButton'

function HomeCalc() {
  const calcMenu = ['Input', 'Summary', 'Planning', 'Settings']
  return (
    <Layout title={'Home Calc'} appName={'Home Calc App'}>
      <SubTitle title='Menu' />
      <div className='flex flex-col justify-between p-3 px-5 mt-5 md:flex-row md:flex-wrap'>
        {calcMenu.map((item) => {
          return (
            <div
              key={item}
              className='w-full mx-auto rounded-2xl text-center group hover:bg-blue-100 md:w-1/2'
            >
              <CalcMenuButton menuName={item} />
            </div>
          )
        })}
      </div>
      <PageBackButton pagePath='/' />
    </Layout>
  )
}

export default HomeCalc

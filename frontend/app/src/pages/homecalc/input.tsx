import Layout from '../../components/templates/Layout.tsx'
import SubTitle from '../../components/atoms/SubTitle'
import PageBackButton from '../../components/atoms/PageBackButton'
import CalcInputMenuButton from '../../components/atoms/CalcInputMenuButton'
import ButtonActionContainer from '../../components/templates/ButtonActionContainer'
import { inputCalcMenu } from '../../contexts/AppBasicContext'

function SelectInputCalcMenu() {
  return (
    <Layout title={'Home Calc | Input'} appName={'Home Calc App'}>
      <SubTitle title='Select Input Calc Menu' />
      <div className='flex flex-wrap items-center justify-center my-14'>
        {inputCalcMenu.map((item) => {
          return (
            <div
              key={item.view}
              className='bg-blue-300 w-32 h-32 m-3 rounded-full group md:w-44 md:h-44 lg:w-56 lg:h-56 xl:mx-16'
            >
              <CalcInputMenuButton menuName={item.view} path={item.path} />
            </div>
          )
        })}
      </div>
      <ButtonActionContainer isForm={false}>
        <PageBackButton pagePath='/homecalc' />
      </ButtonActionContainer>
    </Layout>
  )
}

export default SelectInputCalcMenu

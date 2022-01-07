import Layout from '../../components/templates/Layout.tsx'
import SubTitle from '../../components/atoms/SubTitle'
import PageBackButton from '../../components/atoms/PageBackButton'
import CalcInputMenuButton from '../../components/atoms/CalcInputMenuButton'

function SelectInputCalcMenu() {
  const inputMenu = [
    { path: 'income', view: '収入' },
    { path: 'saving', view: '貯蓄' },
    { path: 'fixed-cost', view: '固定支出' },
    { path: 'variable-cost', view: '変動支出' },
    { path: 'yuz', view: 'yuz' },
    { path: 'etc', view: 'etc' },
  ]
  return (
    <Layout title={'Home Calc | Input'} appName={'Home Calc App'}>
      <SubTitle title='Select Input Calc Menu' />
      <div className='flex flex-wrap items-center justify-center my-14'>
        {inputMenu.map((item) => {
          return (
            <div
              key={item.view}
              className='bg-blue-300 w-32 h-32 m-2 rounded-full group'
            >
              <CalcInputMenuButton menuName={item.view} path={item.path} />
            </div>
          )
        })}
      </div>
      <PageBackButton pagePath='/homecalc' />
    </Layout>
  )
}

export default SelectInputCalcMenu

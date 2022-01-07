import Layout from '../../../components/templates/Layout.tsx'
import SubTitle from '../../../components/atoms/SubTitle'
import PageBackButton from '../../../components/atoms/PageBackButton'
import useToday from '../../../hooks/useToday'
import CalcInput from '../../../components/atoms/CalcInput'

function InputCalc() {
  const { today } = useToday()
  return (
    <Layout title={'Home Calc | Input'} appName={'Home Calc App'}>
      <SubTitle title='Input Calc' />
      <div className='flex flex-col p-3 my-14'>
        <CalcInput type='date' defaultValue={today} />
        {/* variable */}
        <select className='w-full bg-blue-100 p-5 form-select appearance-none'>
          <option>Select calc type</option>
          <option>aaaa</option>
          <option>bbbb</option>
          <option>cccc</option>
        </select>
        <CalcInput type='number' placeholder='Price' />
        <CalcInput type='text' placeholder='etc.' />
      </div>

      {/* back */}
      <PageBackButton pagePath='/homecalc/input' />
    </Layout>
  )
}

export default InputCalc

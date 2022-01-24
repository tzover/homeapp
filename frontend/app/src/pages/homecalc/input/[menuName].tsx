/* eslint-disable no-case-declarations */
import Layout from '../../../components/templates/Layout.tsx'
import SubTitle from '../../../components/atoms/SubTitle'
import ButtonActionContainer from '../../../components/templates/ButtonActionContainer'
import useInputCalcData from '../../../hooks/useInputCalcData'
import PageBackButton from '../../../components/atoms/PageBackButton'
import CalcSendButton from '../../../components/atoms/CalcSendButton'
import { inputCalcSelectOption } from '../../../contexts/AppBasicContext'
import { useCallback } from 'react'

interface Props {
  msg: string
}

function InputCalc(props: Props) {
  const { msg = 'income' } = props
  const {
    today,
    datetime,
    type,
    price,
    etcTxt,
    changeDatetime,
    changeType,
    changePrice,
    changeEtc,
  } = useInputCalcData()

  const { income, saving, fixedCost, variableCost, yuz, etc } =
    inputCalcSelectOption

  const inputStyle = 'w-full bg-blue-100 p-5 text-xl md:text-2xl lg:text-3xl'

  const renderOptions = useCallback(() => {
    switch (msg) {
      case 'income':
        const incomeOptions = income.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))
        return incomeOptions
      case 'saving':
        const savingOptions = saving.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))
        return savingOptions
      case 'fixed-cost':
        const fcOptions = fixedCost.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))
        return fcOptions
      case 'variable-cost':
        const vcOptions = variableCost.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))
        return vcOptions
      case 'yuz':
        const yuzOptions = yuz.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))
        return yuzOptions
      case 'etc':
        const etcOptions = etc.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))
        return etcOptions
      default:
        break
    }
  }, [msg])

  return (
    <Layout title={'Home Calc | Input'} appName={'Home Calc App'}>
      <SubTitle title='Input Calc' />
      <div className='flex flex-col p-3 my-14'>
        <input
          type='date'
          defaultValue={today}
          onChange={(e) => changeDatetime(e.target.value)}
          className={inputStyle}
        />
        <select
          onChange={(e) => changeType(e.target.value)}
          className='w-full bg-blue-100 p-5 form-select appearance-none'
        >
          <option>Select calc type</option>
          {renderOptions()}
        </select>
        <input
          type='number'
          placeholder='Price'
          onChange={(e) => changePrice(Number(e.target.value))}
          className={inputStyle}
        />
        <input
          type='text'
          placeholder='etc.'
          onChange={(e) => changeEtc(e.target.value)}
          className={inputStyle}
        />
      </div>

      <ButtonActionContainer isForm={true}>
        <PageBackButton pagePath='/homecalc/input' />
        <CalcSendButton
          datetime={datetime}
          selectType={type}
          price={price}
          etc={etcTxt}
        />
      </ButtonActionContainer>
    </Layout>
  )
}

export default InputCalc

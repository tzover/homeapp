import { useCallback, useEffect, useState } from 'react'
import useToday from './useToday'

function useInputCalcData() {
  const { today } = useToday()

  const [datetime, setDatetime] = useState(today)
  const [type, setType] = useState('')
  const [price, setPrice] = useState(0)
  const [etcTxt, setEtcTxt] = useState('')

  const changeDatetime = useCallback((datetimeStr: string) => {
    setDatetime(datetimeStr)
  }, [])
  const changeType = useCallback((typeStr: string) => {
    console.log('change')
    setType(typeStr)
  }, [])
  const changePrice = useCallback((priceNum: number) => {
    setPrice(priceNum)
  }, [])

  const changeEtc = useCallback((etcStr: string) => {
    setEtcTxt(etcStr)
  }, [])

  useEffect(() => {
    changeDatetime(today)
  }, [today])

  return {
    today,
    datetime,
    type,
    price,
    etcTxt,
    changeDatetime,
    changeType,
    changePrice,
    changeEtc,
  }
}

export default useInputCalcData

import { useCallback, useEffect, useState } from 'react'

function useToday() {
  const [today, setToday] = useState('')

  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const formatToday = useCallback((num: string, digit: number) => {
    num += ''
    if (num.length < digit) num = '0' + num
    return num
  }, [])

  useEffect(() => {
    const yyyy = formatToday(String(year), 4)
    const mm = formatToday(String(month), 2)
    const dd = formatToday(String(day), 2)

    setToday(yyyy + '-' + mm + '-' + dd)
  }, [])

  return { today }
}

export default useToday

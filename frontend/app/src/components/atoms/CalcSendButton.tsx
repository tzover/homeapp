import { useCallback } from 'react'

interface Props {
  datetime: string
  selectType: string
  price: number
  etc: string
}

function CalcSendButton(props: Props) {
  const { datetime, selectType, price, etc } = props

  const sendData = [datetime, selectType, price, etc]

  const sendCalcData = useCallback(() => {
    console.log('test', sendData)
  }, [datetime, selectType, price, etc])

  return (
    <button
      type='button'
      className='bg-blue-100 rounded-full w-20 h-20 hover:bg-blue-300 md:w-24 md:h-24 md:text-xl'
      onClick={sendCalcData}
    >
      send
    </button>
  )
}

export default CalcSendButton

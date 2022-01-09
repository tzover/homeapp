import { ReactNode } from 'react'

interface Props {
  isForm: boolean
  children: ReactNode
}

function ButtonActionContainer(props: Props) {
  const { isForm, children } = props

  const renderContainer = (bool: boolean) => {
    if (bool) {
      return <div className='flex justify-between py-5 md:p-10'>{children}</div>
    }
    return <div className='text-left py-5 md:p-10'>{children}</div>
  }
  return renderContainer(isForm)
}

export default ButtonActionContainer

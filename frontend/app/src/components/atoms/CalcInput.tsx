interface Props {
  type: string
  placeholder?: string
  defaultValue?: string
}
function CalcInput(props: Props) {
  const { type, placeholder, defaultValue } = props
  return (
    <input
      className='w-full bg-blue-100 p-5'
      type={type}
      placeholder={placeholder}
      defaultValue={defaultValue}
    />
  )
}

export default CalcInput

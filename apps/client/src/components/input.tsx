import * as React from 'react'
import { useNavigation } from 'react-router-dom'

export function Input({
  placeholder = 'Enter Todo',
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement>) {
  const ref = React.useRef<HTMLInputElement | null>(null)
  const navigation = useNavigation()

  React.useEffect(() => {
    if (ref.current) {
      ref.current.focus()
    }
  }, [])

  React.useEffect(() => {
    if (ref.current && navigation.state === 'submitting') {
      ref.current.value = ''
    }
  }, [navigation.state])

  return (
    <input
      ref={ref}
      {...rest}
      placeholder={placeholder}
      className='w-full border-b-2 border-b-gray-700 py-2 px-4 font-mono text-2xl text-gray-700 focus:outline-none focus-visible:border-b-gray-900'
    />
  )
}

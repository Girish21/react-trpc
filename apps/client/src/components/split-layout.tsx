import * as React from 'react'

export const SplitLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className='grid grid-cols-2 gap-4'>{children}</div>
}

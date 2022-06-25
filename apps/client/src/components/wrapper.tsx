export function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className='mx-auto mt-6 w-[min(60ch,100vw-2rem)] flex-1'>
      {children}
    </div>
  )
}

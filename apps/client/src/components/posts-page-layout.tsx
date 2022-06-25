export const PostPageLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <section className='mx-auto w-[min(75ch,100vw-2rem)] flex-1'>
      {children}
    </section>
  )
}

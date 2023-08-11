import { FC } from 'react'

const Wrapper:FC<{children:React.ReactNode}>= ({children}) => {
  return (
    <div className='max-w-[90rem] mx-auto px-4 md:px-10'>
        {children}
    </div>
  )
}

export default Wrapper
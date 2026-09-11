import React from 'react'
import ShortnerPage from './features/urlShortener/ui/pages/ShortnerPage'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full gap-4'>
      <ShortnerPage/>
    </div>
  )
}

export default App
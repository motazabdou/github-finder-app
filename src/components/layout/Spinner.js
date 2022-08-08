import React from 'react'
import loadingSpinner from './assets/spinner.svg'

const Spinner = () => {
  return (
    <div className='w-100 mt-20'>
        <img width={180} className='text-center mx-auto' src={loadingSpinner} alt='Loading..' />
    </div>
  )
}

export default Spinner
import React, { useContext } from "react";
import AlertContext from "../../contexts/alert/AlertContext";
import '../../index.css'

const Alert = () => {
  const { alert } = useContext(AlertContext);

  return (
    <div
      className={`grid grid-cols-1 xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-4 mb-4 text-center`}
      style={{ visibility: alert ? 'visible' : 'hidden' }}
    >
      <div className='alert alert-error'>
        <div>
          <svg
            fill='none'
            viewBox='0 0 24 24'
            className='w-6 h-6 stroke-current mr-3 text-center'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'
            ></path>
          </svg>
          <strong className="text-center">{alert?.message}</strong>
        </div>
      </div>
    </div>
  )
};

export default Alert;

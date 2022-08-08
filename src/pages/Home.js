import React, {useContext} from 'react'
import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'
import Alert from '../components/layout/Alert'
import { FaGithub } from 'react-icons/fa'

const Home = () => {

  return (
    <>
      <div className='grid grid-rows-2 justify-items-center'>
        <FaGithub className='text-center text-7xl' />
        <h1 className='text-center mb-1 mt-3 text-4xl heading'>Search Github Users</h1>
      </div>
      <Alert />
      <UserSearch />
      <UserResults />
    </>
  )
}

export default Home
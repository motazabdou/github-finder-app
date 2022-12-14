import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const UserItem = ({user: {login, avatar_url}}) => {
  return (
    <div className='card compact side bg-gray-700 hover:bg-gray-800 backdrop-blur-sm duration-300'>
        <div className='flex-row items-center space-x-4 card-body'>
            <div>
                <div className='avatar'>
                    <div className='rounded-full shadow w-14 h-14'>
                        <img src={avatar_url} alt="Profile" />
                    </div>
                </div>
            </div>

            <div>
                <h2 className='card-title'>{login}</h2>
                <Link className='text-base-content text-opacity-40 hover:text-opacity-60 hover:scale-110 duration-300' 
                to={`/user/${login}`}>
                    Visit Profile
                </Link>
            </div>
        </div>
    </div>
  )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem
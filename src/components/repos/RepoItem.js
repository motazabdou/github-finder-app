import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import {FaEye, FaLink, FaInfo, FaStar, FaUtensils} from 'react-icons/fa'

const RepoItem = ({repo}) => {

  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count
  } = repo;

  console.log(repo)
  return (
    <div className='mb-2 rounded-md card bg-base-300 hover:bg-gray-900'>
      <div className='card-body'>
        <h3 className='mb-2 text-xl font-semibold'>
          <a 
          target="_blank"
          href={html_url}>
            <FaLink className='inline mr-1' /> {name}
          </a>
        </h3>
        <p className='mb-3'>{description}</p>
        <div>
          <div className='mr-3 badge badge-info badge-lg'>
            <FaEye className='mr-2' /> {watchers_count} 
          </div>
          <div className='mr-3 badge badge-success badge-lg'>
            <FaStar className='mr-2' /> {stargazers_count} 
          </div>
          <div className='mr-3 badge badge-error badge-lg'>
            <FaInfo className='mr-2' /> {open_issues} 
          </div>
          <div className='mr-3 badge badge-warning badge-lg'>
            <FaUtensils className='mr-2' /> {forks} 
          </div>
        </div>
      </div>
    </div>
  )
}

RepoItem.propType = {
  repo: PropTypes.object.isRequired
}

export default RepoItem
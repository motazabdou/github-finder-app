import React from 'react'
import RepoItem from './RepoItem';
import PropTypes from 'prop-types';

const ReposList = ({repos}) => {

  console.log(repos)

  return (
    <div className='rounded-lg shadow-lg card-lg bg-base-200'>
      <div className='card-body'>
        <h2 className='text-3xl my-4 font-bold card-title'>Latest Repositories</h2>
        {repos.map((repo) => (
          <RepoItem repo={repo} key={repo.id} />
        ))}
      </div>
    </div>
  )
}

ReposList.propTypes = {
  repos: PropTypes.array.isRequired
}

export default ReposList
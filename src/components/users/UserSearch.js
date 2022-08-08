import React, { useState, useContext } from "react";
import {FaSearch} from 'react-icons/fa'
import GithubContext from "../../contexts/github/GithubContext";
import AlertContext from "../../contexts/alert/AlertContext";

const UserSearch = () => {
  const [text, setText] = useState("");
  const { users, searchUsers, clearUsers } = useContext(GithubContext);
  const {setAlert} = useContext(AlertContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //validation
    if (text === "") {
      setAlert("Please Enter Search Query", 'error');
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div
      className="grid grid-cols-1 xl:grid-cols-1 
    lg:grid-cols-1 md: grid-cols-1 mb-4 gap-8 items-center"
    >
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                value={text}
                onChange={handleChange}
              />

              <button
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg btn-secondary"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="grid items-center">
        {users.length > 0 && (
          <button onClick={clearUsers} className="btn btn-lg btn-ghost">
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default UserSearch;

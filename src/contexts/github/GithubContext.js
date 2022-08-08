import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  //useReducer takes reducer and initial state, and returns an array containing state,
  // and the dispatch method that will dispatch an action into the reducer
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //Get Search results
  const searchUsers = async (text) => {
    const params = new URLSearchParams({
      q: text,
    });

    setLoading();
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`);
    const { items } = await response.json();

    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  // Get single user
  const getSingleUser = async (login) => {
    setLoading();
    const response = await fetch(`${GITHUB_URL}/users/${login}`);

    if (response.status === 404) {
      //redirect to notFound component
      window.location = "/notfound";
    } else {
      const data = await response.json();

      dispatch({
        type: "GET_SINGLE_USER",
        payload: data,
      });    }
  };

  const getUserRepos = async (login) => {
    setLoading();
    const params = new URLSearchParams({
      sort: "created",
      per_page: 10
    });
    const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`);
    const data = await response.json();

    dispatch({
      type: "GET_REPOS",
      payload: data,
    });
  };

  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };

  //SET_LOADING function
  const setLoading = () => {
    dispatch({
      type: "SET_LOADING",
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getSingleUser,
        getUserRepos
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;

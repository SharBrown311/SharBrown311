import React, { useState } from "react";
import axios from "axios";

export const UserContext = React.createContext();


const userAxios = axios.create();

userAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default function UserProvider(props) {
  const initState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "",
    issues: [],
    errMsg: ""
  };

  const [userState, setUserState] = useState(initState);


//axios functions
function signup(credentials){
  axios.post("/auth/signup", credentials)
  .then(res => {
    const {user, token} = res.data
    localStorage.setItem("token", token)
    localStorage.setItem("user", JSON.stringify(user))
    setUserState(prev => ({
      ...prev, 
      user, 
      token
    }))
    localStorage.setItem("userState", userState)
  })
  .catch(err => handleAuthErr(err.response.data.errMsg))
}

  //Login
  function login(credentials) {
    axios
      .post("/auth/login", credentials)
      .then((res) => {
        const { user, token } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        getUserIssues();
        setUserState((prevUserState) => ({
          ...prevUserState,
          user,
          token,
        }));
      })
      .catch((err) => handleAuthErr(err.response.data.errMsg));
  }

  //Logout -Resets the state
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUserState({
      user: {},
      token: "",
      issues: [],
    });
  }

  //Get User's Issues
  function getUserIssues(){
    userAxios.get("/api/issue/user")
      .then(res => {
        setUserState(prevState => ({
          ...prevState, 
          issues: res.data
        }))
      })
      .catch(err => console.log(err))
      }

  //Display Error Message to the User
  function handleAuthErr(errMsg) {
    setUserState((prevState) => ({
      ...prevState,
      errMsg,
    }));
  }

  //Reset Auth Error
  function resetAuthError() {
    setUserState((prevState) => ({
      ...prevState,
      errMsg: "",
    }));
  }

  //Add Issue
  function addIssue(newIssue) {
    userAxios
      .post("/api/issue", newIssue)
      .then((res) => {
        setUserState((prevState) => ({
          ...prevState,
          issues: [...prevState.issues, res.data],
        }));
        const newIssue = res.data;
        setPublicIssues((prevState) => [...prevState, newIssue]);
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  //Add Comment
  function addComment(issueId, newComment) {
    userAxios
      .put(`/api/issue/comment/${issueId}`, newComment)
      .then((res) => console.log(res.data));
    console.log(issueId);

  }

  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout,
        addIssue,
        resetAuthError,
        addComment,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

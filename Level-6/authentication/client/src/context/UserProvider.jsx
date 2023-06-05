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
    comments: [],
    errMsg: ""
  };



  const [userState, setUserState] = useState(initState);


  // const userId = user._id
//axios functions
//works
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
  //works
  function login(credentials) {
    axios
      .post("/auth/login", credentials)
      .then((res) => {
        const { user, token } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setUserState((prevUserState) => ({
          ...prevUserState,
          user,
          token,
        }));
      })
      .catch((err) => handleAuthErr(err.response.data.errMsg));
  }

  //Logout -Resets the state
  //works
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUserState({
      user: {},
      token: ""
    });
  }

  //Get User's Issues
  //works
  function getUserIssues() {
     userAxios.get(`/api/issue/user`)
        .then(res => {
            setUserState(prevState => ({
                    ...prevState,
                    issues: res.data, 
                
            }))
        })
        .catch(err => console.log(err))
}

//get all issues
//works
function getPublicIssues(){
  userAxios.get("/api/issue")
  .then(res => {
      setUserState(prevState => ({
          ...prevState,
          issues: res.data, 
          comments: res.data
    }))
})
.catch(err => console.log(err.response.data.errMsg))
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
  //works
  function addIssue(newIssue) {
    userAxios.post("/api/issue", newIssue)
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                issues: [...prevState.issues, res.data]
            }))
        })
        .catch(err => console.log(err))
}


  //Add Comment
  function addComment(issueId, newComment) {
    userAxios
      .post(`/api/issue/comment/${issueId}`, newComment)
      .then(res => {
        setUserState(prevState => ({
          ...prevState, 
          comments: [...prevState.comments, res.data]
        }))
      })
      .catch(err => console.log)
  }
//upvote
  function upVotes(issueId){
    userAxios.put(`/api/issue/upvote/${issueId}`)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
    navigate("/public")
    getAllIssues()
  }

  //downvote
  function downVotes(issueId){
  userAxios.put(`/api/issue/downvote/${issueId}`)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
    navigate("/public")
    getAllIssues()
}


const deleteIssue = (issueId) => {
  userAxios.delete(`/api/issue/${issueId}`)
  .then(res => {
    setUserState(prev => prev.filter(issue => issue._id !== issueId))
  })
  .catch(err => console.log(err))
}



  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout,
        addIssue,
        deleteIssue,
        resetAuthError,
        addComment,
        getUserIssues,
        getPublicIssues,
        upVotes,
        downVotes
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
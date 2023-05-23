//manages the authentication and user functionality of the application
import React, { useState} from "react";
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
    user: {},
    token: ("token") || "",
    issues: [],
    errMsg: ""
  }
  
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
    axios.post("/auth/login", credentials)
      .then(res => {
        const { user, token } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setUserState(prevState => ({
          ...prevState,
          user,
          token,
        }));
      })
      .then(() => getUserIssues)
      .catch((err) => handleAuthErr(err.response.data.errMsg));
  }

  //Logout -Resets the state
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUserState({
      user: {},
      token: ""
    });
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


    function getIssues(){
      userAxios.get("/api/issue")
      .then(res => {
        setUserState(prevState => {
          return {
            ...prevState, 
            issues: res.data, 
            comments: res.data
          }
        })
      })
      .catch(err => console.log(err.response.data.errMsg))
    }


    function getUserIssues() {
      return userAxios.get("/api/issue/user")
          .then(res => {
              console.log(userState)
              setUserState(prevState => {
                  return {
                      ...prevState,
                      issues: res.data,
                      comments: res.data
                  }
              })
          })

          .catch(err => console.log(err.response.data.errMsg))
  }

    function addIssue(newIssue){
      userAxios.post("/api/issue", newIssue)
      .then(res => {
        setUserState(prevState => ({
          ...prevState, 
          issues: [...prevState.issues, res.data]
        }))
      })
    }

    
    function editIssue(updates, issueId) {
      userAxios.put(`/api/issue/${issueId}`, updates)
          .then(res => {
              setUserState(prevState => ({
                  ...prevState,
                  issues: prevState.issues.map(issue => issue._id !== issueId ? issue : res.data)
              }))
          })
          .catch(err => console.log(err.response.data.errMsg))
  }

  function deleteIssue(issueId) {
    userAxios.delete(`/api/issue/${issueId}`)
        .then(res => {
            console.log(res)
            console.log(userState)
            setUserState(prevState => ({
                ...prevState,
                issues: prevState.issues.filter(issue => issue._id !== issueId),
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
}

function updateVoteCount(updatedIssue) {
  if (!updatedIssue) return
  const index = userState.issues.findIndex(issue => issue._id === updatedIssue._id)
  if (index === -1) {
      console.err('Issue not found')
  } else {
      setUserState(prevState => ({
          ...prevState,
          issues: [
              ...prevState.issues.slice(0, index),
              Object.assign({}, prevState.issues[index], { votes: updatedIssue.votes }), ...prevState.issues.slice(index + 1)
          ]
      }))
  }
}

function addVote(issueId) {
  userAxios.put(`/api/issue/vote/${issueId}/increment`)
      .then(res => updateVoteCount(res.data))
      .catch(err => console.log(err.response.data.errMsg))
}

function removeVote(issueId) {
  userAxios.put(`/api/issue/vote/${issueId}/decrement`)
      .then(res => updateVoteCount(res.data))
      .catch(err => console.log(err.response.data.errMsg))
}

function addComment(newComment, issueId) {
  userAxios.post(`/api/issue/comments/${issueId}`, newComment)
      .then(res => {
          setUserState(prevState => ({
              ...prevState,
              comments: [...prevState.comments, res.data]
          }))
      })
      .catch(err => console.log(err.response.data.errMsg))
}


  return(
    <UserContext.Provider value = {{
      ...userState,
        signup,
        login,
        logout,
        resetAuthError,
        getIssues, 
        getUserIssues,
        addIssue,
        removeVote, 
        addVote, 
        deleteIssue,
        editIssue,
        addComment
    }}>
    {props.children}
    </UserContext.Provider>
  )
}


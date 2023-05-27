import React, { useState, useContext } from 'react'
import { createContext } from 'react'
import axios from 'axios'
import { IssueContext } from './IssueProvider'

export const UserContext = createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});



export default function UserProvider(props){
   
    const {getPublicIssues} = useContext(IssueContext)
    console.log(getPublicIssues)
    const initState = {
      user: JSON.parse(localStorage.getItem("user")) || {},
      token: localStorage.getItem("token") || "",
      issues: [],
      errMsg: ""
  }

  const [userState, setUserState] = useState(initState)


  //signup axios function
  function signup(credentials){
    axios.post('/auth/signup', credentials)
    .then(res => {
      const {user, token} = res.data
      localStorage.setItem("token", token) //save the token data so its not lost after the browser refreshes
      localStorage.setItem("user", JSON.stringify(user))

      setUserState(prevUserState => ({
        ...prevUserState, 
        user, 
        token
      }))

    })
    .catch(err => handleAuthErr(err.response.data.errMsg))
  }

//login axios function
  function login(credentials){
    axios.post("/auth/login", credentials)
    .then(res => {
        const { user, token } = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        getpublicIssues();
        setUserState(prevUserState => ({
            ...prevUserState,
            user, 
            token
        }))
    })
    .catch(err => handleAuthErr(err.response.data.errMsg))
}



//logout user axios function
function logout(){
  localStorage.removeItem("token")
  localStorage.removeItem("user")
  setUserState({
      user: {},
      token: "",
      issues: []
  })
}


  //error handling
  function handleAuthErr(errMsg){
    setUserState(prevUserState => ({
        ...prevUserState,
        errMsg
    }))
}

// reset Auth error
function resetAuthErr(){
    setUserState(prevUserState => ({
        ...prevUserState,
        errMsg: ""
    }))
}



return (
  <UserContext.Provider
      value={{
          ...userState,
          signup,
          login,
          logout,
          resetAuthErr
      }}
  >
      {props.children}
  </UserContext.Provider>
)

  }


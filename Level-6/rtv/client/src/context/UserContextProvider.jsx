import {useState, useContext, createContext} from 'react'
import axios from "axios"


export const {UserContext} = createContext()
const axiosUser = axios.create()

axiosUser.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  config.headers.Authorization = `Bearer ${token}`
  return config
})


function UserProvider(props) {
 // const {getpublicIssues} = useContext(IssuesContext)
const initState = {
  user: JSON.parse(localStorage.getItem("user")) || {}, 
  token: localStorage.getItem("token") || "", 
  issues: [], 
  errMsg: ""
}
const [userState, setUserState] = useState(initState)

//Sign up a new User
function signup(credentials){
  axios.post("/auth/signup", credentials)
  .then(res => {
    const {user, token} = res.data
    localStorage.setItem("token", token) //save the token data and not lose it after browser refreshes
    localStorage.setItem("user", JSON.stringify(user))
    setUserState(prevUserState => ({
      ...prevUserState, user, token
    }))
  }) 
  .catch(err => handleAuthErr(err.response.data.errMsg))
}

//login the signed up user
function login(credentials){
  axios.post('/auth/login', credentials)
    .then(res => {
      const {user, token } = res.data
      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(user))
      getpublicIssues()
      setUserState(prevUserState => ({
        ...prevUserState, user, token
      }))
    })
    .catch(err => handleAuthErr(err.response.data.errMsg))
}

  //logout the logged in user
  function logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUserState({
      user: {}, 
      token: "", 
      issues: []
    })
  }

  //error handler
  function handleAuthErr(errMsg){
    setUserState(prevUserState => ({
      ...prevUserState, 
      errMsg  
    }))
  }
  //reset error handler
  function resetAuthErr(){
    setUserState(prevUserState => ({
      ...prevUserState, 
      errMsg: ""
    }))
  }

  //update the users information
  function updateUser(updatedUser){
    axiosUser.put("/api/user", updatedUser)
      .then(res => {
        localStorage.setItem("user", JSON.stringify(res.data))
        setUserState(prevUserState => ({
          ...prevUserState, 
          user: res.data
        }))
      })
      .catch(err => console.log(err))
  }
      return (
    <UserContext.Provider value = {{
      ...userState, signup, login, logout, resetAuthErr, updateUser, token, errMsg, handleAuthErr
    }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default {UserProvider, UserContext}

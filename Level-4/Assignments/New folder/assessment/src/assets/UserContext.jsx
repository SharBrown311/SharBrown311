import React, {useState, createContext} from "react";
//this returns an object with two values {Provider and Consumer}
const UserContext = createContext();

function UserProvider(props) {
  const [user, setUser] = useState("")

  const login = () => {
    setUser("vschooler22");
  };

  const logout = () => {
    setUser();
  };

  return(
      //{/*Use the Provider to make a value available to all children and grandchildren*/}
  <UserContext.Provider value = {{ user, login, logout}}>
    {props.children}
    </UserContext.Provider>
  )
  }

export { UserContext, UserProvider };
import "../index.css";
import {useContext} from "react"
import { UserContext } from "./UserContext";//Step1

function Profile(){
  const {user} = useContext(UserContext) //{/**Step 2 */}
// Use the Consumer to grab the value from context
  // Notice this component didn't get any props!
   return (
    <div className="border">
     <h2>Profile Page</h2>
      <h1> Welcome, {user}</h1> {/**Step 2 */}
      <button onClick = {() => user ? user : "USER" }>Login</button>
    </div>
  );
}

export default Profile;
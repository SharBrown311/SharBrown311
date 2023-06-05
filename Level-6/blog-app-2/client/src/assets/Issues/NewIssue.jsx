import React, {useContext} from 'react'
import { UserContext } from '../../context/UserProvider'

function NewIssue() {
  const {addIssue} = useContext(UserContext)
  const [title, setTitle] = useState("")
  return (
    <form>
      
    </form>
  )
}

export default NewIssue

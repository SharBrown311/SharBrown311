import React, {useContext} from 'react'
import { UserContext } from '../../context/UserProvider'
import { Container } from '@mui/material/Container'
import TimeLine from './Timeline'
function Home() {
  const {issues} = useContext(UserContext)
  return (
    <>
      <Container>
        <TimeLine issues = {issues} />
      </Container>
    </>
  )
}

export default Home

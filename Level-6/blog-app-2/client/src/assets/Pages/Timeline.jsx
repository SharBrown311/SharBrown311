import {List} from '@mui/material/List'
import { ListItem } from '@mui/material/ListItem'
import { Divider } from '@mui/material/Divider'
import { ListItemText } from '@mui/material/ListItemText'
import { ListItemAvatar } from '@mui/material/ListItemAvatar'
import { Avatar } from '@mui/material/Avatar'
import { ListItemSecondaryAction } from '@mui/material/ListItemSecondaryAction'
import { IconButton } from '@mui/material/IconButton'
import {DeleteIcon} from '@mui/material/icons/DeleteIcon'
import React from 'react'


function TimeLine({issues}){

  function getAvatarTitle(username){
    const names = username.split(' ')
    const letters = names?.map(name => name.charAt(0))
    return letters.join('')
  }
  return (
    <List>
    {issues?.map(issue => (
      <React.Fragment key = {issue._id}>
        <ListItem alignItems = "flex-start">
          <ListItemAvatar>
            <Avatar alt = {issue.username}>
              {getAvatarTitle(issue.username)}
            </Avatar>
          </ListItemAvatar>
          <ListItemText 
            primary = {issue.title}
            secondary = {issue.description}
          />
          <ListItemSecondaryAction>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider />
      </React.Fragment>
    ))}
    </List>
  )
}
export default TimeLine
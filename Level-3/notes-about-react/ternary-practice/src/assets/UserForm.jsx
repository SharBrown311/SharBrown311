import React, {Component} from 'react';
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'  
import Confirm from './Confirm'
import Success from './Success'

export class UserForm extends Component{
  state = {
    step: 1, 
    firstName: '', 
    lastName: '', 
    email: '', 
    occupation: 
  }
}
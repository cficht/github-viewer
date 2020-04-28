import React, { Component } from 'react';
import UserInput from '../../components/User/UserInput/UserInput.jsx';

export default class UserEnter extends Component {
  state = {
    username: ''
  }

  render() {
    return (
      <>
        <UserInput username={this.username} onUserChange={() => {}}/>
        
      </>
    );
  }
}

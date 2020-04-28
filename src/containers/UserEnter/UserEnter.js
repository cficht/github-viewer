import React, { Component } from 'react';
import UserInput from '../../components/User/UserInput/UserInput.jsx';

export default class UserEnter extends Component {
  state = {
    username: ''
  }

  handleUserChange = ({ target }) => {
    this.setState({ username: target.value });
  };

  handleUserSubmit = () => {
    
  }

  render() {
    return (
      <>
        <UserInput username={this.state.username} onUserChange={this.handleUserChange} onUserSubmit={this.handleUserSubmit}/>
      </>
    );
  }
}

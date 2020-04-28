import React, { Component } from 'react';
import UserInput from '../../components/User/UserInput/UserInput.jsx';
import UserInfo from '../../components/User/UserInfo/UserInfo.jsx';
import Repo from '../../components/Repo/Repo.jsx';
import { fetchUser } from '../../services/github.js';

export default class UserEnter extends Component {
  state = {
    username: '',
    user: {
      login: '',
      followers: 0,
      following: 0,
      html_url: ''
    },
    search: false
  }

  handleUserChange = ({ target }) => {
    this.setState({ username: target.value });
  };

  handleUserSubmit = () => {
    fetchUser(this.state.username)
      .then(user => this.setState({ user, search: true }));
  }

  render() {
    let userSearched = '';
    if(this.state.search) {
      userSearched = 
      <>
        <UserInfo {...this.state.user} /> 
        <Repo name="about-me" html_url="https://github.com/cficht/about-me"/>
      </>;
    }
    
    return (
      <>
        <UserInput username={this.state.username} onUserChange={this.handleUserChange} onUserSubmit={this.handleUserSubmit}/>
        {userSearched}
      </>
    );
  }
}

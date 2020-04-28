import React, { Component } from 'react';
import UserInput from '../../components/UserInput/UserInput.jsx';
import UserInfo from '../../components/UserInfo/UserInfo.jsx';
import Repos from '../../components/Repos/Repos.jsx';
import { fetchUser, fetchRepos } from '../../services/github.js';

export default class UserEnter extends Component {
  state = {
    username: '',
    user: {
      login: '',
      followers: 0,
      following: 0,
      html_url: ''
    },
    repos: [],
    search: false
  }

  handleUserChange = ({ target }) => {
    this.setState({ username: target.value });
  };

  handleUserSubmit = () => {
    fetchUser(this.state.username)
      .then(user => this.setState({ user }));
    fetchRepos(this.state.username)
      .then(repos => this.setState({ repos, search: true }));
  }

  render() {
    let userSearched = '';
    if(this.state.search) {
      userSearched = 
      <>
        <UserInfo {...this.state.user} /> 
        <Repos repos={this.state.repos} />
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

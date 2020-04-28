import React, { Component } from 'react';
import UserInput from '../../components/User/UserInput/UserInput.jsx';
import UserInfo from '../../components/User/UserInfo/UserInfo.jsx';
import Repos from '../../components/Repos/Repos.jsx';
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
    const repos = [
      {
        id: 233724660,
        name: 'about-me',
        html_url: 'https://github.com/cficht/about-me'
      },
      {
        id: 250081461,
        name: 'book-application',
        html_url: 'https://github.com/cficht/book-application'
      }
    ];

    if(this.state.search) {
      userSearched = 
      <>
        <UserInfo {...this.state.user} /> 
        <Repos repos={repos} />
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

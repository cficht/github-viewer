import React from 'react';
import UserEnter from '../../containers/UserEnter/UserEnter.js';
import UserInfo from '../../components/User/UserInfo/UserInfo.jsx';

export default function App() {
  const user = {
    login: 'cficht',
    html_url: 'https://github.com/cficht',
    followers: 2,
    following: 7
  };

  return (
    <>
      <UserEnter />
      <UserInfo {...user}/>
    </>
  );
 
}

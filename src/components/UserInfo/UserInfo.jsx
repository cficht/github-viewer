import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({ login, followers, following, html_url }) => (
  <>
    <h2>Username: {login}</h2>
    <p>Followers: {followers}</p>
    <p>Following: {following}</p>
    <p>URL: {html_url}</p>
  </>
);

UserInfo.propTypes = {
  login: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  html_url: PropTypes.string.isRequired
};

export default UserInfo;

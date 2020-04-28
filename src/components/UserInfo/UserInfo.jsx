import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({ login, followers, following, html_url }) => (
  <>
    <p>{login}</p>
    <p>{followers}</p>
    <p>{following}</p>
    <p>{html_url}</p>
  </>
);

UserInfo.propTypes = {
  login: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  html_url: PropTypes.string.isRequired
};

export default UserInfo;

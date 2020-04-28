import React from 'react';
import PropTypes from 'prop-types';

const UserInput = ({ username, onUserChange }) => (
  <>
    <input type="text" name="username" value={username} onChange={onUserChange} />
  </>
);

UserInput.propTypes = {
  username: PropTypes.string.isRequired,
  onUserChange: PropTypes.func.isRequired
};

export default UserInput;

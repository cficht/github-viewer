import React from 'react';
import PropTypes from 'prop-types';

const UserInput = ({ username, onUserChange, onUserSubmit }) => (
  <>
    <input type="text" name="username" value={username} onChange={onUserChange} />
    <input type="button" name="search" value="Search" onChange={onUserSubmit} />
  </>
);

UserInput.propTypes = {
  username: PropTypes.string.isRequired,
  onUserChange: PropTypes.func.isRequired,
  onUserSubmit: PropTypes.func.isRequired
};

export default UserInput;

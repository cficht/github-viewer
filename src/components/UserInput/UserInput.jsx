import React from 'react';
import PropTypes from 'prop-types';

const UserInput = ({ username, onUserChange, onUserSubmit }) => (
  <article>
    <h1>GitHub Viewer</h1>
    <input type="text" name="username" value={username} onChange={onUserChange} />
    <input type="button" name="search" value="Search" onClick={onUserSubmit} />
  </article>
);

UserInput.propTypes = {
  username: PropTypes.string.isRequired,
  onUserChange: PropTypes.func.isRequired,
  onUserSubmit: PropTypes.func.isRequired
};

export default UserInput;

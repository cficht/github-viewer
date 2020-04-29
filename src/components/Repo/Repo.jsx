import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({ name, html_url }) => (
  <li>
    <h2>{name}</h2>
    <p>{html_url}</p>
  </li>
);

Repo.propTypes = {
  name: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired
};

export default Repo;

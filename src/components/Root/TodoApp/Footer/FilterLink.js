import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FilterLink = ({ filter, children }) => (
  <Link
    to={filter === 'all' ? '' : filter}
    activestyle={{
      textDecoration: 'none',
      color: 'black',
    }}
  >
    {children}
  </Link>
);
FilterLink.propTypes = {
  filter: PropTypes.string,
  children: PropTypes.string,
};

export default FilterLink;

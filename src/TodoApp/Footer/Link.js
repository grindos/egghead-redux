import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import setVisibilityFilter from './actions';

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>;
  }
  return (
    <a
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};
Link.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.object,
  onClick: PropTypes.func,
};

const mapStateToLinkProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToLinkProps = (dispatch, ownProps) => ({
  onClick() {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

export default connect(mapStateToLinkProps, mapDispatchToLinkProps)(Link);

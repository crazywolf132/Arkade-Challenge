import React from 'react';
import PropTypes from 'prop-types';

function MenuItem(props) {
  const {title} = props;
  return (
    <li>
      <span>{title}</span>
    </li>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MenuItem;

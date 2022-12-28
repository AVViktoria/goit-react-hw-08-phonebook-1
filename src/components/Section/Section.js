import React from 'react';
import PropTypes from 'prop-types';

export default function Section({ children }) {
  return <section className="section">{children}</section>;
}

Section.propTypes = {
  children: PropTypes.node,
};

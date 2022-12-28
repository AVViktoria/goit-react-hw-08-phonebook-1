import PropTypes from 'prop-types';

//*    styles..//
export default function Container({ children }) {
  return <div className="container">{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

//*Node
// Anything that can be rendered: numbers, strings, elements or an array
// (or fragment) containing these types.

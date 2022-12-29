import PropTypes from 'prop-types';
import { Grid } from '@mui/material';

const Container=({ children })=> {
  return <Grid container>{children}</Grid>;
}
export default  Container;
Container.propTypes = {
  children: PropTypes.node.isRequired,
};

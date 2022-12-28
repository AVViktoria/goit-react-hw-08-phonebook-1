import { authSelectors } from '../../redux/auth';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function RestrictedRoute({
  component: Component,
  redirectTo = '/',
}) {
  const isConnect = useSelector(authSelectors.getIsLoggedIn);
  return isConnect ? <Navigate to={redirectTo} /> : <Component />;
}

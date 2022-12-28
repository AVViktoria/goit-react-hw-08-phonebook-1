import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/',
}) {
  const isConnect = useSelector(authSelectors.getIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.getIsFetchingCurrent);
  const shouldRedirect = !isRefreshing && !isConnect;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
}

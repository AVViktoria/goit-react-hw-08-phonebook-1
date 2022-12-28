import { Route, Routes } from 'react-router-dom';

//*      Components      //
import RestrictedRoute from '../components/RestrictedRoute';
import PrivateRoute from '../components/PrivateRoute';
import HomeView from 'views/HomeView';
import AppBar from 'components/AppBar';

//*      styles      //
import '../index.scss';


import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import { authOperations, authSelectors } from '../redux/auth';

//*      Lazy pages      //

const LoginView = lazy(() => import('../views/LoginView'));
const RegisterView = lazy(() => import('../views/RegisterView'));
// const HomeView = lazy(() => import('../views/HomeView'));
// const AppBar = lazy(() => import('../components/AppBar'));
const Phonebook = lazy(() => import('../components/Phonebook'));


const  App=()=> {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser(prev => !prev));
  }, [dispatch]);


  return isFetchingCurrentUser ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<HomeView />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={RegisterView}
                  redirectTo={'/register'}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  component={LoginView}
                  redirectTo={'/contacts'}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute component={Phonebook} redirectTo={'/login'} />
              }
            />
            <Route path="*" element={<LoginView />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
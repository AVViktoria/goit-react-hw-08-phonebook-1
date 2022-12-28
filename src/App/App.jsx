import { Route, Routes } from 'react-router-dom';

//*      Components      //
// import ContactList from 'components/ContactList';
// import ContactForm from 'components/ContactForm';
// import Filter from 'components/Filter';
// import Container from 'components/Container';
// import Section from 'components/Section/Section';

//*      styles      //
import '../index.scss';

//*      Auth selectors      //
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
// import { Switch } from 'react-router-dom';
import { authOperations, authSelectors } from '../redux/auth';

//*      Lazy pages      //

const LoginView = lazy(() => import('../views/LoginView'));
const RegisterView = lazy(() => import('../views/RegisterView'));
const HomeView = lazy(() => import('../views/HomeView'));
const AppBar = lazy(() => import('../components/AppBar'));
const Phonebook = lazy(() => import('../components/Phonebook'));
const UploadView = lazy(() => import('../views/UploadView'));

//*      Root      //
export default function App() {
  const dispatch = useDispatch();
  // const isFetchingCurrentUser = useSelector(authSelectors.getIsLoggedIn);
  // console.log(isFetchingCurrentUser);
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
    // dispatch(authOperations({
    //   "email": "test@teaty.com",
    //   "password": "pas12345"
    // }))
  }, [dispatch]);
  return isFetchingCurrentUser ? (
    <h1>Показываем React Skeleton</h1>
  ) : (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<HomeView />} />
            <Route
              path="/login"
              element={<LoginView />}
              redirectTo='./contacts'
            />
            <Route
              path="/register"
              element={<RegisterView />}
              redirectTo='./contacts'
            />
            <Route
              path="/contacts"
              element={<Phonebook />}
              redirectTo='./login'
            />
            <Route
              path="/upload"
              element={<UploadView />}
              redirectTo="/login"
            />
          </Route>
          <Route path="*" element={<LoginView />} />
        </Routes>
      </Suspense>
    </div>
  );
}

import { lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import '../../auth/firebaseAuth.js';
import { Toaster } from 'react-hot-toast';
import SharedLayout from '../../components/SharedLayout/SharedLayout.jsx';
import TeachersLayout from '../TeachersLayout/TeachersLayout.jsx';
import { useDispatch } from 'react-redux';
import { loadFavorites } from '../../redux/favorites/slice.js';
import { reAuthenticateUser } from '../../redux/auth/operations.js';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const TeachersPage = lazy(() =>
  import('../../pages/TeachersPage/TeachersPage.jsx'),
);
const FavoritesPage = lazy(() =>
  import('../../pages/FavoritesPage/FavoritesPage.jsx'),
);
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage.jsx'),
);

export default function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reAuthenticateUser());
    dispatch(loadFavorites());
    if (location.pathname === '/teachers') {
      document.body.style.backgroundColor = '#f8f8f8';
    } else if (location.pathname === '/favorites') {
      document.body.style.backgroundColor = '#f8f8f8';
    } else {
      document.body.style.backgroundColor = '#ffffff';
    }
  }, [location, dispatch]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <SharedLayout>
              <HomePage />
            </SharedLayout>
          }
        />
        <Route
          path="/teachers"
          element={
            <TeachersLayout>
              <TeachersPage />
            </TeachersLayout>
          }
        />
        <Route
          path="/favorites"
          element={
            <TeachersLayout>
              <FavoritesPage />
            </TeachersLayout>
          }
        />
        <Route
          path="*"
          element={
            <SharedLayout>
              <NotFoundPage />
            </SharedLayout>
          }
        />
        <Route
          path="/favorites"
          element={
            <TeachersLayout>
              <FavoritesPage />
            </TeachersLayout>
          }
        />
      </Routes>
      <Toaster />
    </>
  );
}

import { Suspense } from 'react';
import Loader from '../Loader/Loader.jsx';
import css from './TeachersLayout.module.css';

export default function TeachersLayout({ children }) {
  return (
    <Suspense fallback={<Loader />}>
      <main className={css.container}>{children}</main>
    </Suspense>
  );
}

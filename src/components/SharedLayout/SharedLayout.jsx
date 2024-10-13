import { Suspense } from 'react';

import Loader from '../Loader/Loader.jsx';
import css from './SharedLayout.module.css';

export default function SharedLayout({ children }) {
  return (
    <Suspense fallback={<Loader />}>
      <main className={css.container}> {children} </main>
    </Suspense>
  );
}

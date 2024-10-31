import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsError, selectIsLoading } from '../../redux/auth/selectors.js';
import { selectFilteredTeachers } from '../../redux/filters/selectors.js';
import { fetchTeachers } from '../../redux/teachers/operations.js';
import Loader from '../../components/Loader/Loader.jsx';
import Error from '../../components/Error/Error.jsx';
import TeachersList from '../../components/TeachersList/TeachersList.jsx';
import Filters from '../../components/Filters/Filters.jsx';
import HomeNavigate from '../../components/HomeNavigate/HomeNavigate.jsx';
import Button from '../../components/Button/Button.jsx';
import css from './TeachersPage.module.css';

export default function TeachersPage() {
  const dispatch = useDispatch();
  const filteredTeachers = useSelector(selectFilteredTeachers);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  const [visibleCount, setVisibleCount] = useState(4);
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchTeachers());
      setIsDataFetched(true);
    };

    fetchData();
  }, [dispatch]);

  const handleClick = () => {
    setVisibleCount(prevCount => prevCount + 4);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  const displayedTeachers = filteredTeachers.slice(0, visibleCount);

  if (isDataFetched && filteredTeachers.length === 0) {
    return (
      <p className={css.notFoundText}>
        No teachers matching your preferences were found.
      </p>
    );
  }

  return (
    <div className={css.teachersPage}>
      {displayedTeachers.length > 0 && (
        <>
          <div className={css.wrapper}>
            <Filters />
            <HomeNavigate />
          </div>
          <TeachersList teachers={displayedTeachers} />
        </>
      )}
      {visibleCount < filteredTeachers.length && (
        <div onClick={handleClick} className={css.btnWrapper}>
          <Button description="Load more" variant="teachers" />
        </div>
      )}
    </div>
  );
}

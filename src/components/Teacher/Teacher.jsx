import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import clsx from 'clsx';
import { IoIosStar } from 'react-icons/io';
import { FaRegHeart, FaHeart, FaCircle } from 'react-icons/fa';
import { IoBookOutline } from 'react-icons/io5';
import { useModal } from '../../hooks/useModal.js';
import BookModal from '../BookModal/BookModal.jsx';
import LogInModal from '../LogInModal/LogInModal.jsx';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';
import { toggleFavorite } from '../../redux/favorites/slice.js';
import { selectFavorites } from '../../redux/favorites/selectors.js';
import Button from '../Button/Button.jsx';
import css from './Teacher.module.css';

export default function Teacher({ teacher }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const { openSpecificModal, closeModal, isModalOpen } = useModal();

  const handleToggle = () => {
    setIsExpanded(prevState => !prevState);
  };

  const isActive = useSelector(state =>
    selectFavorites(state).some(favorite => favorite.id === teacher.id),
  );

  const handleFavorite = () => {
    if (!isLoggedIn) {
      openSpecificModal('login');
      return;
    }

    dispatch(toggleFavorite(teacher));

    if (!isActive) {
      toast.custom(t => (
        <div className={css.toastContainer}>
          <span className={css.spanToast}>
            You can see your favorite teachers on the{' '}
          </span>
          <Link
            to="/favorites"
            className={css.link}
            onClick={() => toast.dismiss(t.id)}
          >
            favorites page!
          </Link>
        </div>
      ));
    }
  };

  return (
    <>
      <div className={css.avatarWrapper}>
        <img
          src={teacher.avatar_url}
          alt="teacher avatar"
          className={css.avatar}
        />
        <FaCircle className={css.onlineIcon} />
      </div>
      <button
        onClick={handleFavorite}
        className={clsx(css.favoriteBtn, {
          [css.hideFavoriteBtn]:
            isModalOpen('login') || isModalOpen('bookTrial'),
        })}
        aria-label={isActive ? 'Remove from favorites' : 'Add to favorites'}
      >
        {isActive ? (
          <FaHeart className={css.activeIcon} />
        ) : (
          <FaRegHeart className={css.favoriteIcon} />
        )}
      </button>
      <div className={css.firstWrapper}>
        <div className={css.generalInfoWrapper}>
          <div className={css.aboutWrapper}>
            <p className={css.desc}>Languages</p>
            <h3 className={css.fullnameTitle}>
              {teacher.name} {teacher.surname}
            </h3>
          </div>
        </div>
        <div className={css.infoWrapper}>
          <div className={css.lessonsWrapper}>
            <IoBookOutline />
            <span className={css.lessonsSpan}>Lessons online</span>
          </div>
          <div className={css.lessonsWrapper}>
            <span className={css.infoSpan}>
              Lessons done: {teacher.lessons_done}
            </span>
          </div>
          <div className={css.lessonsWrapper}>
            <IoIosStar className={css.ratingStar} />
            <span className={css.lessonsSpan}>Rating: {teacher.rating}</span>
          </div>
          <div>
            <span className={css.lessonsSpan}>Price / 1 hour: </span>
            <span className={css.priceSpan}>{teacher.price_per_hour}$</span>
          </div>
        </div>
      </div>
      <div className={css.secondGeneralWrapper}>
        <div className={css.wrapperDesc}>
          <p className={css.desc}>
            Speaks:
            <span className={css.descSpan}>
              {' '}
              {teacher.languages.join(', ')}
            </span>
          </p>
          <p className={css.descInfo}>
            <span className={css.desc}>Lesson info: </span>
            {teacher.lesson_info}
          </p>
          <p className={css.descInfo}>
            <span className={css.desc}>Conditions: </span>
            {teacher.conditions.join(' ')}
          </p>
        </div>
        <div>
          <span onClick={handleToggle} className={css.descSpan}>
            {isExpanded ? 'Read less' : 'Read more'}
          </span>
          {isExpanded && (
            <div>
              <p className={css.experienceDesc}>{teacher.experience}</p>
              {teacher.reviews.slice(0, 2).map((review, index) => (
                <div key={index} className={css.generalReviewerWrapper}>
                  <div className={css.reviewerWrapper}>
                    <div className={css.reviewerAvatar}>
                      {review.reviewer_name && review.reviewer_name[0]}
                    </div>
                    <div className={css.reviewInfoWrapper}>
                      <span className={css.desc}>{review.reviewer_name}</span>
                      <div className={css.reviewerSecondWrapper}>
                        <IoIosStar className={css.ratingStar} />
                        <span className={css.ratingSpan}>
                          {review.reviewer_rating}.0
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className={css.descInfo}>{review.comment}</span>
                </div>
              ))}
            </div>
          )}
          <ul className={css.levelsList}>
            {Object.keys(teacher.levels).map(key => (
              <li key={key} className={css.levelsListItem}>
                <span>#{teacher.levels[key]}</span>
              </li>
            ))}
          </ul>
          <div className={css.btnWrapper}>
            {isExpanded && (
              <Button
                description="Book trial lesson"
                variant="bookTrial"
                type="button"
                onClick={() => {
                  openSpecificModal('bookTrial');
                }}
              />
            )}
          </div>
        </div>
      </div>
      <LogInModal isOpen={isModalOpen('login')} onRequestClose={closeModal} />
      <BookModal
        isOpen={isModalOpen('bookTrial')}
        onRequestClose={closeModal}
        avatarUrl={teacher.avatar_url}
        fullName={`${teacher.name} ${teacher.surname}`}
      />
    </>
  );
}

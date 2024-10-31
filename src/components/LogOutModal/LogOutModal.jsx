import Modal from 'react-modal';
import { BsXLg } from 'react-icons/bs';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

import { logOutUser } from '../../redux/auth/operations.js';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';
import css from './LogOutModal.module.css';
import Button from '../Button/Button.jsx';

Modal.setAppElement('#root');

export default function LogOutModal({ isOpen, onRequestClose }) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleClick = async () => {
    if (!isLoggedIn) {
      toast.error('You are not logged in!');
      return;
    }

    try {
      await dispatch(logOutUser()).unwrap();
      toast.success('Logged out successfully!');
      onRequestClose();
    } catch (error) {
      toast.error('Logout failed! Please try again.');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="User Log Out"
      className={css.modal}
      overlayClassName={css.overlay}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <button className={css.closeButton} onClick={onRequestClose}>
        <BsXLg className={css.closeIcon} />
      </button>
      <h2 className={css.logOutTitle}>Log Out</h2>
      <p className={css.logOutDesc}>Do you really want to leave?</p>
      <div className={css.buttonsWrapper}>
        <div className={css.btnWrapper}>
          <Button
            onClick={handleClick}
            description="Log Out"
            variant="logout"
            type="submit"
          />
        </div>
        <div className={css.btnWrapper}>
          <Button
            onClick={onRequestClose}
            description="Cancel"
            variant="cancel"
          />
        </div>
      </div>
    </Modal>
  );
}

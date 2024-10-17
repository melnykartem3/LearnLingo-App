import Modal from 'react-modal';
import { BsXLg } from 'react-icons/bs';

import { logOutUser } from '../../redux/auth/operations.js';
import css from './LogOutModal.module.css';
import toast from 'react-hot-toast';

Modal.setAppElement('#root');

export default function LogOutModal({ isOpen, onRequestClose }) {
    
  const handleClick = async () => {
    try {
      await logOutUser();
      toast.success('Logged out successfully!');
      onRequestClose();
    } catch (error) {
      toast.error('Logout failed! Please try again.')
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
        <button
          type="submit"
          className={css.submitButton}
          onClick={handleClick}
        >
          Log Out
        </button>
        <button
          type="button"
          className={css.cancelButton}
          onClick={onRequestClose}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
}

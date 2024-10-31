import { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { BsXLg } from 'react-icons/bs';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import toast from 'react-hot-toast';
import { logInUser } from '../../redux/auth/operations.js';
import Button from '../Button/Button.jsx';
import css from './LogInModal.module.css';

Modal.setAppElement('#root');

const logInSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format!')
    .required('Email is required!'),
  password: yup
    .string()
    .min(6, 'Password must contain at least 6 characters!')
    .required('Password is required!'),
});

export default function LogInModal({ isOpen, onRequestClose }) {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(logInSchema),
  });

  const onSubmit = async data => {
    try {
      await dispatch(
        logInUser({ email: data.email, password: data.password }),
      ).unwrap();
      toast.success('Logged in successfully!');
      onRequestClose();
      reset();
    } catch (error) {
      toast.error('The user does not exist or your password is incorrect!');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="User Log in"
      className={css.modal}
      overlayClassName={css.overlay}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <button className={css.closeButton} onClick={onRequestClose}>
        <BsXLg className={css.closeIcon} />
      </button>
      <h2 className={css.logInTitle}>Log In</h2>
      <p className={css.logInDesc}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={css.inputsWrapper}>
          <div className={css.inputWrapper}>
            <label>
              <input
                type="email"
                placeholder="Email"
                {...register('email')}
                className={css.logInInput}
              />
              {errors.email && (
                <p className={css.error}>{errors.email.message}</p>
              )}
            </label>
          </div>
          <div className={css.inputWrapper}>
            <div className={css.passwordWrapper}>
              <label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  {...register('password')}
                  className={css.logInInput}
                />
              </label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={css.eyeButton}
              >
                {showPassword ? (
                  <FiEyeOff className={css.eyeIcon} />
                ) : (
                  <FiEye className={css.eyeIcon} />
                )}
              </button>
            </div>
            {errors.password && (
              <p className={css.error}>{errors.password.message}</p>
            )}
          </div>
        </div>
        <div className={css.btnWrapper}>
          <Button description="Log in" variant="modal" type="submit" />
        </div>
      </form>
    </Modal>
  );
}

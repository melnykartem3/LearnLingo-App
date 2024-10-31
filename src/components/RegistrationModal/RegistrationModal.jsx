import { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { BsXLg } from 'react-icons/bs';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { registerUser } from '../../redux/auth/operations.js';
import css from './RegistrationModal.module.css';
import Button from '../Button/Button.jsx';

Modal.setAppElement('#root');

const registrationSchema = yup.object().shape({
  name: yup.string().required('Name is required!'),
  email: yup
    .string()
    .email('Invalid email format!')
    .required('Email is required!'),
  password: yup
    .string()
    .min(6, 'Password must contain at least 6 characters!')
    .required('Password is required!'),
});

export default function RegistrationModal({ isOpen, onRequestClose }) {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit = async data => {
    try {
      await dispatch(
        registerUser({
          name: data.name,
          email: data.email,
          password: data.password,
        }),
      ).unwrap();

      toast.success('User registered successfully');
      onRequestClose();
      reset();
    } catch (error) {
      toast.error('This email is already in use!');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="User Registration"
      className={css.modal}
      overlayClassName={css.overlay}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <button className={css.closeButton} onClick={onRequestClose}>
        <BsXLg className={css.closeIcon} />
      </button>
      <h2 className={css.registerTitle}>Registration</h2>
      <p className={css.registerDesc}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information:
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={css.inputsWrapper}>
          <div className={css.inputWrapper}>
            <label>
              <input
                type="text"
                placeholder="Name"
                {...register('name')}
                className={css.registerInput}
              />
              {errors.name && (
                <p className={css.error}>{errors.name.message}</p>
              )}
            </label>
          </div>
          <div className={css.inputWrapper}>
            <label>
              <input
                type="email"
                placeholder="Email"
                {...register('email')}
                className={css.registerInput}
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
                  className={css.registerInput}
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
          <Button description="Sign up" variant="modal" type="submit" />
        </div>
      </form>
    </Modal>
  );
}

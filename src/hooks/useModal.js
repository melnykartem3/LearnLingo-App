import { useState } from 'react';

export function useModal() {
  const [openModal, setOpenModal] = useState(null);

  const openSpecificModal = modalName => {
    setOpenModal(modalName);
  };

  const closeModal = () => {
    setOpenModal(null);
  };

  const isModalOpen = modalName => openModal === modalName;

  return {
    openSpecificModal,
    closeModal,
    isModalOpen,
  };
}

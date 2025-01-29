'use client'
import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the ModalType type
type ModalType = 'share' | 'form' | null;

// Update the ModalContextType to include the correct signature for showModal
type ModalContextType = {
  showModal: (type: ModalType) => void; 
  hideModal: () => void;
  isModalVisible: boolean;
  modalType: ModalType;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: {children: ReactNode}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(null);

  const showModal = (type: ModalType) => {
    setModalType(type);
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
    setModalType(null);
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal, isModalVisible, modalType }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

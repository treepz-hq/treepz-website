'use client'
import React, { createContext, useState, useContext, ReactNode } from "react";

type ModalContextType = {
  showModal: () => void;
  hideModal: () => void;
  isModalVisible: boolean;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: {children: ReactNode}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal, isModalVisible }}>
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

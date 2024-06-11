
'use client'
import React, { createContext, useState, useContext, ReactNode } from "react";

type ModalContextType = {
  showModal: () => void;
  hideModal: () => void;
  isModalVisible: boolean;
};

const EventModalContext = createContext<ModalContextType | undefined>(undefined);

export const EventModalProvider = ({ children }: {children: ReactNode}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  return (
    <EventModalContext.Provider value={{ showModal, hideModal, isModalVisible }}>
      {children}
    </EventModalContext.Provider>
  );
};

export const useEventModal = () => {
  const context = useContext(EventModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

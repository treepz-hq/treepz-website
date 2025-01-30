'use client';

import React, { ReactNode } from "react";
import { useModal } from "@/contexts/ModalContext";
import ShareDialog from "./shareDialog";
import DialogComponent from "./formDialog";
interface ModalComponentProps {
  children:ReactNode;
  title?:string;
}
const ModalComponent = (props:ModalComponentProps) => {
  const { isModalVisible, modalType, hideModal } = useModal();

  if (!isModalVisible) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-800 bg-opacity-75 flex justify-center items-center p-8">
     {props.children}
    </div>
  );
};

export default ModalComponent;

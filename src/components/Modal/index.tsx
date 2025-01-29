'use client';

import React from "react";
import { useModal } from "@/contexts/ModalContext";
import ShareDialog from "./shareDialog";
import DialogComponent from "./formDialog";

const ModalComponent = () => {
  const { isModalVisible, modalType, hideModal } = useModal();

  if (!isModalVisible) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-800 bg-opacity-75 flex justify-center items-center p-8">
      {/* <div className="bg-white shadow-lg rounded-2xl w-full max-w-[600px]">
        <div className="flex justify-between items-center border-b p-5 relative">
          <button
            className="absolute right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
            onClick={hideModal}
          >
            Close
          </button>
        </div>
        <div className="mt-4 max-h-[600px] overflow-y-auto flex flex-col px-8">
          {modalType === "share" && <ShareDialog />}
          {modalType === "form" && <DialogComponent />}
        </div>
      </div> */}
    </div>
  );
};

export default ModalComponent;

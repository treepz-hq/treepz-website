import React from "react";
import { X } from "lucide-react"
import XCloseIcon from '@/assets/svgs/x-icon.svg'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: any
}


const ModalComponent: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-800 bg-opacity-75 flex justify-center items-center p-8">
          <div className="bg-white shadow-lg rounded-lg w-full max-w-[600px] p-6">
            <div className="flex justify-between items-center border-b pb-5 relative">
                <p>{title}</p>
              <button
                className="absolute right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                onClick={onClose}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </button>
            </div>
            <div className="mt-4 max-h-[600px] overflow-y-auto flex flex-col">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalComponent;

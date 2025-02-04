'use client';

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import BookNowForm from "../Forms/BookNowForm";

import { useModal } from '@/contexts/ModalContext';

const DialogComponent = () => {
  const { isModalVisible, hideModal } = useModal();

  const handleModalClose = () => {
    hideModal();
  };

  return (
    <Dialog 
    open={isModalVisible} 
    onOpenChange={handleModalClose}>
        <DialogTrigger asChild>
          <Button
            variant={"outline"}
            className="relative sm:w-[156px] cursor-pointer border-gray-900 rounded-full font-bold flex items-center gap-2 group overflow-hidden"
            onClick={() => {}}
          >
            <span className="transition-transform duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center group-hover:transform group-hover:-translate-y-full">
              Get a quote
            </span>
            <span className="transition-transform duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center transform translate-y-full group-hover:translate-y-0">
              Get a quote
            </span>
          </Button>
        </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] px-0 pb-0">
        <DialogHeader className="border-b pb-10 px-10">
          <DialogTitle>Book Now</DialogTitle>
        </DialogHeader>
        <div  className="lg:px-[40px] h-[65vh]" style={{overflow:"scroll"}} >
        <BookNowForm />
        </div>
        <DialogFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DialogComponent;
'use client'
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

const DialogComponent = () => {
  return (
    <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={"outline"}
            className="relative sm:w-[156px] cursor-pointer border-gray-900 rounded-full font-bold flex items-center gap-2 group overflow-hidden"
            //onClick={() => {}}
          >
            <span className="transition-transform duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center group-hover:transform group-hover:-translate-y-full">
              Get a quote
            </span>
            <span className="transition-transform duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center transform translate-y-full group-hover:translate-y-0">
              Get a quote
            </span>
          </Button>
        </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader className="border-b pb-10">
          <DialogTitle>Book Now & Contact us</DialogTitle>
        </DialogHeader>
        <BookNowForm />
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DialogComponent;

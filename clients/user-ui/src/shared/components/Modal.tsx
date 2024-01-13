import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/ui/dialog"

interface IModalInterface extends React.HTMLAttributes<HTMLDivElement> {};

type TModalType = IModalInterface & {
  openModal: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  title: string,
  description: string,
};

const Modal = ({openModal, setOpenModal, title, description, children, ...props}: TModalType) => {
  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      <DialogContent {...props} onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
          <DialogDescription>{children}</DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
export default Modal;

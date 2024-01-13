'use client'
import React from "react";
import Modal from "@/shared/components/Modal";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/components/ui/dialog";

const Welcome = () => {
  const [openWelcome, setOpenWelcome] = React.useState<boolean>(true);

  return (
    <Dialog open={openWelcome} onOpenChange={setOpenWelcome}>
      <DialogContent onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Welcome</DialogTitle>
        </DialogHeader>
        <div aria-label={'Theme Swithcer'}>
          <h1 className={'text-center'}>Select a Theme</h1>
          <div>
            <div>Light</div>
            <div>Dark</div>
            <div>System</div>
          </div>
        </div>
      </DialogContent>
    </Dialog>

  );
};
export default Welcome;

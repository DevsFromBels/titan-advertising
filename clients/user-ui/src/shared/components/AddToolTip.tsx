import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/components/ui/tooltip";

interface IAddToolTip extends  React.HTMLAttributes<HTMLDivElement> {}

type TypeAddToolTip = IAddToolTip & { toolTipText: string }

const AddToolTip = ({ children, toolTipText, ...props }: TypeAddToolTip) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent {...props}><p>{toolTipText}</p></TooltipContent>
    </Tooltip>
  );
};
export default AddToolTip;

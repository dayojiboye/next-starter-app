import { cn } from "@/utils/cn";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  tabListClassName?: string;
};

export default function CustomTabs({ children, className, tabListClassName }: Props) {
  return (
    <div className={cn("w-full", className)}>
      <ul role="tablist" className={cn("w-full flex rounded-[32px] bg-[#EEEEEE] p-1", tabListClassName)}>
        {children}
      </ul>
    </div>
  );
}

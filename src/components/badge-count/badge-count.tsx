import { cn } from "@/utils/cn";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function CustomBadgeCount({ children, className }: Props) {
  return (
    <span
      className={cn(
        "text-[10px] place-items-center min-w-[18px] min-h-[18px] p-[0.5px] leading-[100%] text-white border-[1.5px] border-white rounded-[50%] bg-red flex-shrink-0 aspect-[1] inline-grid",
        className,
      )}
    >
      {children}
    </span>
  );
}

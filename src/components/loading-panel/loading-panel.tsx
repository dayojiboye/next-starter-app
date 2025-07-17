import React from "react";
import LoadingSpinner from "../loading-spinner/loading-spinner";
import { cn } from "@/utils/cn";

type Props = {
  className?: string;
  spinnerClassName?: string;
  spinnerColor?: string;
};

export default function LoadingPanel({ className, spinnerClassName }: Props) {
  return (
    <div className={cn("w-[150px] h-[150px] mx-auto flex items-center justify-center", className)}>
      <LoadingSpinner className={cn("w-8 h-8", spinnerClassName)} />
    </div>
  );
}

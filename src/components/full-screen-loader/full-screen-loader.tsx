import React from "react";
import { cn } from "@/utils/cn";
import LoadingSpinner from "../loading-spinner/loading-spinner";

export default function FullScreenLoader({ className }: { className?: string }) {
  return (
    <div>
      <div
        className={cn(
          "w-full h-screen fixed top-0 left-0 z-[1000] flex flex-col items-center justify-center bg-white",
          className,
        )}
      >
        <LoadingSpinner />
        <p className="text-sm font-medium text-center mt-1">Please wait...</p>
      </div>
    </div>
  );
}

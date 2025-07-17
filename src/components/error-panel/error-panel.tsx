import React from "react";
import Button from "../button/button";
import { cn } from "@/utils/cn";
import { useRouter } from "next/navigation";

export default function ErrorPanel({
  error = "We are sorry, looks like something went wrong",
  onRetry,
  className,
  showBackButton,
}: {
  error?: string;
  onRetry?: () => void;
  className?: string;
  showBackButton?: boolean;
}) {
  const router = useRouter();

  return (
    <div
      className={cn(
        "w-full max-w-[400px] flex flex-col gap-3 items-center justify-center mx-auto min-h-[150px]",
        className,
      )}
    >
      <p className="text-center text-sm text-normal">{error}</p>
      <Button className="w-[150px] text-xs h-[30px]" onClick={onRetry}>
        Try again
      </Button>
      {showBackButton && (
        <Button variant="link" className="font-normal" onClick={() => router.back()}>
          Go Back
        </Button>
      )}
    </div>
  );
}

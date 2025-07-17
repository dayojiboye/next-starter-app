import React from "react";
import Button from "../button/button";
import { cn } from "@/utils/cn";

type Props = {
  isFiltersApplied: boolean;
  onClick: () => void;
  label?: string;
  className?: string;
  variant?: "link" | "primary" | "outline" | null;
};

export default function FiltersResetButton({
  isFiltersApplied,
  onClick,
  label = "Reset",
  className,
  variant = "link",
}: Props) {
  return isFiltersApplied ? (
    <Button type="button" variant={variant} className={cn("text-xs font-medium", className)} onClick={onClick}>
      {label}
    </Button>
  ) : null;
}

import React, { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import { titleCase } from "title-case";
import { formatEnum } from "@/utils/helpers";

const statusTextVariants = cva("font-medium", {
  variants: {
    variant: {
      default: "text-primary",
      danger: "text-red",
      success: "text-green",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface StatusTextProps extends ComponentProps<"span">, VariantProps<typeof statusTextVariants> {
  label: string;
}

export default function StatusText({ className, variant, label, ...props }: StatusTextProps) {
  return (
    <span className={cn(statusTextVariants({ variant }), className)} {...props}>
      {titleCase(formatEnum(label))}
    </span>
  );
}

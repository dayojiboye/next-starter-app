import React, { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import Link from "next/link";
import LoadingSpinner from "../loading-spinner/loading-spinner";

const buttonStyles = cva(
  "font-medium text-base h-[44px] w-fit whitespace-nowrap flex items-center justify-center gap-[6px] py-[6px] px-2 rounded-[32px]",
  {
    variants: {
      variant: {
        primary: "bg-black text-white disabled:bg-[#ccc]",
        outline: "bg-white border border-black disabled:bg-white text-secondary",
        link: "w-fit h-fit text-sm font-normal p-0 rounded-none underline",
        icon: "w-fit h-fit p-0 rounded-none font-normal",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

type ButtonOrLinkProps = ComponentProps<"button"> & ComponentProps<"a">;

export interface ButtonProps extends ButtonOrLinkProps, VariantProps<typeof buttonStyles> {
  loading?: boolean;
  disabled?: boolean;
  href?: string;
  spinnerColor?: string;
  spinnerClassName?: string;
}

export default function Button({
  className,
  variant,
  // size,
  loading,
  disabled,
  children,
  href,
  spinnerClassName,
  ...props
}: ButtonProps) {
  const isLink = typeof href !== "undefined";

  const ButtonOrLink = isLink ? "span" : "button";

  const content = (
    <ButtonOrLink
      className={cn(
        buttonStyles({
          variant,
          className,
        }),
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <LoadingSpinner className={cn("shrink-0", spinnerClassName)} /> : children}
    </ButtonOrLink>
  );

  if (isLink) return <Link href={href}>{content}</Link>;

  return content;
}

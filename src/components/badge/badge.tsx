import React, { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import { titleCase } from "title-case";
import { formatEnum } from "@/utils/helpers";

const badgeVariants = cva(
  "w-fit font-medium whitespace-nowrap flex items-center justify-center py-[6px] px-2 border h-[26px] rounded-2xl gap-[5px] text-sm",
  {
    variants: {
      variant: {
        default: "bg-transparent text-normal border-[#DFE1E7] [&>span]:bg-normal",
        success: "bg-[#2BEA8126] text-green [&>span]:bg-green border-none",
        error: "bg-[#DF1C4126] text-red [&>span]:bg-red border-none",
        normal: "bg-[#FAFFFC] text-[#027A48] border-[#DFE1E7] [&>span]:bg-[#12B76A]",
        purple: "bg-[#F6F4FE] text-primary [&>span]:bg-purple border-[#F6F4FE]",
        gold: "bg-[#f9c56480] border-none text-gold [&>span]:bg-gold",
        info: "bg-white border-blue text-[#3783F1] [&>span]:bg-[#3783F1]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends ComponentProps<"div">, VariantProps<typeof badgeVariants> {
  label: string;
  hideDot?: boolean;
}

export default function Badge({ className, variant, label, hideDot, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {!hideDot && <span className="rounded-[50%] w-[6px] h-[6px]"></span>} {titleCase(formatEnum(label))}
    </div>
  );
}

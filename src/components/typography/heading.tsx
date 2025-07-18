import React, { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const headingStyles = cva(["text-primary"], {
  variants: {
    variant: {
      xl: ["font-bold", "xl:text-[56px]", "lg:text-[40px]", "sm:text-[36px]", "text-[30px]"],
      lg: ["xl:text-[30px]", "md:text-[28px]", "text-[24px]", "font-semibold"],
      md: ["text-[21px]", "font-semibold"],
      sm: ["text-lg", "font-bold"],
    },
  },
  defaultVariants: {
    variant: "xl",
  },
});

type HeadingProps = ComponentProps<"h1"> & ComponentProps<"h2"> & ComponentProps<"h3">;

export interface HeadingTextProps extends HeadingProps, VariantProps<typeof headingStyles> {
  heading?: "h1" | "h2" | "h3";
}

export default function HeadingText({ className, variant, heading, ...props }: HeadingTextProps) {
  const Heading = heading || "h1";

  return (
    <Heading
      className={cn(
        headingStyles({
          variant,
          className,
        }),
      )}
      {...props}
    />
  );
}

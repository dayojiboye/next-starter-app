import React from "react";
import HeadingText from "./heading";
import { cn } from "@/utils/cn";

export default function HeadingWithSubHeading({
  heading,
  headingClassName,
  subHeading,
  subHeadingClassName,
  variant = "md",
  recordsCount,
  tag = "h2",
}: {
  headingClassName?: string;
  heading: string;
  subHeadingClassName?: string;
  subHeading?: string;
  variant?: "md" | "xl" | "lg" | "sm" | null;
  recordsCount?: string;
  tag?: "h1" | "h2" | "h3";
}) {
  return (
    <>
      <HeadingText variant={variant} heading={tag} className={cn("text-secondary font-bold w-fit", headingClassName)}>
        {heading} {!!recordsCount && <span className="text-sm font-normal text-[#818898]">({recordsCount})</span>}
      </HeadingText>
      {!!subHeading && <p className={cn("text-base text-secondary mt-1", subHeadingClassName)}>{subHeading}</p>}
    </>
  );
}

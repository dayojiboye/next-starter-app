import { cn } from "@/utils/cn";
// import Image from "next/image";
import React from "react";
import Button from "../button/button";

type Props = {
  className?: string;
  text: string;
  // image?: string;
  // imageClassName?: string;
  textClassName?: string;
  ctaLabel?: string;
  ctaOnClick?: () => void;
  ctaClassName?: string;
};

export default function EmptyPanel({
  className,
  text,
  // image,
  // imageClassName,
  textClassName,
  ctaLabel,
  ctaOnClick,
  ctaClassName,
}: Props) {
  return (
    <div
      className={cn(
        "w-full max-w-[250px] h-[150px] flex flex-col gap-[14px] items-center justify-center mx-auto", // h-[300px]
        className,
      )}
    >
      {/* <Image
        alt={text}
        width={500}
        height={500}
        src={image || "/assets/images/empty-file.png"}
        className={cn("w-[85px] h-[94px] object-contain", imageClassName)}
        priority
      /> */}
      <span className={cn("text-normal text-sm font-medium text-center", textClassName)}>{text}</span>
      {ctaLabel && ctaOnClick && (
        <Button onClick={ctaOnClick} variant="link" className={cn("font-medium text-sm", ctaClassName)}>
          {ctaLabel}
        </Button>
      )}
    </div>
  );
}

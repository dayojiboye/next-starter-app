import { cn } from "@/utils/cn";
import React from "react";
import StarIcon from "../../../public/assets/icons/star.svg";

type Props = {
  className?: string;
  label?: string;
  currentRate: number;
  innerContainerClassName?: string;
};

export default function RatingPanel({ className, label, currentRate, innerContainerClassName }: Props) {
  return (
    <div className={cn("w-full", className)}>
      {label && <label className="mb-[6px] text-base font-medium w-fit block">{label}</label>}

      <div className={cn("flex flex-wrap sm:flex-nowrap gap-[2px]", innerContainerClassName)}>
        {[...new Array(5)].map((_, index) => (
          <StarIcon
            key={index}
            className={`w-[17.46px] h-[16.63px] shrink-0 [&>path]:stroke-black ${currentRate >= index + 1 ? "[&>path]:fill-black" : "[&>path]:fill-white"}`}
          />
        ))}
      </div>
    </div>
  );
}

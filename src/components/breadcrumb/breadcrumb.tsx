import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";
import React from "react";
import Button from "../button/button";

type Props = {
  className?: string;
  items: {
    title: string;
    path?: string;
  }[];
};

export default function Breadcrumb({ className, items }: Props) {
  const pathname = usePathname();

  return (
    <div className={cn("w-fit flex gap-[6px] flex-wrap", className)}>
      {items.map((item, index) => {
        if (pathname === item.path || !item.path)
          return (
            <Button key={index} variant="link" className="text-sm text-[#818898] no-underline cursor-default" disabled>
              {item.title}
            </Button>
          );

        return (
          <div key={index} className="flex items-center gap-[6px]">
            <Button href={item.path} variant="link">
              {item.title}
            </Button>
            <span className="text-sm text-secondary">&gt;</span>
          </div>
        );
      })}
    </div>
  );
}

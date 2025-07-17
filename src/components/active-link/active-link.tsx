import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  icon?: React.ElementType;
  title: string;
  href: string;
  className?: string;
  isActiveProps?: boolean;
};

export default function ActiveLink({ icon, title, href, className, isActiveProps }: Props) {
  const pathname = usePathname();
  const isActive = href === pathname || isActiveProps;
  const Icon = icon ? icon : null;

  return (
    <Link
      href={href}
      className={cn(
        `flex items-center gap-2 py-4 px-2 lg:gap-4 xl:p-4 ${isActive ? "rounded-[8px] bg-[linear-gradient(rgba(17,76,200,0.2),rgba(55,131,241,0.2))]" : "rounded-none bg-transparent"}`,
        className,
      )}
    >
      {Icon ? (
        <span className="w-4 h-4 xl:w-5 xl:h-5 flex flex-shrink-0 items-center justify-center">
          <Icon
            className={`w-4 h-4 xl:w-5 xl:h-5 flex-shrink-0 ${isActive ? "[&>path]:fill-blue-tertiary" : "[&>path]:fill-primary"}`}
          />
        </span>
      ) : (
        <span className="w-4 h-4 xl:w-5 xl:h-5"></span>
      )}
      <span
        className={`font-medium text-sm xl:text-base ${isActive ? "bg-clip-text text-transparent bg-link-gradient" : "text-primary [background-clip:unset] bg-[unset]"}`}
      >
        {title}
      </span>
    </Link>
  );
}

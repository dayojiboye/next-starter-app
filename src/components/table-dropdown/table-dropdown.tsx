import React from "react";
import { cn } from "@/utils/cn";
import { Menu, MenuButton, MenuItem, MenuProps } from "@szhsin/react-menu";

export type TableDropdownItems = {
  label: string;
  ctaAction?: () => void;
}[];

type Props = {
  items: TableDropdownItems;
  className?: string;
  children: React.ReactNode;
  menuItemTextClassName?: string;
  menuItemClassName?: string;
  menuClassName?: string;
} & Omit<MenuProps, "menuButton">;

export default function TableDropdown({
  items,
  className,
  children,
  menuItemClassName,
  menuItemTextClassName,
  menuClassName,
  ...props
}: Props) {
  return (
    <Menu
      transition
      align={props.align || "center"}
      position={props.position || "initial"}
      direction="bottom"
      menuClassName={cn(
        "!mt-[10px] min-w-auto min-h-auto rounded-[10px] z-[50] bg-white p-2 shadow-[0_16px_40px_-8px_rgba(88,92,95,0.16)] border border-[#E2E4E9]",
        menuClassName,
      )}
      onClick={(e) => e.stopPropagation()}
      menuButton={
        <MenuButton
          className={cn(
            "w-6 h-6 bg-transparent hover:bg-[#F6F8FA] transition-all duration-[0.3s] ease-linear rounded-[6px] flex items-center justify-center",
            className,
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </MenuButton>
      }
      {...props}
    >
      {items.map((item, index) => {
        return (
          <MenuItem
            key={index}
            className={cn("bg-transparent hover:bg-[#F6F8FA] p-2 rounded-[8px] group", menuItemClassName)}
            onClick={item.ctaAction}
          >
            <span className={cn("text-sm text-[#0A0D14] group-hover:font-medium", menuItemTextClassName)}>
              {item.label}
            </span>
          </MenuItem>
        );
      })}
    </Menu>
  );
}

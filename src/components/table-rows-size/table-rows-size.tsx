import React from "react";
import { cn } from "@/utils/cn";
import { Menu, MenuButton, MenuItem, MenuProps } from "@szhsin/react-menu";
import ChevronDown from "../../../public/assets/icons/chevron-down.svg";
import { scrollToTop } from "@/utils/helpers";

type Props = {
  className?: string;
  size: number;
  setSize: (value: number) => void;
  menuItemTextClassName?: string;
  menuItemClassName?: string;
  menuClassName?: string;
  buttonClassName?: string;
} & Omit<MenuProps, "menuButton">;

export default function TableRowsSize({
  className,
  size,
  setSize,
  menuItemClassName,
  menuItemTextClassName,
  menuClassName,
  buttonClassName,
  ...props
}: Props) {
  return (
    <div className={cn("w-fit flex items-center gap-[15px]", className)}>
      <span className="text-secondary text-sm font-semibold">Showing</span>

      <Menu
        transition
        align={props.align || "start"}
        position={props.position || "anchor"}
        direction="bottom"
        menuClassName={cn(
          "!mt-[10px] min-w-[86px] h-fit rounded-[8px] z-[50] bg-white p-2 shadow-[0_0_34px_0_rgba(0,0,0,0.15)]",
          menuClassName,
        )}
        menuButton={
          <MenuButton
            className={cn(
              "w-[86px] h-10 bg-white rounded-[8px] flex items-center py-[11px] px-4 gap-5 border border-[#C5C5C5]",
              buttonClassName,
            )}
          >
            <span className="text-sm font-semibold text-secondary w-[18px]">{size}</span>
            <ChevronDown className="w-3 h-3 shrink-0" />
          </MenuButton>
        }
      >
        {[50, 20, 10].map((item, index) => {
          const isSelected = item === size;

          return (
            <MenuItem
              key={index}
              className={cn(
                `hover:bg-[#F6F8FA] p-2 rounded-[8px] flex items-center justify-center ${isSelected ? "bg-[#F6F8FA]" : "bg-transparent"}`,
                menuItemClassName,
              )}
              onClick={() => {
                scrollToTop();
                setSize(item);
              }}
            >
              <span className={cn("text-sm text-secondary font-semibold", menuItemTextClassName)}>{item}</span>
            </MenuItem>
          );
        })}
      </Menu>

      <span className="text-secondary text-sm font-semibold">rows</span>
    </div>
  );
}

import React from "react";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import ChevronDown from "../../../public/assets/icons/chevron-down.svg";
import { cn } from "@/utils/cn";
import { titleCase } from "title-case";
import { formatEnum } from "@/utils/helpers";

type Props = {
  placeholder?: string;
  icon?: React.ElementType;
  className?: string;
  menuItems: string[] | { label: string; icon?: React.ElementType }[];
  onItemClick: (value: string) => void;
  currentSelectedValue?: string;
  hideIcon?: boolean;
  hideCaret?: boolean;
  menuClassName?: string;
  menuItemClassName?: string;
  selectedMenuItemClassName?: string;
  caretIcon?: React.ElementType;
  usePlaceholderAsSelectedValue?: boolean;
  selectedIcon?: React.ElementType;
  iconClassName?: string;
};

export default function CustomFilterDropdown({
  placeholder = "Menu",
  icon,
  className,
  menuItems,
  onItemClick,
  currentSelectedValue,
  hideIcon = false,
  hideCaret,
  menuClassName,
  menuItemClassName,
  selectedMenuItemClassName,
  caretIcon,
  usePlaceholderAsSelectedValue,
  selectedIcon,
  iconClassName,
}: Props) {
  const [selectedValue, setSelectedValue] = React.useState(currentSelectedValue || "");

  React.useEffect(() => {
    if (currentSelectedValue) setSelectedValue(currentSelectedValue);
    else setSelectedValue("");
  }, [currentSelectedValue]);

  const CaretIcon = caretIcon || ChevronDown;

  return (
    <Menu
      transition
      align="start"
      position="anchor"
      direction="bottom"
      menuClassName={cn(
        "!bg-white !mt-1 rounded-[8px] shadow-[0px_0px_15px_6px_rgba(184,166,255,0.3)] !p-[6px]",
        menuClassName,
      )}
      menuButton={
        <MenuButton
          className={cn(
            `text-left rounded-[32px] text-sm !h-11 !py-[10px] !px-[14px] !gap-[7px] border !border-[#C1C7D0] flex whitespace-nowrap items-center
						 ${!selectedValue ? "text-[#818898]" : "text-primary"}`,
            className,
          )}
        >
          {/* {!hideIcon && <Icon className={cn("flex-shrink-0 w-4 h-4", iconClassName)} />}{" "} */}
          {usePlaceholderAsSelectedValue ? placeholder : titleCase(formatEnum(selectedValue || placeholder))}{" "}
          {!hideCaret && <CaretIcon className="flex-shrink-0 w-[11px] h-[11px] [&>path]:fill-[#818898] ml-auto" />}
        </MenuButton>
      }
    >
      {menuItems.map((item, index) => {
        const itemValue = typeof item === "string" ? item : item.label;
        const ItemIcon = typeof item !== "string" && item?.icon ? item.icon : undefined;
        const SelectedIcon = selectedIcon ? selectedIcon : undefined;
        const isSelected = itemValue === currentSelectedValue;

        return (
          <MenuItem
            key={index}
            className={cn(
              `text-secondary text-sm bg-[#F9FAFB] rounded-[6px] flex items-center py-[10px] px-2 mb-[2px] last-of-type:mb-0
							${selectedMenuItemClassName && isSelected ? selectedMenuItemClassName : ""}`,
              menuItemClassName,
            )}
            onClick={() => {
              setSelectedValue(itemValue);
              onItemClick(itemValue);
            }}
          >
            {ItemIcon && <ItemIcon className="flex-shrink-0" />} {titleCase(formatEnum(itemValue))}
            {SelectedIcon && isSelected && <SelectedIcon className="flex-shrink-0 ml-auto" />}
          </MenuItem>
        );
      })}
    </Menu>
  );
}

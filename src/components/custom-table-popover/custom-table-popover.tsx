import React from "react";
import { ControlledMenu, ControlledMenuProps, MenuItem, useHover } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import { cn } from "@/utils/cn";
import { titleCase } from "title-case";
import { formatEnum } from "@/utils/helpers";

type Props = {
  recordId: string;
  buttonClassName?: string;
  label: string;
  items: string[];
  menuItemClassName?: string;
  menuClassName?: string;
} & ControlledMenuProps;

export default function CustomTablePopOver({
  recordId,
  buttonClassName,
  label,
  items,
  menuItemClassName,
  menuClassName,
  ...props
}: Props) {
  const ref = React.useRef<any>(null);
  const [isOpen, setOpen] = React.useState(false);
  const { anchorProps, hoverProps } = useHover(isOpen, setOpen);

  return (
    <>
      <div
        role="button"
        ref={ref}
        {...anchorProps}
        className={cn(
          "rounded-[999px] bg-[#E2E4E9] h-5 flex items-center justify-center min-w-8 py-[2px] px-2 font-medium text-xs text-[#000034]",
          buttonClassName,
        )}
      >
        {label}
      </div>

      <ControlledMenu
        {...hoverProps}
        align={props.align || "start"}
        position={props.position || "initial"}
        direction="bottom"
        state={isOpen ? "open" : "closed"}
        anchorRef={ref}
        onClose={() => setOpen(false)}
        menuClassName={cn(
          "!mt-[10px] min-w-[194px] rounded-[10px] z-[50] bg-white p-2 shadow-[0_16px_40px_-8px_rgba(88,92,95,0.16)] border border-[#E2E4E9]",
          menuClassName,
        )}
        // portal={{
        //   target: document.body,
        // }}
        {...props}
      >
        {items.map((item, index) => (
          <MenuItem
            key={index}
            className={cn("bg-transparent hover:bg-transparent text-[#0A0D14] p-2 text-sm", menuItemClassName)}
          >
            {titleCase(formatEnum(item))}
          </MenuItem>
        ))}
      </ControlledMenu>
    </>
  );
}

import { cn } from "@/utils/cn";
import React from "react";
import Select from "react-select";
import type { Props as ReactSelectProps } from "react-select";

const customStyles = (
  error?: string | boolean,
  height: string = "44px",
  zIndex = 40,
  flexDirection = "row",
  menuPaddingHorizontal: string = "15px",
  menuListPaddingVertical: string = "4px",
  optionPaddingVertical: string = "8px",
  paddingLeft: string = "15px",
  menuMaxHeight: string = "259px",
) => {
  const style = {
    control: (provided: any, state: any) => {
      return {
        ...provided,
        cursor: "pointer",
        width: "100%",
        height,
        minHeight: "44px",
        fontSize: "14px",
        fontWeight: "400",
        color: state.isDisabled ? "#ccc" : "#0D0D12",
        borderRadius: "32px",
        backgroundColor: "#fff",
        borderColor: error
          ? "#E01507 !important"
          : state.menuIsOpen || state.isFocused
            ? "#d6bbfb !important"
            : "#C1C7D0 !important",
        // boxShadow:
        //   state.menuIsOpen || state.isFocused
        //     ? "0px 0px 15px 6px rgba(184, 166, 255, 0.3) !important"
        //     : "0px 1px 2px 0px rgba(16, 24, 40, 0.05) !important",
        boxShadow: "none !important",
        transition: "all 300ms ease-out",
        flexDirection,
      };
    },

    valueContainer: (provided: any, state: any) => {
      return {
        ...provided,
        height: "100%",
        padding: "0px",
        paddingLeft: flexDirection === "row-reverse" ? "0px" : paddingLeft,
        paddingRight: "15px",
      };
    },

    // placeholder: (provided: any, state: any) => {
    //   return {
    //     ...provided,
    //     fontSize: "14px",
    //     color: "#4D4D4D",
    //   };
    // },

    singleValue: (provided: any, state: any) => {
      return {
        ...provided,
        color: "inherit",
      };
    },

    indicatorsContainer: (provided: any, state: any) => {
      return {
        ...provided,
        height: "100%",
        position: "absolute",
        right: "0",
      };
    },

    indicatorSeparator: (provided: any, state: any) => {
      return {
        ...provided,
        display: "none",
      };
    },

    dropdownIndicator: (provided: any, state: any) => {
      return {
        ...provided,
        // color: state.isFocused ? "#B1B0B9 !important" : "#ccc",
        color: "#000000",
      };
    },

    clearIndicator: (provided: any, state: any) => {
      return {
        ...provided,
        position: "absolute",
        right: 16,
      };
    },

    loadingIndicator: (provided: any, state: any) => {
      return {
        ...provided,
        position: "absolute",
        right: flexDirection === "row-reverse" ? 0 : "20px",
      };
    },

    menu: (provided: any, state: any) => {
      return {
        ...provided,
        paddingLeft: menuPaddingHorizontal,
        paddingRight: menuPaddingHorizontal,
        borderRadius: "8px",
        backgroundColor: "#fff",
        boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
      };
    },

    menuList: (provided: any, state: any) => {
      return {
        ...provided,
        maxHeight: menuMaxHeight,
        backgroundColor: "inherit",
        paddingTop: menuListPaddingVertical,
        paddingBottom: menuListPaddingVertical,
      };
    },

    option: (provided: any, state: any) => {
      return {
        ...provided,
        paddingLeft: 0,
        paddingRight: 0,
        marginTop: "4px",
        marginBottom: "4px",
        paddingTop: optionPaddingVertical,
        paddingBottom: optionPaddingVertical,
        fontSize: "14px",
        lineHeight: 1.3,
        cursor: "pointer",
        color: "#121113",
        backgroundColor: "inherit !important",
        transition: "all 300ms ease-out",
      };
    },

    menuPortal: (base: any) => ({ ...base, zIndex }), // in conjuction with menuPortalTarget
  };

  return style;
};

type Props = {
  label?: string;
  requiredSymbol?: string;
  name: string;
  placeholder?: string;
  error?: string | boolean;
  zIndex?: number;
  height?: string;
  isSearchable?: boolean;
  className?: string;
  flexDirection?: string;
  variant?: "secondary" | "primary";
  menuPaddingHorizontal?: string;
  menuListPaddingVertical?: string;
  optionPaddingVertical?: string;
  icon?: React.ElementType;
  iconClassName?: string;
  paddingLeft?: string;
  menuMaxHeight?: string;
} & ReactSelectProps;

export default function CustomSelect({
  label,
  requiredSymbol,
  name,
  placeholder = "Search",
  error,
  isSearchable = false,
  height,
  zIndex,
  className,
  flexDirection,
  variant = "primary",
  menuPaddingHorizontal,
  menuListPaddingVertical,
  optionPaddingVertical,
  icon,
  iconClassName,
  paddingLeft,
  menuMaxHeight,
  ...props
}: Props) {
  const Icon = icon ? icon : null;

  return (
    <div className={cn("select-container", className)}>
      {label && (
        <label className="mb-[6px] text-base font-medium w-fit block" htmlFor={name}>
          {label} {requiredSymbol && <span className="text-red">{requiredSymbol}</span>}
        </label>
      )}

      <div className="w-full relative">
        {Icon && (
          <label htmlFor={name} className="absolute top-[50%] translate-y-[-50%] z-[1] left-[12px]">
            {Icon ? <Icon className={cn("w-4 h-4", iconClassName)} /> : null}
          </label>
        )}

        <Select
          name={name}
          inputId={name}
          instanceId={name}
          isSearchable={isSearchable}
          styles={customStyles(
            error,
            height,
            zIndex,
            flexDirection,
            menuPaddingHorizontal,
            menuListPaddingVertical,
            optionPaddingVertical,
            paddingLeft,
            menuMaxHeight,
          )}
          classNamePrefix="react-select"
          placeholder={placeholder}
          options={props.options}
          menuPortalTarget={typeof window !== "undefined" ? document.documentElement : undefined}
          blurInputOnSelect={false}
          {...props}
        />
      </div>

      {error && <span className="text-red text-sm mt-1 block w-fit">{error}</span>}
    </div>
  );
}

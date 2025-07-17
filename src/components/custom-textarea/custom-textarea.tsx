import { cn } from "@/utils/cn";
import React from "react";

type Props = {
  className?: string;
  label?: string;
  inputClass?: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number | readonly string[];
  placeholder?: string;
  error?: string | boolean;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
  extraInfo?: string;
  labelExtra?: string;
  icon?: React.ElementType;
} & React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

export default function CustomTextarea({
  className,
  label,
  name,
  onChange,
  value,
  placeholder,
  inputClass,
  error,
  onBlur,
  extraInfo,
  labelExtra,
  icon,
  ...props
}: Props) {
  const [_, setIsFocused] = React.useState(false);

  const Icon = icon ? icon : null;

  return (
    <div className={cn("w-full", className)}>
      {label && (
        <label htmlFor={props.id ? props.id : name} className="mb-[6px] text-base font-medium w-fit block">
          {label} {labelExtra && <span className="text-sm text-secondary font-normal">{labelExtra}</span>}
        </label>
      )}

      <div className="w-full relative">
        <textarea
          name={name}
          placeholder={placeholder}
          id={props.id ? props.id : name}
          onChange={onChange}
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          className={cn(
            `block h-[128px] py-[10px] text-sm w-full rounded-2xl bg-white border pl-[14px] resize-none focus:shadow-inputFocus ${error ? "border-red focus:border-red" : "border-[#C1C7D0] focus:border-[#d6bbfb]"}
						${icon ? "pr-[30px]" : "pr-[14px]"}`,
            inputClass,
          )}
          {...props}
        />
        {Icon && (
          <label
            htmlFor={props.id ? props.id : name}
            className="flex items-center justify-center w-6 h-6 absolute top-[7.37px] right-2 z-[1]"
          >
            <Icon className="w-4 h-4" />
          </label>
        )}
      </div>

      {extraInfo && <span className="block w-fit text-sm ml-auto mt-1 text-normal">{extraInfo}</span>}
      {error && <span className="text-red text-sm mt-1 block w-fit">{error}</span>}
    </div>
  );
}

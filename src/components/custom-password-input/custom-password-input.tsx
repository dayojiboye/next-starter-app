import { cn } from "@/utils/cn";
import React from "react";
import EyeIcon from "../../../public/assets/icons/eye.svg";
import EyeSlashIcon from "../../../public/assets/icons/eye-slash.svg";

type Props = {
  className?: string;
  label?: string;
  inputClass?: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number | readonly string[];
  placeholder?: string;
  icon?: React.ElementType;
  error?: string | boolean;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export default function CustomPasswordInput({
  className,
  label,
  name,
  onChange,
  value,
  placeholder,
  icon,
  inputClass,
  error,
  onBlur,
  ...props
}: Props) {
  const Icon = icon ? icon : null;
  const [_, setIsFocused] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className={cn("w-full", className)}>
      {label && (
        <label htmlFor={props.id ? props.id : name} className="mb-[6px] text-base font-medium w-fit block">
          {label}
        </label>
      )}

      <div className="w-full relative">
        {Icon && (
          <label
            htmlFor={props.id ? props.id : name}
            className="absolute top-[50%] translate-y-[-50%] z-[1] left-[12px] w-fit h-fit"
          >
            {Icon ? <Icon className="w-4 h-4" /> : null}
          </label>
        )}

        <input
          name={name}
          type={showPassword ? "text" : "password"}
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
            `block h-[44px] py-[10px] text-sm w-full rounded-[32px] bg-white border pr-[34px] focus:shadow-inputFocus ${
              Icon ? "pl-[34px]" : "pl-[14px]"
            } ${error ? "border-red focus:border-red" : "border-[#C1C7D0] focus:border-[#d6bbfb]"}`,
            inputClass,
          )}
          {...props}
        />

        <div className="pr-4 absolute top-[50%] translate-y-[-50%] z-[1] right-0 flex items-center justify-center">
          <button type="button" className="w-fit h-fit" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeSlashIcon className="w-4 h-4" /> : <EyeIcon className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {error && <span className="text-red text-sm mt-1 block w-fit">{error}</span>}
    </div>
  );
}

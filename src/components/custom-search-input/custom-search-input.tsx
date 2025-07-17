import React from "react";
import CustomInput from "../custom-input/custom-input";
import SearchIcon from "../../../public/assets/icons/search-icon.svg";

type Props = {
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  inputClass?: string;
  icon?: React.ElementType;
  iconClassName?: string;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export default function CustomSearchInput({
  name,
  onChange,
  placeholder = "Search",
  inputClass,
  icon,
  iconClassName,
  ...props
}: Props) {
  const Icon = icon ? icon : SearchIcon;

  return (
    <CustomInput
      icon={Icon}
      iconClassName={iconClassName}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      inputClass={inputClass}
      {...props}
    />
  );
}

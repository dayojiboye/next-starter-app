import React from "react";
import styles from "./custom-radio-button.module.scss";
import { cn } from "@/utils/cn";

type Props = {
  label?: string;
  onChange: () => void;
  name: string;
  className?: string;
  defaultChecked?: boolean;
  selectedValue: string;
  value: string;
  labelClassName?: string;
  checkmarkClassName?: string;
};

export default function CustomRadioButton({
  label,
  onChange,
  name,
  selectedValue,
  className,
  defaultChecked,
  value,
  labelClassName,
  checkmarkClassName,
}: Props) {
  return (
    <div
      className={cn(styles["radio-button-container"], className)}
      aria-label={name}
      onClick={(e) => {
        e.stopPropagation();
        onChange();
      }}
    >
      <input
        type="radio"
        name={name}
        defaultChecked={defaultChecked}
        onChange={onChange}
        checked={selectedValue === value}
      />
      <span className={cn(styles["checkmark"], checkmarkClassName)}></span>
      {label && <span className={cn(styles["inner-label"], labelClassName)}>{label}</span>}
    </div>
  );
}

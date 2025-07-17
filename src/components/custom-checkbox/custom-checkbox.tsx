import React from "react";
import styles from "./custom-checkbox.module.scss";
import { cn } from "@/utils/cn";

type Props = {
  className?: string;
  label?: string;
  name: string;
  onChange: () => void;
  value?: string;
  checked: boolean;
  containerClassName?: string;
  checkmarkClassName?: string;
  labelClassName?: string;
};

export default function CustomCheckbox({
  className,
  label,
  name,
  onChange,
  value,
  checked,
  containerClassName,
  checkmarkClassName,
  labelClassName,
  ...props
}: Props) {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onChange();
      }}
      className={cn(styles["custom-checkbox"], className)}
    >
      <div className={cn(styles["checkbox-container"], containerClassName)}>
        <input type="checkbox" checked={checked} name={name} onChange={onChange} {...props} />
        <div className={cn(styles["checkmark"], checkmarkClassName)}></div>
      </div>
      {label && <span className={cn(labelClassName)}>{label}</span>}
    </div>
  );
}

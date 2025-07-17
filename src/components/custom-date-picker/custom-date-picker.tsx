/* eslint-disable react/display-name */
import React from "react";
import DatePicker, { DatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarIcon from "../../../public/assets/icons/calendar-icon.svg";
import { cn } from "@/utils/cn";

const DatePickerInput = React.forwardRef(
  (
    {
      iconPosition,
      icon,
      iconstyle,
      isInvalid,
      spellCheck,
      ...props
    }: {
      iconPosition?: "left" | "right";
      icon?: React.ElementType;
      iconstyle?: React.CSSProperties;
      isInvalid?: boolean;
      spellCheck?: boolean;
    },
    ref?: React.Ref<HTMLInputElement>,
  ) => {
    return (
      <label style={{ position: "relative", width: "100%" }}>
        {React.createElement(icon || CalendarIcon, {
          style: {
            position: "absolute",
            right: iconPosition === "right" ? "19px" : "unset",
            left: iconPosition === "left" ? "19px" : "unset",
            top: "50%",
            transform: "translateY(-50%)",
            width: "18px",
            height: "18px",
            ...iconstyle,
          },
        })}

        <input ref={ref} aria-invalid={isInvalid} {...props} />
      </label>
    );
  },
);

type Props = {
  className?: string;
  label?: string;
  min?: Date;
  max?: Date;
  placeholder?: string;
  name: string;
  selected?: string;
  error?: string | boolean;
  onChange: (
    date: any,
    event?: React.MouseEvent<HTMLElement, MouseEvent> | React.KeyboardEvent<HTMLElement> | undefined,
  ) => void;
  isClearable?: boolean;
  dateFormat?: string;
  icon?: React.ElementType;
  iconStyle?: React.CSSProperties;
  iconPosition?: "left" | "right";
  isTimePicker?: boolean;
} & DatePickerProps;

export default function CustomDatePicker({
  className,
  label,
  min,
  max,
  placeholder = "dd/mm/yy",
  name,
  selected,
  error,
  onChange,
  isClearable = true,
  dateFormat = "yyyy-MM-dd",
  icon,
  iconStyle,
  iconPosition = "left",
  isTimePicker = false,
  ...restProps
}: Props) {
  const filterPassedTime = (time: string | number | Date) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  return (
    <div className={cn("relative w-full", className)}>
      {label && (
        <label className="mb-[6px] text-base w-fit block font-medium" htmlFor={name}>
          {label}
        </label>
      )}

      <DatePicker
        dateFormat={dateFormat}
        showTimeSelectOnly={isTimePicker}
        showTimeSelect={isTimePicker}
        // timeIntervals={30}
        // timeCaption="Time"
        isClearable={isClearable}
        clearButtonTitle="Clear selected date"
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        // @ts-ignore
        // popperPlacement="auto"
        selected={selected}
        minDate={min}
        maxDate={max}
        placeholderText={placeholder}
        onChange={onChange}
        filterTime={filterPassedTime}
        id={name}
        customInput={
          <DatePickerInput
            spellCheck={true}
            icon={icon}
            iconstyle={iconStyle}
            isInvalid={!!error}
            iconPosition={iconPosition}
            // @ts-ignore
            className={cn(
              `py-[10px] border w-full h-[44px] text-sm rounded-[32px] bg-white block focus:shadow-inputFocus
							${error ? "border-red focus:border-red" : "border-[#C1C7D0] focus:border-[#d6bbfb]"}
							 ${iconPosition === "right" ? "pr-[44px] pl-[14px]" : "pl-[44px] pr-[14px]"}`,
            )}
          />
        }
        formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 3)}
        {...restProps}
      />

      {error && <span className="text-red text-sm mt-1 block w-fit">{error}</span>}
    </div>
  );
}

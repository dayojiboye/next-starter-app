import { cn } from "@/utils/cn";
import React from "react";
import CustomDatePicker from "../custom-date-picker/custom-date-picker";

type Props = {
  className?: string;
  label?: string;
  contentClassName?: string;
  startPlaceholder?: string;
  endPlaceholder?: string;
  startMinDate?: Date;
  startMaxDate?: Date;
  endMaxDate?: Date;
  startName: string;
  endName: string;
  startDate?: string & Date;
  endDate?: string & Date;
  onStartDateChange: (
    date: any,
    event?: React.MouseEvent<HTMLElement, MouseEvent> | React.KeyboardEvent<HTMLElement> | undefined,
  ) => void;
  onEndDateChange: (
    date: any,
    event?: React.MouseEvent<HTMLElement, MouseEvent> | React.KeyboardEvent<HTMLElement> | undefined,
  ) => void;
  startDateError?: string | boolean;
  endDateError?: string | boolean;
  inputClassName?: string;
  endDateMax?: number;
  separatorClassName?: string;
};

export default function DateRangePicker({
  className,
  label,
  contentClassName,
  startPlaceholder,
  endPlaceholder,
  // startMinDate = new Date(),
  startMinDate,
  startMaxDate,
  endMaxDate,
  startName,
  endName,
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  startDateError,
  endDateError,
  inputClassName,
  endDateMax = 180,
  separatorClassName,
}: Props) {
  return (
    <div className={cn("w-full", className)}>
      {label && <label className="mb-[6px] text-base font-medium w-fit block">{label}</label>}
      {/* [@media(min-width:500px)] */}
      <div className={cn("flex gap-2 flex-wrap", contentClassName)}>
        <CustomDatePicker
          isClearable={false}
          placeholder={startPlaceholder}
          selected={startDate}
          startDate={startDate}
          endDate={endDate}
          selectsStart
          min={startMinDate}
          max={startMaxDate}
          name={startName}
          onChange={onStartDateChange}
          error={startDateError}
          className={cn("sm:flex-1", inputClassName)}
        />
        <span className={cn("text-base text-[#DFE1E7] self-center block w-fit mx-auto", separatorClassName)}>–</span>
        <CustomDatePicker
          isClearable={false}
          placeholder={endPlaceholder}
          selected={endDate}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          min={startDate || startMinDate} // new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
          max={endMaxDate}
          name={endName}
          onChange={onEndDateChange}
          error={endDateError}
          className={cn("sm:flex-1", inputClassName)}
        />
      </div>
    </div>
  );
}

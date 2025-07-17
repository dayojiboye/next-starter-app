import { cn } from "@/utils/cn";
import React from "react";

type Props = {
  className?: string;
  headings: string[];
  bodyData: {}[];
  emptyMessage?: string;
  onRowClick?: (index: number) => void;
};

export default function CustomTable({ headings = [], bodyData = [], className, emptyMessage, onRowClick }: Props) {
  return (
    <div
      className={cn(
        "w-full flex-1 overflow-x-auto rounded-[12px] shadow-[0_0_31px_0_rgba(0,0,0,0.1)] pt-6 pb-[50px] px-4",
        className,
      )}
    >
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {headings.map((item, index) => {
              return (
                <th key={index} className="px-4 pb-4 text-sm text-normal whitespace-nowrap text-left font-medium">
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {bodyData.length === 0 ? (
            <tr>
              <td colSpan={headings.length} className="px-4 py-[25px] text-center font-medium text-sm text-secondary">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            bodyData.map((bodyDataItem, index) => {
              return (
                <tr
                  key={index}
                  className={`${!!onRowClick ? "cursor-pointer" : "cursor-auto"}`}
                  // onClick={!!onRowClick ? () => onRowClick(index) : undefined}
                  onClick={!onRowClick ? undefined : () => onRowClick(index)}
                >
                  {Object.values(bodyDataItem).map((content: any, i) => {
                    return (
                      <td
                        key={i}
                        className="px-4 py-[25px] text-sm font-normal text-secondary whitespace-nowrap text-left"
                      >
                        {content}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

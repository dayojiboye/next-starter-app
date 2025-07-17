import { cn } from "@/utils/cn";
import { scrollToTop } from "@/utils/helpers";
import React from "react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import ChevronRight from "../../../public/assets/icons/chevron-right-white.svg";

type Props = {
  paginate: (selectedItem: { selected: number }) => void;
  isMini?: boolean;
  className?: string;
  containerClassName?: string;
  onPrev: () => void;
  onNext: () => void;
} & ReactPaginateProps;

export default function CustomPagination({
  paginate,
  isMini,
  className,
  containerClassName,
  onPrev,
  onNext,
  ...props
}: Props) {
  const pageRange = 2;

  return (
    <div className={cn("w-fit flex gap-3 items-center flex-wrap h-[35px]", containerClassName)}>
      <span className="text-sm font-semibold text-secondary shrink-0">Page</span>

      <ReactPaginate
        breakLabel="..."
        // previousLabel="Previous"
        // nextLabel="Next"
        previousLabel={null}
        nextLabel={null}
        renderOnZeroPageCount={null}
        marginPagesDisplayed={pageRange}
        pageRangeDisplayed={pageRange}
        breakClassName={`${isMini ? "hidden" : "page-item"}`}
        containerClassName={cn("pagination", className)}
        pageClassName={`${isMini ? "hidden" : "page-item"}`}
        previousClassName={`${isMini ? "prev-page-item mini" : "prev-page-item"}`}
        nextClassName={`${isMini ? "next-page-item mini" : "next-page-item"}`}
        onPageChange={(selectedItem) => {
          scrollToTop();
          paginate(selectedItem);
        }}
        {...props}
      />

      <button
        onClick={() => {
          scrollToTop();
          onPrev();
        }}
        disabled={props.forcePage === 0}
        className="text-sm w-10 h-full rounded bg-[#452186] shadow-[inset_-2px_-2px_8px_0_rgba(0,0,0,0.04)] disabled:bg-[#FAFAFA] border border-[#452186] disabled:border-[#E2E8F0] shrink-0 flex items-center justify-center group"
      >
        <ChevronRight className="rotate-[180deg] group-disabled:[&>path]:fill-[#D7D7D7]" />
      </button>

      <button
        onClick={() => {
          scrollToTop();
          onNext();
        }}
        disabled={props.forcePage === props.pageCount - 1}
        className="text-sm w-10 h-full rounded bg-[#452186] shadow-[inset_-2px_-2px_8px_0_rgba(0,0,0,0.04)] disabled:bg-[#FAFAFA] border border-[#452186] disabled:border-[#E2E8F0] shrink-0 flex items-center justify-center group"
      >
        <ChevronRight className="group-disabled:[&>path]:fill-[#D7D7D7]" />
      </button>
    </div>
  );
}

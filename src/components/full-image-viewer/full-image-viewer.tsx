import { ImageViewerObject } from "@/types";
import { cn } from "@/utils/cn";
import Image from "next/image";
import React from "react";
import ReactModal from "react-modal";
import DismissIcon from "../../../public/assets/icons/close-icon.svg";

type Props = {
  className?: string;
  imageObject: ImageViewerObject;
  show: boolean;
  onClose: () => void;
  imageClassName?: string;
};

export default function FullImageViewer({ className, imageObject, show, onClose, imageClassName }: Props) {
  return (
    <ReactModal
      isOpen={show}
      // @ts-ignore
      appElement={typeof window !== "undefined" && document.body}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick
      onAfterClose={() => {
        document.documentElement.classList.remove("_fixed");
        document.body.classList.remove("_fixed");
      }}
      onAfterOpen={() => {
        document.documentElement.classList.add("_fixed");
        document.body.classList.add("_fixed");
      }}
      shouldFocusAfterRender={false}
      shouldReturnFocusAfterClose={false}
      overlayClassName={cn("modal-overlay", className)}
      className="relative w-full h-full"
    >
      <div
        className="w-full h-full bg-black pointer-events-auto flex items-center justify-center flex-col border-separate p-0"
        onClick={() => onClose()}
      >
        <div
          className="w-[95%] max-w-[821px] max-h-[558.62px] bg-transparent relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="h-8 w-8 flex items-center justify-center focus:outline focus:outline-sky-600 absolute top-12 right-0"
          >
            <DismissIcon className="w-[19.77px] h-[19.77px] [&>path]:stroke-1 [&>path]:stroke-white" />
          </button>
          <Image
            alt={imageObject.imageAlt}
            width={800}
            height={800}
            src={imageObject.imageUrl}
            className={cn("w-full h-full object-contain", imageClassName)} // rounded-[50.78px]
          />
        </div>
      </div>
    </ReactModal>
  );
}

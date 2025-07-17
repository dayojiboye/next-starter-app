import React from "react";
import styles from "./modal.module.scss";
import ReactModal from "react-modal";
import { cn } from "@/utils/cn";
import CloseIcon from "../../../public/assets/icons/close-icon.svg";
import Button from "../button/button";

type Props = {
  show: boolean;
  onClose: () => void;
  shouldCloseOnOverlayClick?: boolean;
  children: React.ReactNode;
  className?: string;
  size?: "xs" | "sm" | "lg" | "xl" | "md";
  // transparentHeader?: boolean;
  modalDialogClass?: string;
  modalBodyClass?: string;
  modalHeaderClass?: string;
  modalInnerClass?: string;
  dismissIcon?: React.ElementType;
  heading?: string;
  footerButtonLabel?: string;
  footerButtonDisabled?: boolean;
  onFooterButtonClick?: () => void;
  footerElement?: React.ReactNode;
  footerClassName?: string;
};

export default function Modal({
  show,
  onClose,
  shouldCloseOnOverlayClick = true,
  children,
  className,
  size = "md", // xs || sm || lg || xl || md (default)
  // transparentHeader = true,
  modalDialogClass,
  modalBodyClass,
  modalHeaderClass,
  modalInnerClass,
  dismissIcon,
  heading,
  footerButtonLabel,
  footerButtonDisabled,
  onFooterButtonClick,
  footerElement,
  footerClassName,
}: Props) {
  const DismissIcon = dismissIcon || CloseIcon;

  return (
    <ReactModal
      isOpen={show}
      // @ts-ignore
      appElement={typeof window !== "undefined" && document.body}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
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
      className={styles["docalla-modal"]}
    >
      <div
        className={styles["modal-content"]}
        onClick={(e) => {
          if (e.currentTarget !== e.target || !shouldCloseOnOverlayClick) return;
          onClose();
        }}
      >
        <div className={cn("modal-dialog", styles["modal-dialog"], styles["modal-dialog-" + size], modalDialogClass)}>
          <div className={cn(styles["modal-header"], modalHeaderClass)}>
            {heading && <h2 className="text-base font-medium">{heading}</h2>}
            <button onClick={onClose}>
              <DismissIcon />
            </button>
          </div>
          <div className={cn(styles["modal-body"], modalBodyClass)}>
            <div className={cn(styles["modal-main"], modalInnerClass)}>{children}</div>
          </div>
          {footerButtonLabel && onFooterButtonClick && !footerElement && (
            <div className={styles["modal-footer"]}>
              <Button
                className="w-full max-w-[575px] mx-auto"
                onClick={onFooterButtonClick}
                disabled={footerButtonDisabled}
              >
                {footerButtonLabel}
              </Button>
            </div>
          )}
          {footerElement && !footerButtonLabel && !onFooterButtonClick && (
            <div className={cn(styles["modal-footer"], footerClassName)}>{footerElement}</div>
          )}
        </div>
      </div>
    </ReactModal>
  );
}

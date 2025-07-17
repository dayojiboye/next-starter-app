"use client";
import { useAppDispatch } from "@/hooks/use-store";
import { AppDispatch } from "@/store/store";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function PageWrapper({ children }: Props) {
  const dispatch = useAppDispatch<AppDispatch>();

  React.useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem("lastVisit", Date.now().toString());
    };

    const handleVisibilityChange = () => {
      const lastVisit = sessionStorage.getItem("lastVisit");
      const timeSinceLastVisit = lastVisit ? Date.now() - parseInt(lastVisit) : 0;

      if (document.visibilityState === "hidden" && timeSinceLastVisit > 1000) {
        dispatch({ type: "CLEAR_STORE" });
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [dispatch]);

  return <>{children}</>;
}

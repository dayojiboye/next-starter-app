import { MutationCache, QueryCache } from "@tanstack/react-query";

export function clearDataCache() {
  const queryCache = new QueryCache();
  const mutationCache = new MutationCache();

  queryCache.clear();
  mutationCache.clear();
}

export const getErrorMessage = (errObj: any) => {
  const errResponse = errObj.response;
  const errorMessage =
    errResponse && errResponse.data ? errResponse.data.message : "Something went wrong! Please try again";
  return errorMessage;
};

export function formatEnum(enumValue: string) {
  if (!enumValue) return "";
  return String(enumValue).replaceAll("_", " ").toLowerCase();
}

export const maxAgeByMinutes = (minutes: number) => ({ maxAge: minutes * 60 * 1000 });

export const getCurrencySymbol = (currency: string) => {
  switch (currency) {
    case "USD":
      return "$";

    case "NGN":
      return "₦";

    case "GBP":
      return "£";

    default:
      return "";
  }
};

export const formatAmount = (cash: number | string, currency: string = "", decimals: number = 2) => {
  const money = cash
    ? Number(cash)
        .toFixed(decimals)
        .replace(/./g, (c, i, a) => (i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c))
    : "0.00";

  return `${getCurrencySymbol(currency)}${money}`;
};

export const handleScrollBehavior = () => {
  let scrollBehaviorTimer;
  document.documentElement.style.scrollBehavior = "smooth";
  clearTimeout(scrollBehaviorTimer);
  scrollBehaviorTimer = setTimeout(() => {
    document.documentElement.setAttribute("style", "");
  }, 100);
};

export const scrollToTop = () => {
  const layout = document.getElementById("page-layout");
  if (layout && layout.scrollHeight > layout.clientHeight) {
    layout.scrollTo({
      top: 0,
      behavior: "instant",
    });
  } else {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }
};

export const scrollToElement = (elementId: string) => {
  const elementToScrollTo = typeof window !== "undefined" ? document.getElementById(elementId) : undefined;
  if (elementToScrollTo) elementToScrollTo.scrollIntoView();
};

export const ellipsisText = (text: string, isTextExpanded: boolean, limit: number = 100) => {
  if (!text) return "";
  return text.length > limit && !isTextExpanded ? `${text.slice(0, limit)}...` : text;
};

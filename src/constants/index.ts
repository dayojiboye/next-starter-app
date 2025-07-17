export const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 1023px)");
export const dayMaxAge = { maxAge: 24 * 60 * 60 * 1000 };

export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/;
export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const FILE_SIZE = 5_000_000;

// Detect if device is mobile
export const isMobileDevice =
  typeof window !== "undefined" &&
  (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i));

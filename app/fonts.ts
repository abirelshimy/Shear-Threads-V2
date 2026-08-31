import localFont from "next/font/local";

export const display = localFont({
  src: "./font-files/anton.woff2",
  variable: "--font-display",
  display: "swap",
  weight: "400",
});

export const body = localFont({
  src: "./font-files/archivo.woff2",
  variable: "--font-body",
  display: "swap",
  weight: "100 900",
});

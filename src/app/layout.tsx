import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";

import "./globals.css";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import "react-tooltip/dist/react-tooltip.css";

import AppQueryProvider from "@/utils/query-provider";
import React from "react";
import ReduxProvider from "@/store/redux-provider";
import PageWrapper from "@/components/page-wrapper/page-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Starter App",
  description: "Next Starter App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <NextTopLoader showSpinner={false} color="#000" />
        <Toaster
          containerStyle={{
            zIndex: 99999,
          }}
          toastOptions={{
            style: {
              zIndex: 99999,
              fontSize: "14px",
            },
            duration: 4000,
          }}
        />
        <AppQueryProvider>
          <ReduxProvider>
            <PageWrapper>{children}</PageWrapper>
          </ReduxProvider>
        </AppQueryProvider>
      </body>
    </html>
  );
}

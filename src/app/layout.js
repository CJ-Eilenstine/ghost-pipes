"use client";
// import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import { StatesProvider } from "@/hooks/getStates";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <StatesProvider>{children}</StatesProvider>
      </body>
    </html>
  );
}

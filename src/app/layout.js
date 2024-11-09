"use client";
// import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import { StatesProvider } from "@/hooks/getStates";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <StatesProvider>
        {children}
        </StatesProvider>
      </body>
    </html>
  );
}

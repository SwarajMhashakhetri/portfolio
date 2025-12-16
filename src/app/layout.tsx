import type { Metadata } from "next";
import "./globals.css";
import localFont from "@next/font/local";

export const metadata: Metadata = {
  title: "Swaraj ",
};
const united_sans = localFont({
  src: [
    {
      path: "../../public/united_sans_medium.woff2",
    },
  ],
  variable: "--font-unitedSans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${united_sans.variable} bg-[#0D1015] font-mono`}
    >
      <body>{children}</body>
    </html>
  );
}

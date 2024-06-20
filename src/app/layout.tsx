import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        style={
          {
            // display: "flex",
            // flexDirection: "column",
            // justifyContent: "space-between",
            // alignItems: "center",
            // padding: "6rem",
            // minHeight: "100vh",
          }
        }
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}

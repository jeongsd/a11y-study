import type { Metadata } from "next";

import Link from "next/link";

export const metadata: Metadata = {
  // title: "Create Next App",
  // description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      style={{
        display: "flex",
        gap: 68,
        padding: 26,
      }}
    >
      <nav>
        <h2>타이틀 없음</h2>
        <p>
          <Link href="/title/notitle/fajita">notitle/fajita</Link>
        </p>
        <p>
          <Link href="/title/notitle/guacamole">notitle/guacamole</Link>
        </p>
        <p>
          <Link href="/title/notitle/magarita">notitle/magarita</Link>
        </p>

        <h2>타이틀 있음</h2>
        <p>
          <Link href="/title/fajita">fajita</Link>
        </p>
        <p>
          <Link href="/title/guacamole">guacamole</Link>
        </p>
        <p>
          <Link href="/title/magarita">magarita</Link>
        </p>

        <h2>descriptive</h2>
        <p>
          <Link href="/title/descriptive">descriptive</Link>
        </p>
        <p>
          <Link href="/title/descriptive/vertical-bar">vertical-bar</Link>
        </p>
      </nav>
      {children}
    </div>
  );
}

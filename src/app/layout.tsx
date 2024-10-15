import type { Metadata } from "next";
import "./global.styles.css"

export const metadata: Metadata = {
  icons: {
    icon: '/icon.ico',
  },
  title: "Mobile Application Builder",
  description: "Application to building mobile apps by drag and drop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}

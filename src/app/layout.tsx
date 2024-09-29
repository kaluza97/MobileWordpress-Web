import type { Metadata } from "next";

export const metadata: Metadata = {
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
      <body>
        {children}
      </body>
    </html>
  );
}

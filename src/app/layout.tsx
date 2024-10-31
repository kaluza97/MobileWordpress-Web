import type { Metadata } from 'next';
import '@/app/global.styles.css';
import App from '@/app/App';

export const metadata: Metadata = {
  icons: {
    icon: '/icon.ico',
  },
  title: 'Mobile Application Builder',
  description: 'Application to building mobile apps by drag and drop',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <App>{children}</App>
      </body>
    </html>
  );
}

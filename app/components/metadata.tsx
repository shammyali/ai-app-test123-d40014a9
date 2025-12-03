import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Logos Technologies LLC - Office365, Azure & Managed Services',
  description: 'Professional IT services including Office365, Azure Cloud solutions, and comprehensive managed services for businesses of all sizes.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
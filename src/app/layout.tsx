import type { Metadata } from 'next';
import { type_second } from '../functions/fonts';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Dogs Next',
  description: 'Rede social para cachorros',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={type_second.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

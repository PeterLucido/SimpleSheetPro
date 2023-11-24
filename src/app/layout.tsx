import "~/styles/globals.css";
import { Inter } from "next/font/google";
import Header from "./_components/header";
import { TRPCReactProvider } from "~/trpc/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieHeader = typeof window === 'undefined' ? '' : document.cookie;
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <Header />
        <TRPCReactProvider cookies={cookieHeader}>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}

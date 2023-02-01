import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from "@next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        <main className="text-center mx-auto text-gray-700 p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

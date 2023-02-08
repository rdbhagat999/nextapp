import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from "@next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: {
//     default: "Acme",
//     template: "%s | Acme",
//   },
//   generator: "Next.js",
//   applicationName: "Next.js",
//   referrer: "origin-when-crossorigin",
//   keywords: ["Next.js", "React", "JavaScript"],
//   authors: ["Josh Story", "Shu Ding"],
//   themeColor: "tomato",
//   colorScheme: "dark",
//   creator: "Jiachi Liu",
//   publisher: "Sebastian Markbåge",
//   formatDetection: {
//     email: "no",
//     address: "no",
//     telephone: "no",
//   },
//   alternates: {
//     canonical: "https://nextjs.org",
//     languages: {
//       "en-US": "https://nextjs.org/en-US",
//       "de-DE": "https://nextjs.org/de-DE",
//     },
//     media: {
//       "only screen and (max-width: 600px)": "https://nextjs.org/mobile",
//     },
//     types: {
//       "application/rss+xml": "https://nextjs.org/rss",
//     },
//   },
//   openGraph: {
//     title: "Next.js",
//     description: "The React Framework for the Web",
//     url: "https://nextjs.org",
//     siteName: "Next.js",
//     images: [
//       {
//         url: "https://nextjs.org/og.png",
//         width: 800,
//         height: 600,
//       },
//       {
//         url: "https://nextjs.org/og-alt.png",
//         width: 1800,
//         height: 1600,
//         alt: "My custom alt",
//       },
//     ],
//     locale: "en-US",
//     type: "website",
//   },
//   robots: {
//     index: false,
//     follow: true,
//     nocache: true,

//     googleBot: {
//       index: true,
//       follow: false,
//       noimageindex: true,

//       "max-video-preview": "standard",
//       "max-image-preview": -1,
//       "max-snippet": -1,
//     },
//   },
//   icons: {
//     icon: [{ url: "/icon.png" }, new URL("/icon.png", "https://example.com")],
//     shortcut: ["/shortcut-icon.png"],
//     apple: [
//       { url: "/apple-icon.png" },
//       { url: "/apple-icon-x3.png", sizes: "180x180", type: "image/png" },
//     ],
//     other: [
//       {
//         rel: "apple-touch-icon-precomposed",
//         url: "/apple-touch-icon-precomposed.png",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Next.js",
//     description: "The React Framework for the Web",
//     siteId: "1467726470533754880",
//     creator: "@nextjs",
//     creatorId: "1467726470533754880",
//     images: ["https://nextjs.org/og.png"],
//   },
//   viewport: {
//     width: "device-width",
//     initialScale: 1,
//     maximumScale: 1,
//   },
//   verification: {
//     google: "google",
//     yandex: "yandex",
//     yahoo: "yahoo",
//     other: {
//       me: ["my-email", "my-link"],
//     },
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={inter.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        <main className="mx-auto text-gray-700 p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

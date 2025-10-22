import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3001'),
  title: "Astria Group",
  description: "PT Astria Sukses Internasional (Astria Group) - Holding company yang membangun ekosistem bisnis terintegrasi dengan portofolio multibisnis yang inovatif dan berkelanjutan.",
  icons: {
    icon: [
      { url: "/img/logo-astria.jpg", type: "image/jpeg", sizes: "32x32" },
      { url: "/img/logo-astria.jpg", type: "image/jpeg", sizes: "16x16" },
    ],
    shortcut: "/img/logo-astria.jpg",
    apple: "/img/logo-astria.jpg",
  },
  openGraph: {
    title: "Profil Perusahaan | Astria Group",
    description: "PT Astria Sukses Internasional (Astria Group) - Holding company yang membangun ekosistem bisnis terintegrasi",
    images: ["/img/logo-astria.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans text-gray-800`}
      >
        {children}
      </body>
    </html>
  );
}

import type React from "react";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "@/components/Loading";


export const metadata: Metadata = {
  metadataBase: new URL("https://www.nutrsalma.com/"),
  title: {
    default:
      "عيادة التغذية العلاجية والحميات — الدكتورة سلمى محمد الحبيشي",
    template:
      "%s | عيادة التغذية العلاجية — الدكتورة سلمى محمد الحبيشي",
  },
  description:
    "عيادة متخصصة في التغذية العلاجية والحميات الغذائية بإشراف الدكتورة سلمى محمد الحبيشي، مع خطط مخصصة ومتابعة دقيقة لكل حالة.",
  keywords: [
    "الدكتورة سلمى محمد الحبيشي",
    "تغذية علاجية",
    "حميات",
    "خسارة الوزن",
    "زيادة الوزن",
    "تغذية الأطفال",
    "تغذية الحوامل",
    "تغذية الرياضيين",
    "تحليل InBody",
  ],
  alternates: { canonical: "/" },
  applicationName:
    "عيادة التغذية العلاجية — بإشراف الدكتورة سلمى محمد الحبيشي",
  authors: [{ name: "الدكتورة سلمى محمد الحبيشي" }],
  creator: "الدكتورة سلمى محمد الحبيشي",
  publisher: "عيادة التغذية العلاجية بإدارة الدكتورة سلمى محمد الحبيشي",
  openGraph: {
    type: "website",
    url: "/",
    siteName:
      "عيادة التغذية العلاجية — بإشراف الدكتورة سلمى محمد الحبيشي",
    title:
      "الصفحة الرئيسية — عيادة التغذية العلاجية (الدكتورة سلمى محمد الحبيشي)",
    description:
      "حلول تغذية علاجية مبنية على العلم وبرامج مخصصة بإشراف الدكتورة سلمى محمد الحبيشي.",
  },
icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/icon0.svg',
        color: '#000000'
      }
    ]
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Track',
  },
  formatDetection: {
    telephone: false
  },
};

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.className}>
      <body className="antialiased bg-gray-50">
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}

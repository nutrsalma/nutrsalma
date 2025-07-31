import type React from "react";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "@/components/Loading";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "عيادة التغذية العلاجية والحميات - أخصائية التغذية سلمى محمد الحبيشي",
  description:
    "عيادة متخصصة في التغذية العلاجية والحميات الغذائية مع خطط مخصصة لكل حالة",
  keywords:
    "تغذية علاجية، حميات، خسارة الوزن، زيادة الوزن، تغذية الأطفال، تغذية الحوامل",
};

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

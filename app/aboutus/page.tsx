// app/[lang]/about/page.tsx
import type { Metadata } from "next";
import AboutHeroSection from "./aboutclient";


export const metadata: Metadata = {
  title: "من نحن",
  description:
    "عيادة متخصصة في التغذية العلاجية للدكتورة سلمى محمد الحبيشي، تقدم حلولًا صحية مدروسة لكل فرد برسالة واضحة ورؤية مبتكرة وقيم ترتكز على النزاهة والتميز والرعاية الشخصية.",
  keywords: [
    "الدكتورة سلمى محمد الحبيشي",
    "سلمى محمد الحبيشي",
    "اخصائية تغذية",
    "تغذية علاجية",
    "اليمن",
    "صنعاء",
    "التغذية العلاجية",
    "من نحن",
    "عيادة التغذية",
    "صحة",
    "حميات",
    "نصائح غذائية",
    "عيادة",
  ],
  alternates: { canonical: "/aboutus" },
  applicationName: "عيادة التغذية العلاجية — للدكتورة سلمى محمد الحبيشي",
  authors: [{ name: "الدكتورة سلمى محمد الحبيشي" }],
  creator: "الدكتورة سلمى محمد الحبيشي",
  publisher: "عيادة التغذية العلاجية للدكتورة سلمى محمد الحبيشي",
  openGraph: {
    type: "website",
    url: "/aboutus",
    siteName: "عيادة التغذية العلاجية — بإشراف الدكتورة سلمى محمد الحبيشي",
    title:
      "من نحن — عيادة التغذية العلاجية (الدكتورة سلمى محمد الحبيشي)",
    description:
      "تعرف على رسالتنا ورؤيتنا وقيمنا في تقديم حلول تغذية علاجية علمية وشخصية للدكتورة سلمى محمد الحبيشي.",
  },
  category: "health",
};


export default function Page() {
  return <AboutHeroSection />;
}

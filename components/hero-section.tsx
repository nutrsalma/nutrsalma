"use client";

import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle,
  Sparkles,
  Users,
  Calendar,
  Award,
} from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-emerald-200/40 to-teal-200/40 blur-3xl animate-float"
          style={{
            top: "10%",
            right: "10%",
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-cyan-200/30 to-emerald-200/30 blur-3xl animate-float-delayed"
          style={{
            bottom: "20%",
            left: "5%",
            transform: `translate(${mousePosition.x * -0.01}px, ${
              mousePosition.y * -0.01
            }px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-teal-300/20 to-cyan-300/20 blur-2xl animate-pulse-slow"
          style={{
            top: "60%",
            right: "30%",
            transform: `translate(${mousePosition.x * 0.015}px, ${
              mousePosition.y * 0.015
            }px)`,
            transition: "transform 0.1s ease-out",
          }}
        />

        {/* Geometric Shapes */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-emerald-400/30 rounded-full animate-bounce-slow" />
        <div className="absolute top-40 right-32 w-6 h-6 bg-teal-400/40 rotate-45 animate-spin-slow" />
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-cyan-400/50 rounded-full animate-ping-slow" />

        {/* Grid Pattern */}
        <div className='absolute inset-0 bg-[url(&apos;data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%2310b981" fillOpacity="0.03"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&apos;)] animate-pulse-slow' />
      </div>

      <div className="container relative mx-auto px-4 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div
            className={`text-right transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md text-emerald-700 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up">
              <div className="relative">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <div className="absolute inset-0 animate-ping">
                  <Sparkles className="w-4 h-4 opacity-30" />
                </div>
              </div>
              <span>عيادة معتمدة ومتخصصة</span>
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            </div>

            {/* Main Title with Gradient Animation */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in-up animation-delay-200">
              <span className="text-gray-900 block">عيادة التغذية</span>
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent animate-gradient-x block">
                العلاجية والحميات
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl mb-10 text-gray-600 leading-relaxed animate-fade-in-up animation-delay-400">
              نقدم خدمات واستشارات متخصصة في مجال التغذية العلاجية مع
              <span className="text-emerald-600 font-semibold">
                {" "}
                خطط غذائية مخصصة
              </span>{" "}
              لكل حالة
            </p>

            {/* Features List with Staggered Animation */}
            <div className="space-y-4 mb-10">
              {[
                "خطط غذائية مخصصة ومدروسة علمياً",
                "متابعة دقيقة ومستمرة",
                "خبرة معتمدة في التغذية العلاجية",
              ].map((text, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 animate-fade-in-up`}
                  style={{ animationDelay: `${600 + index * 200}ms` }}
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full animate-ping opacity-20" />
                  </div>
                  <span className="text-gray-700 font-medium">{text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-1200`}
            >
              <Link
                href="/contact"
                className="group relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 text-center overflow-hidden hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  احجز موعد الآن
                </span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>

              <Link
                href="/services"
                className="group bg-white/80 backdrop-blur-sm text-emerald-600 border-2 border-emerald-200 px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:border-emerald-300 transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
              >
                تعرف على خدماتنا
                <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Right Content - Enhanced Visual */}
          <div
            className={`relative transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            {/* Main Image Container */}
            <div className="relative group">
              {/* Floating Background Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse-slow" />

              <div className="relative bg-white/70 backdrop-blur-md rounded-3xl lg:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                <Image
                  src="/bg6.jpeg"
                  alt="أخصائية التغذية سلمى محمد الحبيشي"
                  width={800} // Specify width
                  height={600} // Specify height
                  className="w-full h-auto rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />

                {/* Floating Play Button */}
                {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300">
                    <Play className="w-6 h-6 text-emerald-600 ml-1" />
                  </button>
                </div> */}

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full animate-bounce-slow" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-full animate-pulse" />
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-8 -right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-gray-100 animate-float hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-4 h-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-pulse" />
                <h4 className="font-bold text-lg text-gray-900">
                  أخصائية التغذية
                </h4>
              </div>
              <p className="font-semibold text-emerald-600 text-lg">
                سلمى محمد الحبيشي
              </p>
              <p className="text-sm text-gray-500 mt-1">
                خريجة جامعة العلوم والتكنولوجيا - 2019
              </p>
            </div>

            {/* Success Stats Card */}
            <div className="absolute -top-8 -left-8 bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-6 rounded-2xl shadow-xl animate-float-delayed hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-6 h-6" />
                <span className="font-bold text-2xl animate-count-up">
                  300+
                </span>
              </div>
              <p className="text-sm opacity-90">حالة ناجحة</p>
              <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                <div
                  className="bg-white h-2 rounded-full animate-progress"
                  style={{ width: "95%" }}
                />
              </div>
            </div>

            {/* Achievement Badge */}
            <div className="max-sm:hidden absolute top-1/2 -left-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-gray-100 animate-bounce-slow hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-emerald-600" />
                <div>
                  <div className="font-bold text-sm text-gray-900">معتمدة</div>
                  <div className="text-xs text-gray-600">رسمياً</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="max-sm:hidden absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-emerald-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-scroll-indicator" />
        </div>
      </div>
    </section>
  );
}

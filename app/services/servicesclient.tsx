"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ServiceCard from "@/components/services-cards";
// import FloatingBubblesHero from "@/components/floating-bubbles-hero";
import BackgroundPaths from "@/components/ui/background-paths";

import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";

const AnimatedSection = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.8,
            delay: delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default function ServicesPage() {
  const services = [
    {
      imageUrl: "/Evaluation-section1.jpeg?height=80&width=80",
      title: "تحليل شامل ودقيق لمكونات الجسم باستخدام أحدث الأجهزة",
      description: "تحليل شامل ودقيق لمكونات الجسم باستخدام أحدث الأجهزة",
      features: [
        "تحليل مكونات الجسم InBody",
        "قياس نسبة الدهون",
        "تحديد الكتلة العضلية",
        "نسبة الدهون الاحشائية",
        "نسبة السوائل في الجسم",
        "قياس مؤشر كتلة الجسم",
        "قياس نسبة البروتين في الجسم",
        "قياس الاملاح والمعادن",
      ],
    },
    {
      imageUrl: "/weightLoss.jpeg?height=80&width=80",
      title: "خطط غذائية مدروسة لخسارة الوزن بطريقة صحية وآمنة",
      description: "خطط غذائية مدروسة لخسارة الوزن بطريقة صحية وآمنة",
      features: [
        "حمية منخفضة السعرات",
        "نظام الصيام المتقطع",
        "حمية الكيتو",
        "متابعة أسبوعية",
      ],
    },
    {
      imageUrl: "/weight-gain.jpeg?height=80&width=80",
      title: "برامج غذائية متخصصة لزيادة الوزن والكتلة العضلية",
      description: "برامج غذائية متخصصة لزيادة الوزن والكتلة العضلية",
      features: [
        "حمية عالية السعرات",
        "تقوية العضلات",
        "مكملات غذائية",
        "متابعة التقدم",
      ],
    },
    {
      imageUrl: "/special.jpeg?height=80&width=80",
      title: "أنظمة غذائية مخصصة للحالات الخاصة والأهداف المحددة",
      description: "أنظمة غذائية مخصصة للحالات الخاصة والأهداف المحددة",
      features: [
        "حمية البحر المتوسط",
        "النظام النباتي",
        "حمية خالية من الجلوتين",
        "أنظمة رياضية",
      ],
    },
    {
      imageUrl: "/Glucose.jpeg?height=80&width=80",
      title: "برامج غذائية متخصصة لمرضى السكري من النوع الأول والثاني",
      description: "برامج غذائية متخصصة لمرضى السكري من النوع الأول والثاني",
      features: [
        "تنظيم السكر",
        "حساب الكربوهيدرات",
        "وجبات متوازنة",
        "متابعة مستمرة",
      ],
    },
    {
      imageUrl: "/heart-2.jpeg?height=80&width=80",
      title: "أنظمة غذائية لتنظيم ضغط الدم ومستوى الكوليسترول",
      description: "أنظمة غذائية لتنظيم ضغط الدم ومستوى الكوليسترول",
      features: [
        "حمية قليلة الصوديوم",
        "أطعمة مفيدة للقلب",
        "تقليل الدهون المشبعة",
        "زيادة الألياف",
      ],
    },
    {
      imageUrl: "/digestion.jpeg?height=80&width=80",
      title: "علاج مشاكل الجهاز الهضمي من خلال التغذية المتخصصة",
      description: "علاج مشاكل الجهاز الهضمي من خلال التغذية المتخصصة",
      features: [
        "علاج القولون العصبي",
        "حمية لقرحة المعدة",
        "علاج الارتجاع",
        "تحسين الهضم",
      ],
    },
    {
      imageUrl: "/pregnant.jpeg?height=80&width=80",
      title: "برامج غذائية متخصصة للأمهات في فترة الحمل والرضاعة",
      description: "برامج غذائية متخصصة للأمهات في فترة الحمل والرضاعة",
      features: [
        "تغذية الام الحامل",
        "تحسين من صحة الام الحامل",
        "تغذية الام المرضعة",
      ],
    },
    {
      imageUrl: "/kid.jpeg?height=80&width=80",
      title: "أنظمة غذائية مخصصة للأطفال في مراحل النمو المختلفة",
      description: "أنظمة غذائية مخصصة للأطفال في مراحل النمو المختلفة",
      features: [
        "نمو صحي",
        "علاج سوء التغذية",
        "زيادة الوزن للأطفال",
        "تغذية المراهقين",
      ],
    },
    {
      imageUrl: "/old.jpeg?height=80&width=80",
      title: "برامج غذائية تناسب احتياجات كبار السن الخاصة",
      description: "برامج غذائية تناسب احتياجات كبار السن الخاصة",
      features: [
        "تقوية العظام",
        "تحسين الذاكرة",
        "الوقاية من الأمراض",
        "سهولة البلع",
      ],
    },
    {
      imageUrl: "/strong.jpeg?height=80&width=80",
      title: "أنظمة غذائية متخصصة لتحسين الأداء الرياضي",
      description: "أنظمة غذائية متخصصة لتحسين الأداء الرياضي",
      features: ["زيادة الطاقة", "بناء العضلات", "تسريع الاستشفاء"],
    },
    {
      imageUrl: "/follow.jpeg?height=80&width=80",
      title: "جلسات المتابعة",
      description: "متابعة دورية لضمان تحقيق الأهداف المرجوة",
      features: ["متابعة أسبوعية", "تعديل الخطة", "قياس التقدم", "حل المشاكل"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section with Floating Bubbles */}
      <BackgroundPaths>
        <div className="min-h-[70vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl w-full mx-auto">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text Content */}
              <motion.div
                className="text-center lg:text-right space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                {/* Main Title */}
                <motion.h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  خدماتنا
                </motion.h1>

                {/* Small Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="max-w-xl mx-auto lg:mx-0"
                >
                  <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-light">
                    عيادة متخصصة في التغذية العلاجية تقدم حلولاً صحية مدروسة لكل
                    فرد
                  </p>
                </motion.div>
              </motion.div>

              {/* Right Side - Image */}
              <motion.div
                className="relative w-full"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <div className="relative">
                  {/* Subtle background glow */}
                  <div className="absolute -inset-6 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-3xl blur-2xl" />

                  {/* Image container */}
                  <motion.div
                    className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-4 sm:p-6 border border-white/20 shadow-2xl overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Image
                      src="/services_.png"
                      alt="عيادة التغذية"
                      width={800} // Set the width of the image
                      height={600} // Set the height of the image
                      className="w-full h-52 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] rounded-2xl object-cover shadow-lg"
                      priority // Optional: loads the image faster for above-the-fold content
                    />

                    {/* Decorative elements */}
                    <div className="absolute top-6 right-6 w-4 h-4 bg-white/60 rounded-full shadow-lg"></div>
                    <div className="absolute bottom-6 left-6 w-3 h-3 bg-white/40 rounded-full shadow-lg"></div>

                    <div className="absolute top-4 left-4 w-10 h-10 border-2 border-white/30 rounded-lg rotate-12"></div>
                    <div className="absolute bottom-4 right-4 w-6 h-6 border-2 border-white/20 rounded-full"></div>
                  </motion.div>

                  {/* Floating animated dots */}
                  <motion.div
                    className="absolute -top-3 -right-3 w-5 h-5 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full shadow-lg"
                    animate={{ y: [-10, 10, -10] }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-3 -left-3 w-4 h-4 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-full shadow-lg"
                    animate={{ y: [10, -10, 10] }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: 1,
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </BackgroundPaths>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section 1 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              🧪 أولاً: التقييم والتحليل
            </h2>
            <div className="flex justify-center">
              <div className="max-w-md w-full">
                {services.slice(0, 1).map((service, index) => (
                  <AnimatedSection key={index} delay={index * 0.1}>
                    <ServiceCard {...service} className="h-full" />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              🥗 ثانياً: الخطط الغذائية
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.slice(1, 4).map((service, index) => (
                <div className="h-full" key={index}>
                  <AnimatedSection delay={index * 0.1}>
                    <ServiceCard {...service} className="h-full" />
                  </AnimatedSection>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              💊 ثالثاً: التغذية العلاجية
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.slice(4, 7).map((service, index) => (
                <div className="h-full" key={index}>
                  <AnimatedSection delay={index * 0.1}>
                    <ServiceCard {...service} className="h-full" />
                  </AnimatedSection>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              👨‍👩‍👧‍👦 رابعاً: الفئات الخاصة
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {services.slice(7, 11).map((service, index) => (
                <div className="h-full" key={index}>
                  <AnimatedSection delay={index * 0.1}>
                    <ServiceCard {...service} className="h-full" />
                  </AnimatedSection>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              🗓 خامساً: المتابعة والتوعية
            </h2>
            <div className="flex justify-center">
              <div className="max-w-md w-full">
                {services.slice(11).map((service, index) => (
                  <AnimatedSection key={index} delay={index * 0.1}>
                    <ServiceCard {...service} className="h-full" />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            هل تحتاج لاستشارة غذائية متخصصة؟
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            احجز موعدك الآن واحصل على خطة غذائية مخصصة تناسب حالتك وأهدافك
            الصحية
          </p>
          <a
            href="/contact"
            style={{ backgroundColor: "#5a9e9d" }}
            className="text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-colors duration-300 inline-block"
          >
            احجز موعد الآن
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

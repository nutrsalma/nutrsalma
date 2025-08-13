"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import type React from "react";
import { useEffect, useRef } from "react";
import BackgroundPaths from "@/components/ui/background-paths";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
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

const Section = ({
  imageSrc,
  imageAlt,
  title,
  description,
  accentColor,
  accentPosition = "left",
  delay = 0,
}: {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  accentColor: string;
  accentPosition?: "left" | "right";
  delay?: number;
}) => {
  const isLeft = accentPosition === "left";

  return (
    <AnimatedSection delay={delay}>
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div
            className={`flex flex-col ${
              isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-12 lg:gap-20`}
          >
            {/* Image as Background Border */}
            <motion.div
              className="relative flex-shrink-0 w-full max-w-md"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Main content box with image background */}
              <motion.div
                className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-gray-100"
                aria-label={imageAlt} // ✅ now imageAlt is used
                role="img" // ✅ marks it as an image for screen readers
                style={{
                  backgroundImage: `url(${
                    imageSrc || "/placeholder.svg?height=400&width=400"
                  })`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                initial={{ scale: 0, rotate: -5 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: delay + 0.2,
                }}
              >
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40" />

                {/* Content area */}
                <div className="relative z-10 p-8 md:p-12 min-h-[300px] flex items-center justify-center">
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: delay + 0.5, duration: 0.5 }}
                  ></motion.div>
                </div>

                {/* Decorative corner elements */}
                <div
                  className="absolute top-4 right-4 w-3 h-3 rounded-full"
                  style={{ backgroundColor: accentColor }}
                />
                <div
                  className="absolute bottom-4 left-4 w-2 h-2 rounded-full opacity-60"
                  style={{ backgroundColor: accentColor }}
                />
              </motion.div>
            </motion.div>

            {/* Enhanced Content */}
            <motion.div
              className={`flex-1 text-center ${
                isLeft ? "lg:text-right" : "lg:text-left"
              }`}
              initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: delay + 0.4 }}
            >
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8 tracking-wide"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: delay + 0.6 }}
              >
                <span className="relative">
                  {title}
                  <motion.div
                    style={{ backgroundColor: accentColor }}
                    className="absolute -bottom-2 left-0 h-1 rounded-full opacity-80"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: delay + 1 }}
                  />
                </span>
              </motion.h2>

              <div className="max-w-3xl mx-auto lg:mx-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: delay + 0.8 }}
                >
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    {description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default function AboutHeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      {/* Enhanced Hero Section */}
      {/* Two-Column Hero Section */}
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
                  من نحن
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

                  {/* Main image container */}
                  <motion.div
                    className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-4 sm:p-6 border border-white/20 shadow-2xl overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Image
                      src="/about-us.png"
                      alt="عيادة التغذية"
                      width={800} // set actual width
                      height={500} // set actual height
                      className="w-full h-52 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] rounded-2xl object-cover shadow-lg"
                      style={{ objectFit: "cover" }}
                      priority
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

      {/* Enhanced Mission, Vision, Values Sections */}
      <div className="bg-white pt-20">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Page Header */}
          <AnimatedSection>
            <div className="text-center mb-20 px-6">
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-gray-900">أسس عيادتنا</span>
              </motion.h2>
              <motion.div
                className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-xl md:text-2xl text-black">
                  اكتشف المبادئ الأساسية التي تقود عيادتنا نحو التميز في مجال
                  التغذية العلاجية
                </p>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Mission Section */}
          <Section
            imageSrc="/Mission.jpeg"
            imageAlt="رسالة العيادة"
            title="رسالتنا"
            accentColor="#ff6b35"
            accentPosition="left"
            delay={0.2}
            description="نحن ملتزمون بتقديم خدمات التغذية العلاجية المتميزة والمبنية على أحدث الأبحاث العلمية. رسالتنا هي تمكين الأفراد من تحقيق أهدافهم الصحية من خلال برامج غذائية مخصصة ومتابعة دقيقة، مما يساهم في تحسين جودة حياتهم وصحتهم العامة."
          />

          {/* Vision Section */}
          <Section
            imageSrc="/Vision.jpeg"
            imageAlt="رؤية العيادة"
            title="رؤيتنا"
            accentColor="#00bcd4"
            accentPosition="right"
            delay={0.4}
            description="أن نكون العيادة الرائدة في مجال التغذية العلاجية في المنطقة، معروفة بتميزها في تقديم الحلول الغذائية المبتكرة والشاملة. نطمح إلى أن نكون المرجع الأول للأفراد الساعين لتحسين صحتهم من خلال التغذية السليمة والعلمية."
          />

          {/* Values Section */}
          <Section
            imageSrc="/value.jpeg"
            imageAlt="قيم العيادة"
            title="قيمنا"
            accentColor="#ffc107"
            accentPosition="left"
            delay={0.6}
            description="النزاهة والتميز والرعاية الشخصية هي أسس عملنا. نؤمن بأهمية التعامل مع كل مريض كحالة فريدة، ونلتزم بتقديم أعلى مستويات الخدمة المهنية. نقدر الثقة التي يضعها مرضانا فينا ونسعى دائماً لتجاوز توقعاتهم."
          />

          {/* Enhanced Bottom decorative element */}
          <AnimatedSection delay={0.8}>
            <div className="text-center mt-20 md:mt-32 pb-20 px-6">
              <motion.div
                className="inline-flex items-center space-x-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <motion.div
                  className="w-16 h-1 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: 64 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                />
                <motion.div
                  className="w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.6 }}
                />
                <motion.div
                  className="w-16 h-1 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: 64 }}
                  transition={{ duration: 0.8, delay: 1.8 }}
                />
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
      <Footer />
    </div>
  );
}

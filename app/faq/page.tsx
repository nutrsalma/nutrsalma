"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BackgroundPaths from "@/components/ui/background-paths";
import { motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import Image from "next/image";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "كيف يمكنني حجز موعد؟",
      answer:
        "يمكنكم حجز موعد عبر الاتصال على الرقم 771794448 أو عبر الواتساب، أو زيارة العيادة مباشرة في الدائري - الجامعة الجديدة - برج الرشيد.",
    },
    {
      question: "ما هي الخدمات التي تقدمها العيادة؟",
      answer:
        "نقدم استشارات غذائية مخصصة لجميع الفئات، برامج تغذية لإنقاص أو زيادة الوزن، خطط علاجية للأمراض المزمنة، متابعة دورية، تحاليل تركيب الجسم، وتغذية للرياضيين والحوامل.",
    },
    {
      question: "هل تقدمون استشارات أونلاين؟",
      answer:
        "نعم، نوفر استشارات غذائية عن بُعد عبر منصات التواصل لتسهيل الوصول للمرضى في أي مكان.",
    },
    {
      question: "كم تستغرق الجلسة الأولى؟ وماذا تشمل؟",
      answer:
        "الجلسة الأولى تستغرق من 30 إلى 45 دقيقة، وتشمل تقييم الحالة الصحية والغذائية، مراجعة التحاليل (إن وجدت)، تحليل مكونات الجسم، ووضع خطة غذائية أولية.",
    },
    {
      question: "هل الخطة الغذائية تناسب جميع الأعمار أو الحالات؟",
      answer:
        "نعم، يتم تصميم الخطة بحسب عمر الحالة، حالتها الصحية، نمط حياتها، وهدفها الغذائي، سواء كانت لطفل، حامل، مريض مزمن أو رياضي.",
    },
    {
      question: "كم عدد الزيارات المطلوبة لمتابعة الخطة؟",
      answer:
        "يعتمد عدد الزيارات على حالة كل شخص، لكن يُنصح بمتابعة أسبوعية أو نصف شهرية لضمان التقدم وتحقيق النتائج بأمان وفعالية.",
    },
    {
      question: "هل توفرون أجهزة تحليل الجسم (مثل InBody)؟",
      answer:
        "نعم، نستخدم أجهزة دقيقة لتحليل مكونات الجسم، مثل نسبة الدهون، العضلات، والسوائل، للمساعدة في تصميم خطة دقيقة وفعّالة.",
    },
    {
      question: "هل أنظمة التخسيس فيها حرمان؟",
      answer:
        "أبدًا. نعتمد على التغذية المتوازنة دون حرمان، ونركز على العادات الصحية طويلة المدى لضمان ثبات الوزن وتحسين الصحة.",
    },
    {
      question: "ما تكلفة الاستشارة أو الباقات؟",
      answer:
        "تختلف التكلفة حسب نوع الجلسة (حضورية أو أونلاين) والباقات المتوفرة. يمكنكم التواصل معنا لمعرفة التفاصيل والعروض الحالية.",
    },
    {
      question: "هل يمكن التواصل عبر الواتساب للحجز؟",
      answer:
        "نعم، نوفر خدمة الحجز والاستفسار عبر الواتساب لسهولة التواصل مع الفريق.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      {/* Hero Section */}

      <BackgroundPaths>
        <div className="min-h-[70vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl w-full mx-auto">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="text-center lg:text-right space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <motion.h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  الأسئلة الشائعة
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="max-w-xl mx-auto lg:mx-0"
                >
                  <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-light">
                    إجابات على أكثر الأسئلة شيوعاً حول خدماتنا في التغذية
                    العلاجية والحميات الغذائية
                  </p>
                </motion.div>
              </motion.div>
              <motion.div
                className="relative w-full"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <div className="relative">
                  <div className="absolute -inset-6 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-3xl blur-2xl" />

                  <motion.div
                    className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-4 sm:p-6 border border-white/20 shadow-2xl overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Image
                      src="/faq.png"
                      alt="عيادة التغذية"
                      width={800} // Provide width
                      height={600} // Provide height
                      className="w-full h-52 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] rounded-2xl object-cover shadow-lg"
                      priority // Optional: use priority for images above the fold
                    />

                    <div className="absolute top-6 right-6 w-4 h-4 bg-white/60 rounded-full shadow-lg"></div>
                    <div className="absolute bottom-6 left-6 w-3 h-3 bg-white/40 rounded-full shadow-lg"></div>

                    <div className="absolute top-4 left-4 w-10 h-10 border-2 border-white/30 rounded-lg rotate-12"></div>
                    <div className="absolute bottom-4 right-4 w-6 h-6 border-2 border-white/20 rounded-full"></div>
                  </motion.div>

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

      {/* <HeroSection
        title="Creative Media Solutions"
        description="Professional event coverage, audio production, and visual storytelling that brings your vision to life."
        image="/test.jpg" // replace with your actual image path
      /> */}

      {/* FAQ Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                كل ما تريد معرفته
              </h2>
              <p className="text-gray-600 text-lg">
                اختر السؤال للحصول على إجابة مفصلة
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl border-2 transition-all duration-500 ease-in-out transform hover:scale-[1.02] ${
                    openIndex === index
                      ? "border-[#5c9f9e] shadow-2xl shadow-[#5c9f9e]/20"
                      : "border-gray-200 hover:border-[#5c9f9e]/50 shadow-lg hover:shadow-xl"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`w-full px-8 py-6 text-right flex justify-between items-center transition-all duration-500 ${
                      openIndex === index
                        ? "bg-gradient-to-r from-[#5c9f9e] to-[#4a8e8d] text-white"
                        : "bg-white hover:bg-gray-50 text-gray-800"
                    }`}
                  >
                    <span className="text-lg font-bold leading-relaxed pr-4">
                      {faq.question}
                    </span>
                    <div
                      className={`flex-shrink-0 p-2 rounded-full transition-all duration-300 ${
                        openIndex === index
                          ? "bg-white/20 rotate-180"
                          : "bg-[#5c9f9e]/10 group-hover:bg-[#5c9f9e]/20"
                      }`}
                    >
                      <ChevronDown
                        className={`w-6 h-6 transition-all duration-300 ${
                          openIndex === index ? "text-white" : "text-[#5c9f9e]"
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openIndex === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="bg-[#5c9f9e8 py-6">
                      {/* <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 border border-white/20"> */}
                      <p className="text-gray-700 leading-relaxed text-lg font-medium">
                        {faq.answer}
                      </p>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#5c9f9e]/5 to-[#9fbd47]/5"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#5c9f9e] to-[#5a9e9d] rounded-full mb-8">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                لم تجد إجابة لسؤالك؟
              </h2>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                لا تتردد في التواصل معنا للحصول على إجابات مفصلة لجميع
                استفساراتك وسنكون سعداء لمساعدتك
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#5a9e9d] to-[#5a9e9d] text-white px-10 py-4 rounded-full font-bold text-lg hover:from-[#8aa63f] hover:to-[#7a9639] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                تواصل معنا الآن
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

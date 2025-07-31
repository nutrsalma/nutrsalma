"use client";

import type React from "react";
import { useState } from "react";
import Navbar from "@/components/navbar";
import BackgroundPaths from "@/components/ui/background-paths";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.name.trim(),
          email: formData.email,
          phone: formData.phone,
          message: `نوع الخدمة: ${formData.service}\n\n${formData.message}`,
        }),
      });

      if (response.ok) {
        alert("✅ تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.");
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          message: "",
        });
      } else {
        alert("❌ حدث خطأ أثناء إرسال الرسالة. الرجاء المحاولة مرة أخرى.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("❌ لم نتمكن من إرسال الرسالة.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}

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
                  تواصل معنا
                </motion.h1>

                {/* Small Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="max-w-xl mx-auto lg:mx-0"
                >
                  <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-light">
                    نحن هنا لمساعدتك في رحلتك نحو حياة صحية أفضل. تواصل معنا
                    لحجز موعد أو للاستفسار عن خدماتنا
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
                      src="/Contact.png"
                      alt="عيادة التغذية"
                      className="w-full h-52 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] rounded-2xl object-cover shadow-lg"
                      width={800} // specify the image width
                      height={600} // specify the image height
                      priority // optional for images above the fold
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

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                احجز موعدك الآن
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5a9e9d] focus:border-transparent"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    رقم الهاتف *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5a9e9d] focus:border-transparent"
                    placeholder="أدخل رقم هاتفك"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5a9e9d] focus:border-transparent"
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    نوع الخدمة المطلوبة
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5a9e9d] focus:border-transparent"
                  >
                    <option value="">اختر نوع الخدمة</option>
                    <option value="weight-loss">خسارة الوزن</option>
                    <option value="weight-gain">زيادة الوزن</option>
                    <option value="therapeutic">التغذية العلاجية</option>
                    <option value="pregnancy">تغذية الحوامل</option>
                    <option value="children">تغذية الأطفال</option>
                    <option value="sports">تغذية الرياضيين</option>
                    <option value="consultation">استشارة عامة</option>
                    <option value="consultation">اخرئ</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    رسالتك
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5a9e9d] focus:border-transparent"
                    placeholder="أخبرنا عن حالتك أو استفسارك..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  style={{ backgroundColor: "#5a9e9d" }}
                  className="w-full text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  إرسال الرسالة
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                معلومات التواصل
              </h2>
              <div className="space-y-6 mb-8">
                {[
                  {
                    Icon: MapPin,
                    title: "العنوان",
                    text: "الدائري - الجامعة الجديدة - برج الرشيد",
                  },
                  { Icon: Phone, title: "الهاتف", text: "+967771794448" },
                  {
                    Icon: MessageCircle,
                    title: "واتساب",
                    text: "+967771794448",
                  },
                  {
                    Icon: Mail,
                    title: "البريد الإلكتروني",
                    text: "nutrsalma@gmail.com",
                  },
                  {
                    Icon: Clock,
                    title: "مواعيد العمل",
                    text: "مواعيد العمل: السبت، الإثنين، والأربعاء ( بعدالعصر))",
                  },
                ].map(({ Icon, title, text }, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div
                      style={{ backgroundColor: "#5a9e9d1A" }}
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                    >
                      <Icon style={{ color: "#5a9e9d" }} className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        {title}
                      </h3>
                      <p className="text-gray-600 whitespace-pre-line">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  تابعنا على
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/nutrsalma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/nutrsalma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-lg flex items-center justify-center hover:from-pink-600 hover:to-purple-700 transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://twitter.com/nutrsalma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-400 text-white rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.youtube.com/@nutrsalma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-red-700 text-white rounded-lg flex items-center justify-center hover:bg-red-800 transition-colors"
                  >
                    <Youtube className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  موقعنا على الخريطة
                </h3>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">خريطة الموقع</p>
                    <p className="text-sm text-gray-400">
                      سيتم إضافة الخريطة قريباً
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                تواصل سريع
              </h2>
              <p className="text-gray-600">
                للحصول على استشارة فورية أو حجز موعد عاجل
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a
                href="tel:+967771794448"
                style={{ backgroundColor: "#5a9e9d" }}
                className="text-white p-6 rounded-2xl text-center hover:opacity-90 transition-colors duration-300 group"
              >
                <Phone className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">اتصل الآن</h3>
                <p className="opacity-90">+967771794448</p>
              </a>

              <a
                href="https://wa.me/967771794448"
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: "#d03a82" }}
                className="text-white p-6 rounded-2xl text-center hover:opacity-90 transition-colors duration-300 group"
              >
                <MessageCircle className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">واتساب</h3>
                <p className="opacity-90">تواصل فوري</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

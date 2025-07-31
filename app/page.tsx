"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import ServiceCard from "@/components/services-card";
import {
  Activity,
  Apple,
  Heart,
  Users,
  Target,
  Award,
  Sparkles,
  Shield,
  TrendingUp,
} from "lucide-react";
import { useEffect} from "react";
import Image from "next/image";

export default function HomePage() {
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Activity,
      title: "التقييم والتحليل",
      description: "تحليل شامل لمكونات الجسم وتقييم الحالة الغذائية",
      imageUrl: "/Evaluation.jpeg",
    },
    {
      icon: Apple,
      title: "الخطط الغذائية",
      description: "خطط غذائية مخصصة حسب الهدف والحالة الصحية",
      imageUrl: "/DietPlans.jpeg",
    },
    {
      icon: Heart,
      title: "التغذية العلاجية",
      description: "علاج الأمراض المزمنة من خلال التغذية المتخصصة",
      imageUrl: "/Therapeutic.jpeg",
    },
    {
      icon: Users,
      title: "الفئات الخاصة",
      description: "برامج غذائية مخصصة للفئات ذات الاحتياجات الخاصة",
      imageUrl: "/kid.jpeg",
    },
  ];

  const stats = [
    { number: "300+", label: "حالة ناجحة", icon: Users },
    { number: "95%", label: "نسبة النجاح", icon: TrendingUp },
    { number: "5+", label: "سنوات خبرة", icon: Award },
    { number: "24/7", label: "دعم متواصل", icon: Heart },
  ];

  return (
    <div className="min-h-screen ">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-20 sm:w-32 h-20 sm:h-32 bg-emerald-100/50 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-10 left-10 w-16 sm:w-24 h-16 sm:h-24 bg-teal-100/50 rounded-full blur-2xl animate-float" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`scroll-animate text-center p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 opacity-0 translate-y-8`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg animate-glow">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2 animate-count-up">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-emerald-50/30 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 sm:left-20 w-3 sm:w-4 h-3 sm:h-4 bg-emerald-400/30 rounded-full animate-bounce-slow" />
          <div className="absolute top-40 right-16 sm:right-32 w-4 sm:w-6 h-4 sm:h-6 bg-teal-400/40 rotate-45 animate-spin-slow" />
          <div className="absolute bottom-32 left-20 sm:left-40 w-2 sm:w-3 h-2 sm:h-3 bg-cyan-400/50 rounded-full animate-ping-slow" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="scroll-animate opacity-0  order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-2xl sm:rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse-slow" />

                {/* Responsive YouTube Embed */}
                <div className="relative w-full pt-[56.25%] rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/G4BTelcPzdQ?si=FILLJ-8pad1Ya7Jp"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg animate-float">
                  <p className="font-bold text-sm sm:text-lg">+5 سنوات</p>
                  <p className="text-xs sm:text-sm opacity-90">من الخبرة</p>
                </div>
              </div>
            </div>

            <div className="scroll-animate opacity-0 lg:translate-x-8 animation-delay-300 order-1 lg:order-2 ">
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-emerald-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-shimmer">
                <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 animate-pulse" />
                <span>من نحن</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 animate-fade-in-up animation-delay-400">
                عيادة متخصصة في
                <span className="text-gradient-animated block">
                  {" "}
                  التغذية العلاجية
                </span>
              </h2>

              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed animate-fade-in-up animation-delay-600">
                نحن عيادة التغذية العلاجية والحميات، نقدم خدمات واستشارات متخصصة
                في مجال التغذية العلاجية والحميات الغذائية. نتميز بنهج علمي مخصص
                لكل حالة، مع متابعة دقيقة ومستمرة من قبل أخصائية تغذية معتمدة.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-800">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg animate-glow flex-shrink-0">
                    <Target className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-gray-900">
                      نهج مخصص
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      خطة مبنية على تقييم دقيق
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-1000">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg animate-glow flex-shrink-0">
                    <Award className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-gray-900">
                      خبرة معتمدة
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      أخصائية تغذية مؤهلة
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Goals */}
      {/* <section className="py-16 sm:py-20 bg-white relative overflow-hidden">

        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%2310b981&quot; fillOpacity=&quot;0.03&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;1&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse-slow" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 sm:mb-16 scroll-animate opacity-0 translate-y-8">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <Eye className="w-3 sm:w-4 h-3 sm:h-4 animate-pulse" />
              <span>رسالتنا ورؤيتنا</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 animate-fade-in-up animation-delay-200">
              نسعى لتقديم أفضل الخدمات
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
              في مجال التغذية العلاجية والحميات الغذائية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Target,
                title: "الرسالة",
                description:
                  "نقدم في عيادتنا خططًا غذائية مخصصة ومدروسة علمياً لتحسين الحالة الصحية والوصول للوزن المثالي.",
                gradient: "from-emerald-500 to-emerald-600",
                bgGradient: "from-emerald-100 to-emerald-200",
              },
              {
                icon: Eye,
                title: "الرؤية",
                description: "نطمح لأن نكون الخيار الأول في مجال التغذية العلاجية والحميات الغذائية في المنطقة.",
                gradient: "from-teal-500 to-teal-600",
                bgGradient: "from-teal-100 to-teal-200",
              },
              {
                icon: Award,
                title: "الأهداف",
                description: null,
                gradient: "from-cyan-500 to-cyan-600",
                bgGradient: "from-cyan-100 to-cyan-200",
                goals: ["تحسين الحالة الصحية", "نشر الوعي الغذائي", "رعاية فعالة ومتخصصة"],
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`scroll-animate bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-2 hover:scale-105 opacity-0 translate-y-8`}
                style={{ animationDelay: `${600 + index * 200}ms` }}
              >
                <div className="relative mb-4 sm:mb-6">
                  <div
                    className={`w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br ${item.bgGradient} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300 animate-glow`}
                  >
                    <item.icon
                      className={`w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl sm:rounded-2xl animate-shimmer" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">{item.title}</h3>

                {item.description ? (
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.description}</p>
                ) : (
                  <ul className="text-sm sm:text-base text-gray-600 space-y-2 sm:space-y-3 text-right">
                    {item.goals?.map((goal, goalIndex) => (
                      <li
                        key={goalIndex}
                        className="flex items-center gap-2 sm:gap-3 animate-fade-in-up"
                        style={{ animationDelay: `${1000 + goalIndex * 200}ms` }}
                      >
                        <div
                          className={`w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gradient-to-r ${item.gradient} rounded-full animate-pulse flex-shrink-0`}
                        />
                        {goal}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 sm:right-20 w-24 sm:w-40 h-24 sm:h-40 bg-emerald-200/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-10 sm:left-20 w-20 sm:w-32 h-20 sm:h-32 bg-teal-200/20 rounded-full blur-2xl animate-float-delayed" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 sm:mb-16 scroll-animate opacity-0 translate-y-8">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-emerald-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Heart className="w-3 sm:w-4 h-3 sm:h-4 animate-pulse" />
              <span>خدماتنا المتخصصة</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 animate-fade-in-up animation-delay-200">
              خدمات شاملة في
              <span className="text-gradient-animated block">
                {" "}
                التغذية العلاجية
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
              نقدم مجموعة شاملة من الخدمات المتخصصة في التغذية العلاجية والحميات
              الغذائية
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`scroll-animate opacity-0 translate-y-8`}
                style={{ animationDelay: `${600 + index * 150}ms` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialist Info */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-5 sm:left-10 w-4 sm:w-6 h-4 sm:h-6 bg-emerald-400/20 rounded-full animate-bounce-slow" />
          <div className="absolute bottom-20 right-10 sm:right-20 w-6 sm:w-8 h-6 sm:h-8 bg-teal-400/20 rotate-45 animate-spin-slow" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 scroll-animate opacity-0 translate-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="animate-fade-in-up animation-delay-200 order-2 lg:order-1">
                <div className=" inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                  <Shield className="w-3 sm:w-4 h-3 sm:h-4 animate-pulse" />
                  <span>أخصائية معتمدة</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 animate-fade-in-up animation-delay-400">
                  أخصائية التغذية
                </h2>
                <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-gradient-animated animate-fade-in-up animation-delay-600">
                  سلمى محمد الحبيشي
                </h3>

                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-800">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg animate-glow flex-shrink-0">
                      <Award className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-700 font-medium">
                      خريجة جامعة العلوم والتكنولوجيا - 2019
                    </span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-1000">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg animate-glow flex-shrink-0">
                      <Heart className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-700 font-medium">
                      أخصائية تغذية حاصلة على درجة البكالوريوس
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed animate-fade-in-up animation-delay-1200">
                  أخصائية تغذية حاصلة على درجة البكالوريوس في التغذية العلاجية
                  من جامعة العلوم والتكنولوجيا. تتمتع بخبرة واسعة في مجال
                  التغذية العلاجية والحميات الغذائية، مع التركيز على تقديم خطط
                  غذائية مخصصة ومدروسة علمياً لكل حالة.
                </p>
              </div>

              <div className="relative animate-fade-in-up animation-delay-400 order-1 lg:order-2">
                <div className="relative group">
                  <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-2xl sm:rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse-slow" />

                  <div className="relative">
                    <Image
                      src="/office-salma.jpg"
                      alt="أخصائية التغذية سلمى محمد الحبيشي"
                      width={800} // Specify width
                      height={600} // Specify height
                      className="w-full h-auto rounded-xl sm:rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Experience badge */}
                    <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg animate-float hover:scale-105 transition-all duration-300">
                      <p className="font-bold text-sm sm:text-xl">+5 سنوات</p>
                      <p className="text-xs sm:text-sm opacity-90">
                        في التغذية العلاجية
                      </p>
                    </div>

                    {/* Success rate badge */}
                    <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 animate-bounce-slow hover:scale-105 transition-all duration-300">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <div className="w-2 sm:w-3 h-2 sm:h-3 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-xs sm:text-sm font-semibold text-gray-700">
                          نسبة نجاح 95%
                        </span>
                      </div>
                    </div>

                    {/* Certification badge */}
                    <div className="absolute top-1/2 -left-4 sm:-left-8 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 animate-float-delayed hover:scale-105 transition-all duration-300 hidden sm:block">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <Shield className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-600" />
                        <div>
                          <div className="font-bold text-xs text-gray-900">
                            معتمدة
                          </div>
                          <div className="text-xs text-gray-600">رسمياً</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

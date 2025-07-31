import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-white font-bold">ع</span>
              </div>
              <h3 className="text-xl font-bold">عيادة التغذية العلاجية</h3>
            </div>
            <p className="text-gray-300 mb-4">
              نقدم خدمات واستشارات متخصصة في مجال التغذية العلاجية والحميات الغذائية مع خطط مخصصة لكل حالة.
            </p>
            <div className="flex gap-4">
              <Link href="https://www.facebook.com/nutrsalma" className="text-gray-300 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="https://www.instagram.com/nutrsalma" className="text-gray-300 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="https://twitter.com/nutrsalma" className="text-gray-300 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="https://www.youtube.com/@nutrsalma" className="text-gray-300 hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-primary transition-colors">
                  الخدمات
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-primary transition-colors">
                  الأسئلة الشائعة
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">خدماتنا</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">تحليل مكونات الجسم</span>
              </li>
              <li>
                <span className="text-gray-300">خطط خسارة الوزن</span>
              </li>
              <li>
                <span className="text-gray-300">التغذية العلاجية</span>
              </li>
              <li>
                <span className="text-gray-300">تغذية الفئات الخاصة</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">معلومات التواصل</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-gray-300">الدائري - الجامعة الجديدة - برج الرشيد</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-300">+967771794448</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-gray-300">nutrsalma@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">© 2025 عيادة التغذية العلاجية والحميات. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}

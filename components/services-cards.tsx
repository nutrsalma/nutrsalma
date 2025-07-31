import { BackgroundGradient } from "@/components/ui/background-gradient";

interface ServiceCardProps {
  imageUrl?: string;
  title: string;
  description: string;
  features: string[];
  className?: string; // Optional extra className for flexibility
}

export default function ServiceCard({
  imageUrl,
  title,
  description,
  features,
  className = "",
}: ServiceCardProps) {
  // Use the provided imageUrl or fallback to clinckServices.jpg
  const bgImage = imageUrl || "/clinckServices.jpg";

  return (
    <BackgroundGradient className={`rounded-3xl p-1 h-full group ${className}`}>
      <div
        className="relative flex flex-col h-full min-h-[430px] rounded-3xl overflow-hidden bg-white"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Multi-layer overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full p-6 pt-20 text-white">
          {/* Header Section */}
          <div className="flex-1 flex flex-col justify-center text-center mb-6">
            <h3 className="text-2xl font-bold mb-4 leading-tight">{title}</h3>
            <p className="text-gray-200 leading-relaxed text-sm opacity-90">
              {description}
            </p>
          </div>

          {/* Features Section */}
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-4 border border-white/10 mt-auto">
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center group/item">
                  <div className="relative mr-3 flex-shrink-0">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
                    <div className="absolute inset-0 w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-sm opacity-50"></div>
                  </div>
                  <span className="text-sm text-gray-100 group-hover/item:text-white transition-colors duration-200">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Top-Right Element */}
          <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full opacity-80"></div>
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-cyan-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>
    </BackgroundGradient>
  );
}

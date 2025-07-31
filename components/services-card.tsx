import { BackgroundGradient } from "@/components/ui/background-gradient";

interface ServiceCardProps {
  imageUrl?: string;
  title: string;
  description: string;
}

export default function ServiceCard({
  imageUrl,
  title,
  description,
}: ServiceCardProps) {
  // Use the provided imageUrl or fallback to clinckServices.jpg
  const bgImage = imageUrl || "/clinckServices.jpg"; // Make sure clinckServices.jpg is in your public folder

  return (
    <BackgroundGradient className="rounded-3xl p-1 h-full group">
      <div
        className="relative  h-[400px] rounded-3xl overflow-hidden bg-white"
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
        <div className="relative z-10 flex flex-col h-full p-6 pt-20 text-white ">
          {/* Header Section */}
          <div className="flex-1 flex flex-col justify-end text-center mb-6  ">
            <h3 className="text-2xl font-bold mb-4 leading-tight ">{title}</h3>
            <p className="text-gray-200 leading-relaxed text-sm opacity-90 ">
              {description}
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full opacity-80"></div>
          </div>
        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-cyan-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>
    </BackgroundGradient>
  );
}

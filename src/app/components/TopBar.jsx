import { Phone, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full bg-[#DE3B00] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-2">
        
        {/* Left Text */}
        <p className="text-center md:text-left">
          "Working with Brooklyn Designs changed how we show up." ~ John Maggio
        </p>

        {/* Right Contact Info */}
        <div className="flex items-center gap-4 flex-wrap justify-center md:justify-end">
          
          {/* Phone */}
          <div className="flex items-center gap-1">
            <Phone size={14} />
            <span>+1 724 246-4538</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-1">
            <Mail size={14} />
            <span>info@thebrooklyndesign.com</span>
          </div>

        </div>
      </div>
    </div>
  );
}
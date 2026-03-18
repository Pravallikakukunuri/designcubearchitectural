import { Phone, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingSocialBar = () => {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/917013130143"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
      <a
        href="https://instagram.com/design_cube_dc"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Instagram"
      >
        <Instagram size={22} />
      </a>
      <a
        href="tel:+917013130143"
        className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Call Us"
      >
        <Phone size={22} />
      </a>
    </div>
  );
};

export default FloatingSocialBar;

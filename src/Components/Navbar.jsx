import React, { useState, useEffect } from "react";
import { Menu, MessageCircle, X, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // WhatsApp link
  const whatsappMessage = "Welcome to ComplianceBro! How can we help you today?";
  const wpUrl = `https://wa.me/917000081173?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0B1220] shadow-lg" : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO */}
          <div className="flex items-center gap-6">
            <h1
              className={`text-2xl md:text-3xl font-bold ${
                scrolled ? "text-white" : "text-[#0C3C46]"
              }`}
            >
              Compliance<span className="text-[#00A7B6]">Bro</span>
            </h1>

            <span
              className={`hidden lg:inline px-3 py-1 text-xs font-semibold rounded-full uppercase ${
                scrolled
                  ? "bg-[#00A7B6] text-white"
                  : "bg-emerald-100 text-emerald-600"
              }`}
            >
              Early Bird Offer
            </span>
          </div>

          {/* DESKTOP MENU */}
          <div
            className={`hidden lg:flex items-center gap-10 text-[15px] font-semibold ${
              scrolled ? "text-gray-200" : "text-gray-700"
            }`}
          >
            <button className="hover:text-red-500">Startup India</button>

            {/* DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown(true)}
              onMouseLeave={() => setOpenDropdown(false)}
            >
              <button className="hover:text-red-500">Registration</button>

              {openDropdown && (
                <div className="absolute -left-28 mt-1 bg-[#F7F9FB] border border-gray-200 shadow-2xl rounded-xl p-8 w-[950px] grid grid-cols-4 gap-12 z-50">
                  
                  {/* COLUMN — Company */}
                  <div>
                    <h3 className="text-[13px] font-bold text-[#0B1220] tracking-wide">
                      COMPANY REGISTRATION
                    </h3>
                    <ul className="mt-3 space-y-3 text-[14px] text-gray-800">
                      {[
                        "Proprietorship Registration",
                        "Partnership Registration",
                        "Limited Liability Partnership",
                        "One Person Company Registration",
                        "Private Limited Company Registration",
                        "Public Limited Company Registration",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2 hover:text-[#00A7B6] transition">
                          <ChevronRight size={16} className="text-red-600" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-[13px] font-bold text-[#0B1220] mt-6 tracking-wide">
                      SPECIAL ENTITY REGISTRATION
                    </h3>
                    <ul className="mt-3 space-y-3 text-[14px] text-gray-800">
                      {[
                        "Section-8 Company Registration",
                        "Trust Registration",
                        "Society Registration",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2 hover:text-[#00A7B6] transition">
                          <ChevronRight size={16} className="text-red-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* COLUMN — Industry */}
                  <div>
                    <h3 className="text-[13px] font-bold text-[#0B1220] tracking-wide">
                      INDUSTRY SPECIFIC REGISTRATION
                    </h3>
                    <ul className="mt-3 space-y-3 text-[14px] text-gray-800">
                      {["FSSAI Registration", "Import Export Code Registration"].map((item) => (
                        <li key={item} className="flex items-center gap-2 hover:text-[#00A7B6] transition">
                          <ChevronRight size={16} className="text-red-600" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-[13px] font-bold text-[#0B1220] mt-6 tracking-wide">
                      TAX REGISTRATION
                    </h3>
                    <ul className="mt-3 space-y-3 text-[14px] text-gray-800">
                      {["GST Registration", "PF ESI Registration"].map((item) => (
                        <li key={item} className="flex items-center gap-2 hover:text-[#00A7B6] transition">
                          <ChevronRight size={16} className="text-red-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* COLUMN — IPR */}
                  <div>
                    <h3 className="text-[13px] font-bold text-[#0B1220] tracking-wide">
                      INTELLECTUAL PROPERTY RIGHTS
                    </h3>
                    <ul className="mt-3 space-y-3 text-[14px] text-gray-800">
                      {["Trademark Registration", "Copyright"].map((item) => (
                        <li key={item} className="flex items-center gap-2 hover:text-[#00A7B6] transition">
                          <ChevronRight size={16} className="text-red-600" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-[13px] font-bold text-[#0B1220] mt-6 tracking-wide">
                      CERTIFICATION
                    </h3>
                    <ul className="mt-3 space-y-3 text-[14px] text-gray-800">
                      <li className="flex items-center gap-2 hover:text-[#00A7B6] transition">
                        <ChevronRight size={16} className="text-red-600" />
                        ISO Certification
                      </li>
                    </ul>
                  </div>

                  {/* COLUMN — After incorporation */}
                  <div>
                    <h3 className="text-[13px] font-bold text-[#0B1220] tracking-wide">
                      THINGS TO DO AFTER INCORPORATION
                    </h3>
                    <ul className="mt-3 space-y-3 text-[14px] text-gray-800">
                      {[
                        "Stage-1: Basic Necessity",
                        "Stage-2: Industry Specific Necessity",
                        "Stage-3: Go Live & Get Funding",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2 hover:text-[#00A7B6] transition">
                          <ChevronRight size={16} className="text-red-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              )}
            </div>

            <button className="hover:text-red-500">Compliance</button>
            <button className="hover:text-red-500">Go Online</button>
            <button className="hover:text-red-500">Tutorials</button>
            <button className="hover:text-red-500">Downloads</button>
            <button className="hover:text-red-500">Packages</button>

            {/* Contact Us */}
            <a
              href={wpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-red-500"
            >
              <MessageCircle size={18} className="text-green-500" />
              Contact Us
            </a>
          </div>

          {/* MOBILE ICON */}
          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X size={28} className={scrolled ? "text-white" : "text-gray-700"} />
            ) : (
              <Menu size={28} className={scrolled ? "text-white" : "text-gray-700"} />
            )}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden bg-white px-6 py-4 border-t shadow-md space-y-6">

          <button className="block w-full text-left font-semibold text-[18px] text-gray-800">
            Startup India
          </button>

          <button className="block w-full text-left font-semibold text-[18px] text-gray-800">
            Registration
          </button>

          <button className="block w-full text-left font-semibold text-[18px] text-gray-800">
            Compliance
          </button>

          <button className="block w-full text-left font-semibold text-[18px] text-gray-800">
            Go Online
          </button>

          <button className="block w-full text-left font-semibold text-[18px] text-gray-800">
            Tutorials
          </button>

          <button className="block w-full text-left font-semibold text-[18px] text-gray-800">
            Downloads
          </button>

          <button className="block w-full text-left font-semibold text-[18px] text-gray-800">
            Packages
          </button>

          <a
            href={wpUrl}
            className="flex items-center gap-2 font-semibold text-[18px] text-gray-800"
          >
            <MessageCircle className="text-green-600" size={20} />
            Contact Us
          </a>

        </div>
      )}
    </nav>
  );
}

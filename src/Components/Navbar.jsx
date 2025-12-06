import React, { useState, useEffect } from "react";
import { Menu, MessageCircle, X, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openCompliance, setOpenCompliance] = useState(false);

  // Mobile dropdown states
  const [mobileRegOpen, setMobileRegOpen] = useState(false);
  const [mobileCompOpen, setMobileCompOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappMessage = "Welcome to ComplianceBro! How can we help you today?";
  const wpUrl = `https://wa.me/917999981173?text=${encodeURIComponent(
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
            <Link
              to="/"
              className={`text-2xl md:text-3xl font-bold cursor-pointer ${
                scrolled ? "text-white" : "text-[#0C3C46]"
              }`}
            >
              Compliance<span className="text-[#00A7B6]">Bro</span>
            </Link>

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

          {/* -------------------- DESKTOP MENU -------------------- */}
          <div
            className={`hidden lg:flex items-center gap-10 text-[15px] font-semibold ${
              scrolled ? "text-gray-200" : "text-gray-700"
            }`}
          >
            <button className="hover:text-red-500">Startup India</button>

            {/* ----------- REGISTRATION DROPDOWN ----------- */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown(true)}
              onMouseLeave={() => setOpenDropdown(false)}
            >
              <button className="hover:text-red-500">Registration</button>

              {openDropdown && (
                <div
                  className="
                    absolute top-full left-1/2 -translate-x-1/2 mt-1
                    bg-[#F7F9FB] border border-gray-200 shadow-2xl 
                    rounded-xl p-8 w-[950px] max-w-[95vw]
                    grid grid-cols-4 gap-12 z-50
                  "
                >
                  {/* COMPANY REGISTRATION */}
                  <div>
                    <h3 className="text-[13px] font-bold text-[#0B1220]">
                      COMPANY REGISTRATION
                    </h3>
                    <ul className="mt-3 space-y-3 text-gray-800 text-[14px]">
                      {[
                        "Proprietorship Registration",
                        "Partnership Registration",
                        "Limited Liability Partnership",
                        "One Person Company Registration",
                        "Private Limited Company Registration",
                        "Public Limited Company Registration",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 hover:text-[#00A7B6]"
                        >
                          <ChevronRight className="text-red-600" size={16} />{" "}
                          {item}
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-[13px] font-bold mt-6">
                      SPECIAL ENTITY REGISTRATION
                    </h3>
                    <ul className="mt-3 space-y-3 text-gray-800 text-[14px]">
                      {[
                        "Section-8 Company Registration",
                        "Trust Registration",
                        "Society Registration",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 hover:text-[#00A7B6]"
                        >
                          <ChevronRight className="text-red-600" size={16} />{" "}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* INDUSTRY REGISTRATION */}
                  <div>
                    <h3 className="text-[13px] font-bold">
                      INDUSTRY SPECIFIC REGISTRATION
                    </h3>
                    <ul className="mt-3 space-y-3 text-gray-800 text-[14px]">
                      {[
                        "FSSAI Registration",
                        "Import Export Code Registration",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 hover:text-[#00A7B6]"
                        >
                          <ChevronRight className="text-red-600" size={16} />{" "}
                          {item}
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-[13px] font-bold mt-6">
                      TAX REGISTRATION
                    </h3>
                    <ul className="mt-3 space-y-3 text-gray-800 text-[14px]">
                      {["GST Registration", "PF ESI Registration"].map(
                        (item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 hover:text-[#00A7B6]"
                          >
                            <ChevronRight
                              className="text-red-600"
                              size={16}
                            />{" "}
                            {item}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* IPR */}
                  <div>
                    <h3 className="text-[13px] font-bold">
                      INTELLECTUAL PROPERTY RIGHTS
                    </h3>
                    <ul className="mt-3 space-y-3 text-gray-800 text-[14px]">
                      {["Trademark Registration", "Copyright"].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 hover:text-[#00A7B6]"
                        >
                          <ChevronRight className="text-red-600" size={16} />{" "}
                          {item}
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-[13px] font-bold mt-6">CERTIFICATION</h3>
                    <ul className="mt-3">
                      <li className="flex items-center gap-2 hover:text-[#00A7B6]">
                        <ChevronRight className="text-red-600" size={16} /> ISO
                        Certification
                      </li>
                    </ul>
                  </div>

                  {/* AFTER INCORPORATION */}
                  <div>
                    <h3 className="text-[13px] font-bold">
                      THINGS TO DO AFTER INCORPORATION
                    </h3>
                    <ul className="mt-3 space-y-3 text-gray-800 text-[14px]">
                      {[
                        "Stage-1: Basic Necessity",
                        "Stage-2: Industry Specific Necessity",
                        "Stage-3: Go Live & Get Funding",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 hover:text-[#00A7B6]"
                        >
                          <ChevronRight className="text-red-600" size={16} />{" "}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* ----------- COMPLIANCE DROPDOWN ----------- */}
            <div
              className="relative"
              onMouseEnter={() => setOpenCompliance(true)}
              onMouseLeave={() => setOpenCompliance(false)}
            >
              <button className="hover:text-red-500">Compliance</button>

              {openCompliance && (
                <div
                  className="
                    absolute top-full left-1/2 -translate-x-1/2 mt-1
                    bg-[#F7F9FB] border border-gray-200 shadow-2xl 
                    rounded-xl p-8 w-[1100px] max-w-[95vw]
                    grid grid-cols-4 gap-12 z-50
                  "
                >
                  {/* ENTITY-WISE COMPLIANCES */}
                  <div>
                    <h3 className="text-[13px] font-bold">
                      ENTITY-WISE COMPLIANCES
                    </h3>
                    <ul className="mt-3 space-y-3 text-gray-800 text-[14px]">
                      {[
                        "Proprietorship Compliances",
                        "Partnership Compliances",
                        "LLP Compliances",
                        "One Person Company Compliances",
                        "Private Limited Compliances",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 hover:text-[#00A7B6]"
                        >
                          <ChevronRight className="text-red-600" size={16} />{" "}
                          {item}
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-[13px] font-bold mt-6">
                      COMPANY LAW COMPLIANCES
                    </h3>
                    <ul className="mt-3 space-y-3 text-gray-800 text-[14px]">
                      {["ROC Annual Compliances", "ROC Event Compliances"].map(
                        (item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 hover:text-[#00A7B6]"
                          >
                            <ChevronRight
                              className="text-red-600"
                              size={16}
                            />{" "}
                            {item}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* TAX COMPLIANCES */}
                  <div>
                    <h3 className="text-[13px] font-bold">TAX COMPLIANCES</h3>
                    <ul className="mt-3 space-y-3 text-gray-800 text-[14px]">
                      {[
                        "GST Compliances",
                        "Income Tax Filing",
                        "BookKeeping & Accounting",
                        "PF ESI Compliances",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 hover:text-[#00A7B6]"
                        >
                          <ChevronRight className="text-red-600" size={16} />{" "}
                          {item}
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-[13px] font-bold mt-6">TAX PLANNING</h3>
                    <ul className="mt-3 space-y-3 text-gray-800 text-[14px]">
                      {[
                        "Tax Planning & Tax Saving Consultation",
                        "Advance Tax Calculation",
                        "Personal Tax Advisory",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 hover:text-[#00A7B6]"
                        >
                          <ChevronRight className="text-red-600" size={16} />{" "}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ITR FILING SERVICES */}
                  <div>
                    <h3 className="text-[13px] font-bold">ITR FILING SERVICES</h3>
                    <ul className="mt-3 space-y-3 text-gray-800 text-[14px]">
                      {[
                        "Expert-Assisted ITR Filing",
                        "DIY ITR Filing",
                        "Belated ITR Filing",
                        "Revised ITR Filing",
                        "ITR Filing for Capital Gains",
                        "ITR Filing for Stock Market / F&O / Crypto",
                        "ITR Filing for Freelancers & Professionals",
                        "ITR Filing for Business Owners",
                        "NRI / Foreign Income ITR Filing",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 hover:text-[#00A7B6]"
                        >
                          <ChevronRight className="text-red-600" size={16} />{" "}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* OTHER SERVICES */}
                  <div>
                    <h3 className="text-[13px] font-bold">OTHER SERVICES</h3>
                    <ul className="mt-3 space-y-3 text-gray-800 text-[14px]">
                      {[
                        "Accounting & Bookkeeping Services",
                        "Business Tax Compliance",
                        "Startup & Business Registration Support",
                        "PAN Services",
                        "GST Registration & Filing",
                        "TDS Return Filing",
                        "Handling Income Tax Notices",
                        "Tax Appeals & Dispute Resolution",
                        "US Tax Filing Services",
                        "Post-Filing Support & Compliance",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 hover:text-[#00A7B6]"
                        >
                          <ChevronRight className="text-red-600" size={16} />{" "}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* OTHER MENU BUTTONS */}
            <button className="hover:text-red-500">Go Online</button>
            <button className="hover:text-red-500">Latest update</button>
            <button className="hover:text-red-500">Gallery</button>

            <a
              href={wpUrl}
              className="flex items-center gap-1 hover:text-red-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} className="text-green-500" />
              Contact Us
            </a>
          </div>

          {/* -------------------- MOBILE MENU ICON -------------------- */}
          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X size={28} className={scrolled ? "text-white" : "text-gray-700"} />
            ) : (
              <Menu size={28} className={scrolled ? "text-white" : "text-gray-700"} />
            )}
          </button>
        </div>
      </div>

      {/* -------------------- MOBILE MENU -------------------- */}
      {isOpen && (
        <div className="lg:hidden bg-white px-6 py-4 border-t shadow-md space-y-6">
          <button className="block text-left font-semibold text-[18px] text-gray-800">
            Startup India
          </button>

          {/* MOBILE REGISTRATION DROPDOWN */}
          <div>
            <button
              onClick={() => setMobileRegOpen(!mobileRegOpen)}
              className="w-full text-left font-semibold text-[18px] text-gray-800 flex justify-between items-center"
            >
              Registration
              <ChevronRight
                className={`transition-transform ${
                  mobileRegOpen ? "rotate-90" : ""
                }`}
              />
            </button>

            {mobileRegOpen && (
              <div className="pl-4 mt-3 space-y-2 text-gray-700 max-h-72 overflow-y-auto pr-3 border-l-2 border-gray-200">
                <p className="font-bold text-[15px] mt-2">Company Registration</p>
                {[
                  "Proprietorship Registration",
                  "Partnership Registration",
                  "Limited Liability Partnership",
                  "One Person Company Registration",
                  "Private Limited Company Registration",
                  "Public Limited Company Registration",
                ].map((item) => (
                  <p key={item} className="text-[14px] pl-3">
                    • {item}
                  </p>
                ))}

                <p className="font-bold text-[15px] mt-4">Special Entity Registration</p>
                {[
                  "Section-8 Company Registration",
                  "Trust Registration",
                  "Society Registration",
                ].map((item) => (
                  <p key={item} className="text-[14px] pl-3">
                    • {item}
                  </p>
                ))}

                <p className="font-bold text-[15px] mt-4">Industry Registration</p>
                {[
                  "FSSAI Registration",
                  "Import Export Code Registration",
                ].map((item) => (
                  <p key={item} className="text-[14px] pl-3">
                    • {item}
                  </p>
                ))}

                <p className="font-bold text-[15px] mt-4">Tax Registration</p>
                {["GST Registration", "PF ESI Registration"].map((item) => (
                  <p key={item} className="text-[14px] pl-3">
                    • {item}
                  </p>
                ))}

                <p className="font-bold text-[15px] mt-4">Certification</p>
                <p className="text-[14px] pl-3">• ISO Certification</p>
              </div>
            )}
          </div>

          {/* MOBILE COMPLIANCE DROPDOWN */}
          <div>
            <button
              onClick={() => setMobileCompOpen(!mobileCompOpen)}
              className="w-full text-left font-semibold text-[18px] text-gray-800 flex justify-between items-center"
            >
              Compliance
              <ChevronRight
                className={`transition-transform ${
                  mobileCompOpen ? "rotate-90" : ""
                }`}
              />
            </button>

            {mobileCompOpen && (
              <div className="pl-4 mt-3 space-y-2 text-gray-700 max-h-72 overflow-y-auto pr-3 border-l-2 border-gray-200">
                <p className="font-bold text-[15px]">Entity-wise Compliances</p>
                {[
                  "Proprietorship Compliances",
                  "Partnership Compliances",
                  "LLP Compliances",
                  "One Person Company Compliances",
                  "Private Limited Compliances",
                ].map((item) => (
                  <p key={item} className="text-[14px] pl-3">
                    • {item}
                  </p>
                ))}

                <p className="font-bold text-[15px] mt-4">Company Law Compliances</p>
                {["ROC Annual Compliances", "ROC Event Compliances"].map((item) => (
                  <p key={item} className="text-[14px] pl-3">
                    • {item}
                  </p>
                ))}

                <p className="font-bold text-[15px] mt-4">Tax Compliances</p>
                {[
                  "GST Compliances",
                  "Income Tax Filing",
                  "BookKeeping & Accounting",
                  "PF ESI Compliances",
                ].map((item) => (
                  <p key={item} className="text-[14px] pl-3">
                    • {item}
                  </p>
                ))}

                <p className="font-bold text-[15px] mt-4">ITR Filing Services</p>
                {[
                  "Expert-Assisted ITR Filing",
                  "DIY ITR Filing",
                  "Belated ITR Filing",
                  "Revised ITR Filing",
                  "ITR Filing for Capital Gains",
                  "ITR Filing for Stock Market / F&O / Crypto",
                  "ITR Filing for Freelancers & Professionals",
                  "ITR Filing for Business Owners",
                  "NRI / Foreign Income ITR Filing",
                ].map((item) => (
                  <p key={item} className="text-[14px] pl-3">
                    • {item}
                  </p>
                ))}

                <p className="font-bold text-[15px] mt-4">Other Services</p>
                {[
                  "Accounting & Bookkeeping Services",
                  "Business Tax Compliance",
                  "Startup & Business Registration Support",
                  "PAN Services",
                  "GST Registration & Filing",
                  "TDS Return Filing",
                  "Handling Income Tax Notices",
                  "Tax Appeals & Dispute Resolution",
                  "US Tax Filing Services",
                  "Post-Filing Support & Compliance",
                ].map((item) => (
                  <p key={item} className="text-[14px] pl-3">
                    • {item}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* OTHER MOBILE BUTTONS */}
          <button className="block text-left font-semibold text-[18px] text-gray-800">
            Go Online
          </button>
          <button className="block text-left font-semibold text-[18px] text-gray-800">
            Tutorials
          </button>
          <button className="block text-left font-semibold text-[18px] text-gray-800">
            Packages
          </button>

          <a href={wpUrl} className="flex items-center gap-2 text-[18px] font-semibold text-gray-800">
            <MessageCircle className="text-green-600" size={20} />
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}

import React from "react";
import { Star, ShieldCheck, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <header className="bg-white pt-12 pb-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SECTION */}
        <div className="space-y-6 z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            India's Most Trusted <br />
            <span className="text-emerald-600">Income Tax e-Filing</span> Platform
          </h1>

          <p className="text-lg text-gray-600 max-w-lg">
            Maximize your tax refund with ComplianceBro. File your ITR in under 4 minutes with
            our AI-powered engine or hire a Personal CA.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">

            {/* File ITR Button */}
            <button
              className="
                bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg
                shadow-xl transition-transform duration-200 hover:-translate-y-1 active:scale-95
              "
            >
              File ITR Now
            </button>

            {/* Book Tax Expert → Smooth Zoom */}
            <Link
              to="/service/book-expert"
              className="
                bg-white border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-xl
                font-bold text-lg text-center
                transition-transform duration-300 ease-out
                hover:scale-105 active:scale-95 hover:bg-emerald-50
              "
            >
              Book a Tax Expert
            </Link>

          </div>

          {/* RATINGS */}
          <div className="flex flex-wrap items-center gap-6 pt-6 text-sm font-semibold text-gray-700">
            <div className="flex items-center gap-2">
              <Star className="text-yellow-400 w-5 h-5" /> 4.9/5 Rating
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" /> Data Encrypted
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
            <div>Authorized E-Return Intermediary</div>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative z-10">
          <img
            src="https://placehold.co/600x500/e6fffa/059669?text=ComplianceBro+App+Dashboard"
            alt="Compliance dashboard"
            className="w-full h-auto rounded-3xl shadow-2xl"
          />

          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 hidden lg:block">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-100 p-2 rounded-full text-emerald-600">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Refund Status</p>
                <p className="font-bold text-slate-900">Optimized by AI</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Background Light Effect */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50"></div>
    </header>
  );
}

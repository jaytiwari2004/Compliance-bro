import React from "react";
import { ChevronRight } from "lucide-react";

export default function ServiceCard({ icon, title, text, linkText, badge }){
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group relative">
      {badge && <div className="absolute top-0 right-0 bg-emerald-600 text-white text-xs px-3 py-1 rounded-bl-lg font-bold">{badge}</div>}
      <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-lg mb-6 flex items-center justify-center font-bold group-hover:scale-110 transition duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
      <p className="text-gray-600 text-sm mb-6 leading-relaxed">{text}</p>
      <a href="#" className="text-emerald-600 font-semibold hover:text-emerald-700 flex items-center gap-1 text-sm group-hover:gap-2 transition-all">
        {linkText} <ChevronRight className="w-4 h-4" />
      </a>
    </div>
  );
}

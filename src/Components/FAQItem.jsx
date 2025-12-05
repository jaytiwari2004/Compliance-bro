import React from "react";
import { ChevronDown } from "lucide-react";

export default function FAQItem({ question, answer }){
  return (
    <details className="group bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <summary className="flex justify-between items-center cursor-pointer p-4 font-semibold text-slate-800 list-none">
        {question}
        <ChevronDown className="w-5 h-5 text-emerald-600 transition-transform duration-300 group-open:rotate-180" />
      </summary>
      <div className="p-4 text-gray-600 text-sm border-t border-gray-100 bg-gray-50/50">
        {answer}
      </div>
    </details>
  );
}

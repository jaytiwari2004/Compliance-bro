import React from "react";
import { CheckCircle } from "lucide-react";

export default function Features(){
  const items = [
    { title: "Smart Document Reading", text: "Upload Form 16, 26AS, or Broker Statements and we auto-fill." },
    { title: "Capital Gains Optimized", text: "Automated STCG/LTCG calculations for Equity, Mutual Funds." },
    { title: "Notice Protection", text: "System flags inconsistencies before you file." }
  ];

  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose <span className="text-emerald-500">ComplianceBro AI?</span></h2>
          <p className="text-gray-300 mb-8 text-lg">We have revolutionized tax compliance in India. Experience the future of financial filing with our intelligent engine.</p>
          <ul className="space-y-6">
            {items.map((it, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="bg-emerald-500/20 p-1 rounded"><CheckCircle className="text-emerald-500 w-5 h-5" /></div>
                <div>
                  <strong className="text-white block mb-1">{it.title}</strong>
                  <p className="text-gray-400 text-sm">{it.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-30"></div>
          <img src="https://placehold.co/600x400/1e293b/059669?text=AI+Tax+Analysis+Tool" alt="AI tax" className="relative rounded-xl shadow-2xl border border-gray-700 w-full" />
        </div>
      </div>
    </section>
  );
}

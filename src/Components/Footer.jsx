import React from "react";
import { ShieldCheck, ChevronRight } from "lucide-react";

export default function Footer(){
  const column = (title, items) => (
    <div>
      <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">{title}</h4>
      <ul className="space-y-3">
        {items.map(i => <li key={i}><a href="#" className="hover:text-emerald-500 transition">{i}</a></li>)}
      </ul>
    </div>
  );

  return (
    <footer className="bg-slate-900 text-gray-300 py-16 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {column("Tax Filing", ['File ITR Online', 'Upload Form 16', 'CA Assisted Filing', 'Refund Status', 'NRI ITR Filing'])}
          {column("Tools", ['Income Tax Calculator', 'HRA Exemption', 'Rent Receipt Maker', 'SIP Returns', 'New vs Old Regime'])}
          {column("Business", ['GST Registration', 'File GST Returns', 'TDS Filing', 'Company Incorporation', 'Digital Signature'])}

          <div className="col-span-2 lg:col-span-2">
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Contact Us</h4>
            <p className="text-2xl text-white font-bold mb-1">+917000081173</p>
            <p className="text-emerald-500 mb-6">support@compliancebro.in</p>

            <h5 className="text-white font-bold mb-3 text-xs uppercase">Subscribe to Updates</h5>
            <div className="flex gap-2 max-w-sm">
              <input type="email" placeholder="Your Email" className="bg-slate-800 border-none rounded-lg px-4 py-2 w-full text-sm text-white focus:ring-2 focus:ring-emerald-500 outline-none"/>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-bold transition">
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2025 ComplianceBro. All Rights Reserved.</p>
          <div className="flex gap-4 items-center">
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span> ISO 27001 Secure</span>
            <span>|</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> SSL Encrypted</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

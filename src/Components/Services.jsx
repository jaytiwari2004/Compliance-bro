import React from "react";
import ServiceCard from "./ServiceCard";
import { FileText, Star, TrendingUp, Globe, ShieldCheck } from "lucide-react";

export default function Services(){
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Premium Tax Services</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">From DIY filing to dedicated Chartered Accountant support.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard icon={<FileText className="w-6 h-6" />} title="Self ITR Filing" text="File your taxes independently using our guided wizard. It's fast, secure, and error-free." linkText="Start Filing Free" />
          <ServiceCard icon={<Star className="w-6 h-6" />} title="CA Assisted Filing" text="Get a dedicated eCA to handle your filing. We find every deduction to maximize your refund." linkText="Book an Expert" badge="Best Seller" />
          <ServiceCard icon={<TrendingUp className="w-6 h-6" />} title="Capital Gains" text="Expert computation for sale of property, stocks, mutual funds, and crypto assets." linkText="Calculate Now" />
          <ServiceCard icon={<Globe className="w-6 h-6" />} title="NRI Tax Services" text="Comprehensive tax solutions for NRIs with Indian income sources and DTAA compliance." linkText="Consult Experts" />
          <ServiceCard icon={<FileText className="w-6 h-6" />} title="Upload Form 16" text="The fastest way to file. Simply upload your PDF and let our system do the rest." linkText="Upload PDF" />
          <ServiceCard icon={<ShieldCheck className="w-6 h-6" />} title="Notice Management" text="Received a notice u/s 143(1)? Our experts draft legal responses for you." linkText="Resolve Notice" />
        </div>
      </div>
    </section>
  );
}

import React from "react";

import TopNotice from "../Components/Topnotice.jsx";
import Navbar from "../Components/Navbar.jsx";
import Hero from "../Components/Hero";
import Features from "../Components/Features";
import ProcessStep from "../Components/ProcessStep";
import Services from "../Components/Services";
import FAQ from "../Components/FAQ";
import Footer from "../Components/Footer";

export default function Home(){
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-800">
      
     
      <Navbar />
      <Hero />

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Seamless Filing Process</h2>
            <p className="text-gray-500 mt-3 text-lg">5 Simple Steps to e-file your Income Tax Return</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <ProcessStep number="1" title="Easy Sign Up" desc="Securely create your account in seconds." />
            <ProcessStep number="2" title="Select Income" desc="Salary, Capital Gains, Crypto, or Rental." />
            <ProcessStep number="3" title="Auto-Fetch" desc="Data pulled directly from IT Dept." />
            <ProcessStep number="4" title="Regime Check" desc="AI compares Old vs New regimes." />
            <ProcessStep number="5" title="e-File Instantly" desc="Submit with one click & get receipt." />
          </div>
        </div>
      </section>

      <Features />
      <Services />
      <FAQ />
      <Footer />
    </div>
  );
}

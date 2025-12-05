import React from "react";
import FAQItem from "./FAQItem";

export default function FAQ(){
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-slate-900">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <FAQItem question="What is the deadline for filing ITR for FY 2024-25?" answer="The due date to file your Income Tax Return (ITR) is usually July 31st. If you miss this, you can file a belated return until December 31st with a penalty." />
          <FAQItem question="Why choose ComplianceBro over the Govt Portal?" answer="We offer a simplified interface that files in 4 minutes, Expert CA Assistance, AI-driven tax saving recommendations, and automated capital gains computation." />
          <FAQItem question="Is my financial data safe?" answer="Absolutely. We use 256-bit SSL encryption and are an authorized E-Return Intermediary (ERI) by the Income Tax Department." />
        </div>
      </div>
    </section>
  );
}

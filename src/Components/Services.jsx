import React from "react";
import ServiceCard from "./ServiceCard";
import {
  ClipboardDocumentListIcon,
  ClipboardDocumentCheckIcon,
  DocumentTextIcon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  BuildingLibraryIcon,
  ClipboardIcon,
  ChartBarSquareIcon,
  CalculatorIcon,
  GlobeAltIcon,
  UserGroupIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";

const Services = () => {
  const allServices = [
    // ENTITY WISE COMPLIANCES
    "Proprietorship Compliances",
    "Partnership Compliances",
    "LLP Compliances",
    "One Person Company Compliances",
    "Private Limited Compliances",

    // COMPANY LAW
    "ROC Annual Compliances",
    "ROC Event Compliances",
    "ROC Annual Filing",

    // TAX COMPLIANCES
    "GST Compliances",
    "Income Tax Filing",
    "BookKeeping & Accounting",
    "PF ESI Compliances",

    // ITR SERVICES
    "Expert-Assisted ITR Filing",
    "DIY ITR Filing",
    "Belated ITR Filing",
    "Revised ITR Filing",
    "ITR Filing for Capital Gains",
    "ITR Filing for Stock Market / F&O / Crypto",
    "ITR Filing for Freelancers & Professionals",
    "ITR Filing for Business Owners",
    "NRI / Foreign Income ITR Filing",
    "Tax Planning & Tax Saving Consultation",
    "Advance Tax Calculation",
    "Personal Tax Advisory",
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
  ];

  const icons = [
    DocumentTextIcon,
    ClipboardDocumentListIcon,
    ClipboardIcon,
    BriefcaseIcon,
    BuildingOffice2Icon,
    BuildingLibraryIcon,
    ClipboardDocumentCheckIcon,
    DocumentTextIcon,
    ChartBarSquareIcon,
    CalculatorIcon,
    UserGroupIcon,
    BanknotesIcon,
  ];

  return (
    <section className="py-16 bg-[#f4f8fb]">
      <div className="max-w-7xl mx-auto px-4">
        
        <h2 className="text-3xl font-bold text-center mb-10">
          All Services We Offer
        </h2>

        {/* GRID OF ALL 34 SERVICES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allServices.map((name, index) => {
            const Icon = icons[index % icons.length];
            
            return (
              <ServiceCard
                key={index}
                id={index}
                Icon={Icon}
                title={name}
                desc=""
                link="Know More →"
              />
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;

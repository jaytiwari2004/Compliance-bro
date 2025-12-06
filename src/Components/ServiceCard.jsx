import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ Icon, title, desc, link, id }) => {
  return (
    <Link to={`/service/${id}`}>
      <div
        className="
          bg-white p-6 rounded-xl shadow-md border border-gray-200
          transition-all duration-300 cursor-pointer group
          hover:bg-blue-50 hover:shadow-2xl hover:-translate-y-2 
          hover:scale-[1.05] hover:border-blue-300
        "
      >
        {/* ICON */}
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4">
          <Icon className="w-7 h-7 text-gray-700" />
        </div>

        {/* TITLE */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {title}
        </h3>

        {/* KNOW MORE + SINGLE ANIMATED ARROW */}
        <span
          className="
            text-green-700 font-semibold text-sm flex items-center gap-1
            transition-all duration-300 group-hover:text-green-900
          "
        >
          {link}

          {/* Animate the arrow you see */}
          <span
            className="
              inline-block transition-all duration-300 origin-left
              group-hover:scale-x-150 group-hover:translate-x-1
            "
          >
            
          </span>
        </span>
      </div>
    </Link>
  );
};

export default ServiceCard;

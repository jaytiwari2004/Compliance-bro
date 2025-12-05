import React from "react";

export default function ProcessStep({ number, title, desc }){
  return (
    <div className="text-center group p-4">
      <div className="w-16 h-16 mx-auto bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4 group-hover:bg-emerald-600 group-hover:text-white transition shadow-sm">
        {number}
      </div>
      <h3 className="font-bold text-lg mb-2 text-slate-800">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}

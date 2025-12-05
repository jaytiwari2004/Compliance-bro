import React from "react";
import { AlertTriangle } from "lucide-react";

export default function TopNotice(){
  return (
    <div className="bg-amber-50 text-amber-900 py-2 px-4 text-center text-sm font-medium border-b border-amber-100 flex justify-center items-center gap-2">
      <AlertTriangle className="w-4 h-4 text-amber-600" />
      <span>Missed the Deadline? <span className="font-bold underline cursor-pointer">File a Belated Return with ComplianceBro!</span></span>
    </div>
  );
}

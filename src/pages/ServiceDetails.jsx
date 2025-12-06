import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import MultiStepForm from "../Components/MultiStepForm";

export default function ServiceDetails() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50">
      <Navbar />

      {/* MAP SECTION */}
      <div className="relative w-full">
        <iframe
          title="location-map"
          className="w-full h-[420px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.4642107985034!2d75.88168547505411!3d22.737716528677675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fc84b09e0af7%3A0xfffa1edb5a68ab2f!2sMangal%20City%20Mall%2C%20LG-19%2C%20Scheme%20No%2054%2C%20Indore%2C%20Madhya%20Pradesh%20452010!5e0!3m2!1sen!2sin!4v1733500600000!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>

        {/* FLOATING FORM + CONTACT BOX */}
        <div className="absolute top-[58%] left-1/2 -translate-x-1/2 w-full max-w-6xl px-6">
          <div className="bg-white shadow-2xl rounded-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">

            {/* MULTI-STEP FORM */}
            <MultiStepForm />

            {/* CONTACT BOX */}
            <div className="bg-[#083b74] text-white p-10 flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-6">We’re here to help</h3>

              <p className="mb-4 leading-relaxed">
                LG-19, Mangal City Mall, <br />
                Scheme No. 54, Indore 452010, <br />
                Madhya Pradesh, India
              </p>

              <p className="mb-3 font-semibold">+91 7999981173</p>

              <p className="underline cursor-pointer">support@ComplianceBro.in</p>
            </div>

          </div>
        </div>
      </div>

      {/* SPACE BELOW FLOATING BOX */}
      <div className="pt-60"></div>

      {/* ICONS */}
      <div className="max-w-5xl mx-auto py-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        <div className="p-5 bg-white rounded-xl shadow font-medium">⭐ 4.8 Google Rating</div>
        <div className="p-5 bg-white rounded-xl shadow font-medium">👥 Trusted by 1M+ Users</div>
        <div className="p-5 bg-white rounded-xl shadow font-medium">🔒 Secure & Safe</div>
        <div className="p-5 bg-white rounded-xl shadow font-medium">🏛 Authorized by IT Dept</div>
      </div>

      <Footer />
    </div>
  );
}

import React, { useState, useEffect } from "react";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);

  // Form fields
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    ay: "",
    service: "",
    incomeType: "",
    message: "",
  });

  // Prevent bots
  const [startTime, setStartTime] = useState(Date.now());

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // WhatsApp Message Builder
  const generateMessage = () => {
    return `
New Tax Query from ComplianceBro Website:

👤 Name: ${form.name}
📞 Phone: ${form.phone}
✉ Email: ${form.email}

📅 Assessment Year: ${form.ay}
🧾 Service Needed: ${form.service}
💼 Income Type: ${form.incomeType}

📝 User Message:
${form.message}
`.trim();
  };

  const handleSubmit = () => {
    const spent = (Date.now() - startTime) / 1000;
    if (spent < 3) {
      alert("Please spend some time filling the form.");
      return;
    }

    const finalMsg = encodeURIComponent(generateMessage());
    window.open(`https://wa.me/917999981173?text=${finalMsg}`, "_blank");
  };

  return (
    <div className="p-8">

      {/* ------------------ STEP HEADERS ------------------ */}
      <div className="flex gap-2 mb-6">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold
            ${step === n ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"}`}
          >
            {n}
          </div>
        ))}
      </div>

      {/* ------------------ STEP 1 ------------------ */}
      {step === 1 && (
        <>
          <h2 className="text-xl font-bold mb-4">Basic Details</h2>

          <input
            name="name"
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded-lg"
          />

          <input
            name="phone"
            type="text"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded-lg"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 mb-6 border rounded-lg"
          />

          <button
            onClick={nextStep}
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold"
          >
            Continue →
          </button>
        </>
      )}

      {/* ------------------ STEP 2 ------------------ */}
      {step === 2 && (
        <>
          <h2 className="text-xl font-bold mb-4">Tax Details</h2>

          <select
            name="ay"
            value={form.ay}
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded-lg"
          >
            <option>Assessment Year</option>
            <option>AY 2023-24</option>
            <option>AY 2024-25</option>
            <option>AY 2025-26</option>
          </select>

          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded-lg"
          >
            <option>Select Service</option>
            <option>ITR Filing</option>
            <option>GST Filing</option>
            <option>Notice Reply</option>
            <option>Tax Planning</option>
            <option>Business Compliance</option>
          </select>

          <select
            name="incomeType"
            value={form.incomeType}
            onChange={handleChange}
            className="w-full p-3 mb-6 border rounded-lg"
          >
            <option>Select Income Type</option>
            <option>Salary</option>
            <option>Business</option>
            <option>Freelancing</option>
            <option>Stock Market / F&O</option>
            <option>Crypto</option>
            <option>NRI Income</option>
          </select>

          <div className="flex justify-between">
            <button onClick={prevStep} className="text-gray-600 font-semibold">
              ← Back
            </button>

            <button
              onClick={nextStep}
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold"
            >
              Continue →
            </button>
          </div>
        </>
      )}

      {/* ------------------ STEP 3 ------------------ */}
      {step === 3 && (
        <>
          <h2 className="text-xl font-bold mb-4">Describe Your Query</h2>

          <textarea
            name="message"
            placeholder="Explain your tax issue…"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg h-28 mb-4"
          ></textarea>

          <h3 className="font-semibold mb-2">Preview Message:</h3>
          <pre className="bg-gray-100 p-3 rounded-lg text-sm whitespace-pre-wrap mb-4">
            {generateMessage()}
          </pre>

          <div className="flex justify-between">
            <button onClick={prevStep} className="text-gray-600 font-semibold">
              ← Back
            </button>

            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold"
            >
              Chat on WhatsApp →
            </button>
          </div>
        </>
      )}
    </div>
  );
}

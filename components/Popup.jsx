"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

export default function PopupForm({ onClose, onOpen }) {
  const [isOpen, setIsOpen] = useState(onOpen || false);

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [machine, setMachine] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { id: "bar-processing-machines", name: "Bar Processing Machines" },
    { id: "concrete-mixers", name: "Concrete Mixers" },
    { id: "anti-fog-cannon-machine", name: "Anti-Fog Cannon Machine" },
    { id: "lab-testing-equipment", name: "Lab Testing Equipment" },
    { id: "material-lifting-equipment", name: "Material Lifting Equipment" },
    { id: "safety-instrument", name: "Safety Instruments" },
    {
      id: "ride-on-roller-plate-compactor",
      name: "RIDE ON ROLLER / PLATE COMPACTOR",
    },
    { id: "surveying-instrument", name: "Surveying Instruments" },
    { id: "trolley-vibrator", name: "Trolley Vibrator" },
  ];

  if (!isOpen) return null;

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending...");

    try {
      const formData = {
        platform: "Shree Shakti Infratech Popup",
        platformEmail: "shreeshaktiinfratech@gmail.com",
        name,
        phone,
        email,
        place:"N/A",
        product: machine,
        message,
      };
console.log(formData)
      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        formData
      );

      if (data?.success) {
        setLoading(false);
        setStatus("✅ Message sent successfully!");

        const whatsappText = `Hi, I am ${name}.
        
Email: ${email}
Product: ${machine}

Message: ${message}

Contact: ${phone}`;

        const waUrl = `https://wa.me/918826544443?text=${encodeURIComponent(
          whatsappText
        )}`;

        setTimeout(() => {
          window.open(waUrl, "_blank");
        }, 1000);

        setName("");
        setPhone("");
        setEmail("");
        setMachine("");
        setMessage("");

        setTimeout(() => {
          handleClose();
        }, 3000);
      } else {
        setStatus("❌ Failed to send. Please try again.");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setStatus("❌ Server error. Try again later.");
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[3000] overflow-y-auto">
      <div className="relative bg-white max-w-xs md:max-w-lg p-5 sm:p-10 rounded-lg shadow-lg ">

        <Image
          src="/home/form.webp"
          alt="Popup Image"
          width={63}
          height={55}
          className="hidden md:block absolute left-0 top-0 bottom-0 z-100"
        />

        <button
          className="absolute cursor-pointer top-3 right-3 text-gray-600 hover:text-black"
          onClick={handleClose}
        >
          ✕
        </button>

        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center">
          Get Your <span className="text-[#FAAC18]">Free Quote Today!</span>
        </h2>
        <p className="text-xs sm:text-sm text-black mb-4 text-center z-200">
          Looking for a reliable <b>Bar Bending Machine</b> or other
          construction equipment? Tell us your requirement and get the best
          price quote, fast and hassle-free.
        </p>

        <form className="space-y-2 md:ml-3" onSubmit={handleSubmit}>

          <input
            type="text"
            required
            disabled={loading}
            placeholder="Name"
            className="w-full p-3 rounded-md bg-[#FFF3E0] border border-gray-300 text-sm sm:text-base"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="tel"
            required
            disabled={loading}
            placeholder="Mobile No."
            className="w-full p-3 rounded-md bg-[#FFF3E0] border border-gray-300 text-sm sm:text-base"
            value={phone}
            minLength={10}
            maxLength={10}
            pattern="[0-9]{10}"
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="email"
            required
            disabled={loading}
            placeholder="Email Address"
            className="w-full p-3 rounded-md bg-[#FFF3E0] border border-gray-300 text-sm sm:text-base"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <select
            required
            disabled={loading}
            className="w-full p-3 rounded-md bg-[#FAAC18] border border-gray-300 text-sm sm:text-base"
            value={machine}
            onChange={(e) => setMachine(e.target.value)}
          >
            <option value="">Select Product</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>

          <textarea
            rows="3"
            required
            disabled={loading}
            placeholder="Message for us..."
            className="w-full p-3 rounded-md bg-[#FFF3E0] border border-gray-300 text-sm sm:text-base"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full cursor-pointer py-3 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition text-sm sm:text-base"
          >
            {loading ? "Submitting..." : "Send My Enquiry"}
          </button>

          {status && (
            <p
              className={`text-center mt-2 text-sm font-medium p-2 rounded-lg ${
                status.startsWith("✅")
                  ? "bg-green-100 text-green-800"
                  : status.startsWith("❌")
                  ? "bg-red-100 text-red-800"
                  : "bg-yellow-100 text-yellow-800"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

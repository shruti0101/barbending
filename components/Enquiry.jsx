"use client";
import React, { useState } from "react";
import axios from "axios";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaIndustry,
  FaRegCommentDots,
} from "react-icons/fa";

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

const Enquiry = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending...");

    try {
      const formData = {
        platform: "Shree Shakti Infratech Enquiry",
        platformEmail: "shreeshaktiinfratech@gmail.com",
        name,
        phone,
        email,
            place:"N/A",
        product: machine,
        message,
      };

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        formData
      );

      if (data?.success) {
        setStatus("✅ Enquiry sent successfully!");
        setLoading(false);

        const whatsappText = `Hi, I am ${name}.
        
Email: ${email}
Product: ${product}

Message: ${message}

Contact: ${phone}`;

        const waUrl = `https://wa.me/918826544443?text=${encodeURIComponent(
          whatsappText
        )}`;

        setTimeout(() => {
          window.open(waUrl, "_blank");
        }, 1000);

        setName("");
        setEmail("");
        setPhone("");
        setProduct("");
        setMessage("");

        setTimeout(() => {
          onClose();
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
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-[3000]">
      <div className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-xl relative overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-[#FFAC18] h-13 w-full flex items-center justify-between px-6">
          <h2 className="text-2xl font-bold text-white tracking-wide">
            📩 Enquiry Form
          </h2>
          <button
            onClick={onClose}
            className="text-white text-2xl hover:text-red-400 transition"
          >
            ✕
          </button>
        </div>

        <div className="p-4 bg-gradient-to-br from-gray-50 to-white">
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="flex items-center border rounded-lg px-4 py-3 bg-white shadow-sm focus-within:ring-2 focus-within:ring-yellow-500">
              <FaUser className="text-gray-500 mr-3" />
              <input
                type="text"
                required
                disabled={loading}
                placeholder="Your Name *"
                className="w-full focus:outline-none text-gray-700"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Email */}
            <div className="flex items-center border rounded-lg px-4 py-3 bg-white shadow-sm focus-within:ring-2 focus-within:ring-yellow-500">
              <FaEnvelope className="text-gray-500 mr-3" />
              <input
                type="email"
                required
                disabled={loading}
                placeholder="Your Business Email *"
                className="w-full focus:outline-none text-gray-700"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Phone */}
            <div className="flex items-center border rounded-lg px-4 py-3 bg-white shadow-sm focus-within:ring-2 focus-within:ring-yellow-500">
              <FaPhone className="text-gray-500 mr-3" />
              <input
                type="tel"
                pattern="[0-9]{10}"
                maxLength={10}
                required
                disabled={loading}
                placeholder="Your Phone"
                className="w-full focus:outline-none text-gray-700"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {/* Product */}
            <div className="flex items-center border rounded-lg px-4 py-3 bg-white shadow-sm focus-within:ring-2 focus-within:ring-yellow-500">
              <FaIndustry className="text-gray-500 mr-3" />
              <select
                required
                disabled={loading}
                className="w-full bg-transparent focus:outline-none text-gray-700"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
              >
                <option value="">Select Product *</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="flex items-start border rounded-lg px-4 py-3 bg-white shadow-sm focus-within:ring-2 focus-within:ring-yellow-500">
              <FaRegCommentDots className="text-gray-500 mt-1 mr-3" />
              <textarea
                rows="4"
                required
                disabled={loading}
                placeholder="Your Message *"
                className="w-full focus:outline-none text-gray-700"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-lg font-semibold py-3 rounded-lg shadow-md hover:from-yellow-600 hover:to-orange-600 hover:scale-[1.02] transition"
            >
              {loading ? "Submitting..." : "🚀 Submit Enquiry"}
            </button>

            {status && (
              <p
                className={`text-center mt-3 text-sm font-semibold p-2 rounded-lg ${
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
    </div>
  );
};

export default Enquiry;

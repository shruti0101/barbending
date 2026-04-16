import Footer from "@/components/landingpage/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Navbar />

      {/* Premium Hero Section */}
      <section className="relative w-full h-[420px] md:h-[520px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('/home/hero1.webp')" }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 "></div>

      

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
       <h2 className="text-2xl md:text-4xl font-bold mb-6 text-[#FAAC18]">
  Refund & Returns Policy - Shree Shakti Infratech
</h2>

<p className="text-gray-300 leading-relaxed mb-8">
  This Refund & Returns Policy applies to all bar bending, steel fabrication, and construction-related
  services and materials provided by <strong>Shree Shakti Infratech</strong>. By placing an order or
  confirming a project with us, you agree to the terms outlined below.
</p>
        </div>
      </section>

      {/* Privacy Policy Content Section */}
      <section className=" text-white py-16 px-4 md:px-20">
        <div className="w-full mx-auto">
          <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] rounded-2xl shadow-2xl border border-white/10 p-6 md:p-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-[#FAAC18]">
              Privacy Policy - Shree Shakti Infratech
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Shree Shakti Infratech ("we," "our," or "us") respects the privacy of
              our clients, partners, and website visitors. This Privacy Policy
              explains how we collect, use, and protect your personal information
              when you interact with us for our bar bending services through our
              website, online platforms, or offline communications.
            </p>

            <div className="  ">
             <div className="space-y-6">

  <div>
    <h3 className="text-xl font-semibold text-[#FAAC18] mb-2">Overview</h3>
    <p className="text-gray-300 leading-relaxed">
      Our refund and returns policy lasts 30 days. If 30 days have passed since your purchase or service
      confirmation, we cannot offer a full refund or exchange.
    </p>
    <p className="text-gray-300 leading-relaxed mt-2">
      To be eligible for a return, the material must be unused, uninstalled, and in the same condition as
      received, including original packaging where applicable.
    </p>
  </div>

  <div>
    <h3 className="text-xl font-semibold text-[#FAAC18] mb-2">Non-Returnable Items</h3>
    <ul className="list-disc list-inside text-gray-300 space-y-1">
      <li>Custom-cut or fabricated reinforcement bars.</li>
      <li>Materials altered as per site-specific drawings or measurements.</li>
      <li>Hazardous, flammable, or damaged construction materials.</li>
      <li>Digital quotations or downloadable planning documents.</li>
    </ul>
    <p className="text-gray-300 mt-2">
      Proof of purchase or invoice is required for any return request.
    </p>
  </div>

  <div>
    <h3 className="text-xl font-semibold text-[#FAAC18] mb-2">Partial Refunds</h3>
    <ul className="list-disc list-inside text-gray-300 space-y-1">
      <li>Materials showing signs of usage or damage not caused by us.</li>
      <li>Items not in original condition or returned after 30 days.</li>
      <li>Products missing parts without our error.</li>
    </ul>
  </div>

  <div>
    <h3 className="text-xl font-semibold text-[#FAAC18] mb-2">Refund Process</h3>
    <p className="text-gray-300 leading-relaxed">
      Once your return is received and inspected, you will be notified via email regarding approval or
      rejection. Approved refunds will be processed to the original payment method within a few working
      days.
    </p>
  </div>

  <div>
    <h3 className="text-xl font-semibold text-[#FAAC18] mb-2">Late or Missing Refunds</h3>
    <p className="text-gray-300 leading-relaxed">
      If your refund is delayed, please check with your bank or credit card provider first. If the issue
      persists, contact us directly.
    </p>
  </div>

  <div>
    <h3 className="text-xl font-semibold text-[#FAAC18] mb-2">Sale & Discounted Services</h3>
    <p className="text-gray-300 leading-relaxed">
      Only regularly priced services and materials are eligible for refunds. Discounted or promotional
      services are non-refundable.
    </p>
  </div>

  <div>
    <h3 className="text-xl font-semibold text-[#FAAC18] mb-2">Exchanges</h3>
    <p className="text-gray-300 leading-relaxed">
      We only replace materials if they are defective or damaged due to our handling. To request an
      exchange, email us at <strong>shreeshaktiinfratech@gmail.com</strong> with proof of issue.
    </p>
  </div>

  <div>
    <h3 className="text-xl font-semibold text-[#FAAC18] mb-2">Shipping Returns</h3>
    <p className="text-gray-300 leading-relaxed">
      Customers are responsible for return transportation costs. Shipping charges are non-refundable and
      may be deducted from the refund amount.
    </p>
  </div>

  <div className="bg-black/40 border border-white/10 rounded-xl mt-8 p-5">
    <h3 className="text-xl font-semibold text-[#FAAC18] mb-2">Need Help?</h3>
    <p className="text-gray-300">For questions related to refunds and returns, contact:</p>
    <p className="text-white font-semibold mt-2">Shree Shakti Infratech</p>
    <p className="text-gray-300">Email: shreeshaktiinfratech@gmail.com</p>
    <p className="text-gray-300">Phone: +91 8826544443</p>
  </div>

           
            </div>
          </div>
        </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default page;

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
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#FAAC18] to-[#ffd36b] bg-clip-text text-transparent">
                Privacy Policy
              </span>
              <span className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-24 h-1.5 bg-[#FAAC18] rounded-full"></span>
            </span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-gray-200 max-w-2xl mx-auto">
            We respect your privacy and are committed to protecting your personal
            information. Please review our policies to understand how we manage
            and safeguard your data.
          </p>
        </div>
      </section>

      {/* Privacy Policy Content Section */}
      <section className=" text-white py-16 px-4 md:px-20">
        <div className="max-w-6xl mx-auto">
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

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[#FAAC18] mb-2">1. Information We Collect</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li><strong>Personal Information:</strong> Name, phone number, email, address, and billing details.</li>
                    <li><strong>Business Information:</strong> Company name, project details, GST and site location.</li>
                    <li><strong>Technical Information:</strong> IP address, browser type, and device data.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#FAAC18] mb-2">2. How We Use Your Information</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Processing bar bending and steel reinforcement service orders.</li>
                    <li>Sending quotations, invoices, and project updates.</li>
                    <li>Improving service quality and customer experience.</li>
                    <li>Marketing communication with your consent.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#FAAC18] mb-2">3. Data Protection & Security</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We apply strict technical and organizational measures to
                    safeguard your data and ensure secure handling of all
                    financial and personal information.
                  </p>

                    <div className="bg-black/40 border border-white/10 rounded-xl mt-10 p-5 mt-4">
                  <h3 className="text-xl font-semibold text-[#FAAC18] mb-2">9. Contact Us</h3>
                  <p className="text-gray-300">For any privacy-related queries, contact:</p>
                  <p className="text-white font-semibold mt-2">Shree Shakti Infratech</p>
                  <p className="text-gray-300">Email: shreeshaktiinfratech@gmail.com</p>
                  <p className="text-gray-300">Phone: +91 8826544443</p>
                </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[#FAAC18] mb-2">4. Sharing of Information</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Delivery and logistics partners.</li>
                    <li>Payment and invoicing service providers.</li>
                    <li>Legal or government authorities if required.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#FAAC18] mb-2">5. Cookies & Tracking</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We may use cookies to improve site performance and enhance
                    user experience. Disabling cookies may affect certain features.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#FAAC18] mb-2">6. Your Rights</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Access or update your personal data.</li>
                    <li>Request data deletion where applicable.</li>
                    <li>Opt-out of promotional communication.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#FAAC18] mb-2">7. Third-Party Links</h3>
                  <p className="text-gray-300">
                    We are not responsible for privacy practices of external
                    websites linked on our platform.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#FAAC18] mb-2">8. Policy Updates</h3>
                  <p className="text-gray-300">
                    This policy may be updated periodically. Changes will be
                    reflected with an updated date on this page.
                  </p>
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

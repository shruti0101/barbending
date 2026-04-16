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
      

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#FAAC18] to-[#ffd36b] bg-clip-text text-transparent">
              Shipping Policy
              </span>
              <span className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-24 h-1.5 bg-[#FAAC18] rounded-full"></span>
            </span>
          </h1>

        
        </div>
      </section>

      {/* Privacy Policy Content Section */}
      <section className=" text-white py-16 px-4 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] rounded-2xl shadow-2xl border border-white/10 p-6 md:p-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-[#FAAC18]">
              Shipping & Delivery Policy - Shree Shakti Infratech
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              At Shree Shakti Infratech, we are committed to providing timely and
              efficient bar bending and steel reinforcement services while
              ensuring safe transportation of materials to your project site.
              Please read our shipping and delivery policy to understand how we
              schedule and execute service deliveries.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[#FAAC18] mb-2">1. Service Processing</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Confirmed service requests are scheduled within 1–2 working days.</li>
                    <li>Projects confirmed on Sundays or public holidays are processed on the next working day.</li>
                    <li>Clients receive confirmation and scheduling details via phone or WhatsApp.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#FAAC18] mb-2">2. Delivery & Execution Time</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Services are provided across Delhi NCR and nearby regions.</li>
                    <li>Standard execution time depends on project size and site complexity.</li>
                    <li>Metro construction sites generally receive faster turnaround.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#FAAC18] mb-2">3. Transportation & Handling</h3>
                  <p className="text-gray-300 leading-relaxed">
                    All steel and reinforcement materials are securely handled and
                    transported using appropriate machinery and vehicles to ensure
                    safety and prevent damage during transit.
                  </p>
                </div>

                <div className="bg-black/40 border border-white/10 rounded-xl mt-10 p-5">
                  <h3 className="text-xl font-semibold text-[#FAAC18] mb-2">7. Contact Us</h3>
                  <p className="text-gray-300">For delivery or service-related queries, contact:</p>
                  <p className="text-white font-semibold mt-2">Shree Shakti Infratech</p>
                  <p className="text-gray-300">Email: shreeshaktiinfratech@gmail.com</p>
                  <p className="text-gray-300">Phone: +91 8826544443</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[#FAAC18] mb-2">4. Service Charges</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Transportation and handling charges may vary depending on site
                    distance, project scale, and machinery requirements. Final
                    charges are shared during quotation approval.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#FAAC18] mb-2">5. Service Coverage</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Currently, we provide bar bending services within India. For
                    large-scale infrastructure or long-distance projects, please
                    contact us directly for special arrangements.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#FAAC18] mb-2">6. Delays & Issues</h3>
                  <p className="text-gray-300 leading-relaxed">
                    While we strive to meet scheduled timelines, unforeseen
                    circumstances such as weather conditions, machinery breakdown,
                    or site restrictions may cause delays. Shree Shakti Infratech
                    is not responsible for delays caused by third-party factors.
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

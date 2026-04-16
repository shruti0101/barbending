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

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#FAAC18] to-[#ffd36b] bg-clip-text text-transparent">
                Terms & Conditions
              </span>
              <span className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-24 h-1.5 bg-[#FAAC18] rounded-full"></span>
            </span>
          </h1>
        </div>
      </section>

      {/* Terms & Conditions Content Section */}
      <section className=" text-white py-16 px-4 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] rounded-2xl shadow-2xl border border-white/10 p-6 md:p-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-[#FAAC18]">
              Terms & Conditions - Shree Shakti Infratech
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              These Terms & Conditions govern all orders and transactions made with <span className="text-white font-semibold">Shree Shakti Infratech</span> for bar bending services, steel reinforcement work, fabrication, and other related construction support services. By placing an order, the client agrees to abide by these Terms & Conditions.
            </p>

            <div className="space-y-8 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-[#FAAC18] mb-2">1. General</h3>
                <p>
                  These Terms & Conditions apply to all services provided by Shree Shakti Infratech. All confirmed orders constitute acceptance of these terms by the buyer.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#FAAC18] mb-2">2. Service Quality & Standards</h3>
                <p>
                  All bar bending and reinforcement services are executed under strict quality control to ensure structural accuracy, safety, and compliance with construction standards. Minor variations in measurements may occur due to practical site conditions. Exact uniformity in on-site execution cannot always be guaranteed.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#FAAC18] mb-2">3. Pricing & Payment</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Prices are subject to change based on steel market rates and project complexity.</li>
                  <li>Full payment must be made as per agreed terms before service execution unless otherwise approved in writing.</li>
                  <li>Accepted payment methods include bank transfer, cheque, UPI, or other mutually agreed modes.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#FAAC18] mb-2">4. Materials & Measurement</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>All steel bars and materials are handled using industry-standard equipment.</li>
                  <li>Minor variations in weight or length due to cutting, bending, and handling are acceptable.</li>
                  <li>Custom cutting or bending requests may incur additional charges.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#FAAC18] mb-2">5. Service Execution & Delivery</h3>
                <p>
                  Execution timelines are communicated at the time of order confirmation. Shree Shakti Infratech is not responsible for delays caused by weather conditions, site inaccessibility, machinery failure, labor strikes, or circumstances beyond control. Responsibility transfers to the client once work is completed or materials are handed over at site.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#FAAC18] mb-2">6. Inspection & Claims</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Clients must inspect work immediately upon completion.</li>
                  <li>Any claims related to measurement, workmanship, or damage must be reported within 48 hours.</li>
                  <li>Claims must be supported with clear photographic or written evidence.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#FAAC18] mb-2">7. Rework & Adjustments</h3>
                <p>
                  Due to the nature of construction services, rework is not generally accepted unless genuine execution errors are verified. Adjustments may be considered based on project feasibility and mutual agreement.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#FAAC18] mb-2">8. Compliance & Safety</h3>
                <p>
                  All services comply with applicable construction safety standards and regulations. Clients are responsible for ensuring local site safety and statutory compliance at the project location.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#FAAC18] mb-2">9. Limitation of Liability</h3>
                <p>
                  Shree Shakti Infratech shall not be liable for indirect, incidental, or consequential damages arising from service usage. Liability, if any, shall be limited to the invoiced service value.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#FAAC18] mb-2">10. Governing Law & Jurisdiction</h3>
                <p>
                  All disputes shall be subject to the jurisdiction of the courts in Delhi, India. These Terms & Conditions shall be governed by the laws of India.
                </p>
              </div>
            </div>

            <div className="bg-black/40 border border-white/10 rounded-xl mt-10 p-5">
              <h3 className="text-xl font-semibold text-[#FAAC18] mb-2">Contact Information</h3>
              <p className="text-gray-300">For any queries regarding these Terms & Conditions, contact:</p>
              <p className="text-white font-semibold mt-2">Shree Shakti Infratech</p>
              <p className="text-gray-300">Email: shreeshaktiinfratech@gmail.com</p>
              <p className="text-gray-300">Phone: +91 8826544443</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default page;

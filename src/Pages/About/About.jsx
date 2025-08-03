import React from 'react';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa6";

export default function About() {
  return (
    <div className="w-full flex flex-col items-center">
      
      {/* About Company */}
      <section className="w-full bg-gray-100 py-[10vh] px-[5vw] text-center">
        <h1 className="text-[5vh] font-bold mb-[2vh]">About Our Company</h1>
        <p className="text-[2.5vh] leading-[4vh] max-w-[800px] mx-auto">
           Mummy Zee is a wholesale and retail supplier of high-quality fashion items, including abayas, gowns, jalabiyas, shoes, bags, scarves, jersey scarves, luxury caps, hijabs, children’s abayas, underwear, and luxury veils. 
          We pride ourselves in delivering elegant, trendy, and affordable fashion that resonates with style-conscious individuals across the globe.
        </p>
      </section>

      {/* CEO Image & Bio */}
      <section className="w-full flex flex-col lg:flex-row items-center justify-center py-[10vh] px-[5vw] gap-[5vh] bg-white">
        <div className="w-[40vw] h-[40vw] lg:w-[20vw] lg:h-[20vw] rounded-full overflow-hidden">
          <img src="/image/ceo.jpg" alt="CEO" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-[600px] text-center lg:text-left">
          <h2 className="text-[4vh] font-semibold mb-[2vh]">Meet Our CEO</h2>
          <p className="text-[2.5vh] leading-[4vh]">
            Our CEO, is a visionary entrepreneur with a passion for fashion and innovation.
            She founded Mummy Zee with a goal to redefine modest fashion with elegance and authenticity.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="w-full bg-gray-100 py-[10vh] px-[5vw] text-center">
        <h2 className="text-[5vh] font-bold mb-[4vh]">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[5vh]">
          <div className="bg-white p-[5vh] rounded-lg shadow-lg">
            <h3 className="text-[3vh] font-semibold mb-[2vh]">Wholesale & Retail Supply</h3>
            <p className="text-[2.5vh] leading-[4vh]">Supplying bulk and individual fashion items to customers and businesses worldwide.</p>
          </div>
          <div className="bg-white p-[5vh] rounded-lg shadow-lg">
            <h3 className="text-[3vh] font-semibold mb-[2vh]">Custom Fashion Orders</h3>
            <p className="text-[2.5vh] leading-[4vh]">We tailor special orders to match unique styles and customer preferences.</p>
          </div>
          <div className="bg-white p-[5vh] rounded-lg shadow-lg">
            <h3 className="text-[3vh] font-semibold mb-[2vh]">Nationwide Delivery</h3>
            <p className="text-[2.5vh] leading-[4vh]">Reliable delivery services ensuring your orders reach you wherever you are.</p>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="w-full py-[10vh] px-[5vw] text-center bg-white">
        <h2 className="text-[4vh] font-bold mb-[4vh]">CONTACT US</h2>
        <div className="flex justify-center gap-[5vh] text-[4vh]">
          <a href="http://wa.me/2347035722334" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/mummyzeestore?igsh=ZXI3N3F1eHRzZTU%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
            <FaInstagram />
          </a>
          <a href="https://www.tiktok.com/@mummyzeestore?_t=ZM-8yBPIBuCcae&_r=1" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
            <FaTiktok />
          </a>
        </div>
      </section>
      
    </div>
  );
}

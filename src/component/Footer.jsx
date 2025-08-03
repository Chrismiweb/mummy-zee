import React from 'react';
import { FiPhone, FiMapPin } from 'react-icons/fi';
// import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';\
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa6";


function Footer() {
            const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-white py-[70px] px-[30px] lg:px-[200px] overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-[100px]">
        {/* Contact Us Section */}
        <div className="flex flex-col gap-3">
          <h3 className="text-[2.5vh] lg:text-[2.7vh] md:text-[3vh] font-bold uppercase">Contact Us</h3>
          <p className="flex items-center gap-2 text-[2.2vh] lg:text-[2vh] md:text-[2.4vh]">
            <FiPhone /> +2347035722334
          </p>
          <p className="flex items-center gap-2 text-[2.2vh] lg:text-[2vh] md:text-[2.4vh]">
            <FiMapPin /> 4th building after nasara fuel station, sawmill garage,osere.
          </p>

          {/* Social Media Links */}
          <div className="flex items-center gap-4 mt-4">
       
                <a href="http://wa.me/2347035722334" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 text-[4.5vh] lg:text-[5vh] md:text-[4vh]">
                    <FaWhatsapp />
                  </a>
                  <a href="https://www.instagram.com/mummyzeestore?igsh=ZXI3N3F1eHRzZTU%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 text-[4.5vh] lg:text-[5vh] md:text-[4vh]">
                    <FaInstagram />
                  </a>
                  <a href="https://www.tiktok.com/@mummyzeestore?_t=ZM-8yBPIBuCcae&_r=1" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 text-[4.5vh] lg:text-[5vh] md:text-[4vh]">
                    <FaTiktok />
                  </a>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="flex flex-col gap-4 w-full max-w-[500px]">
          <h3 className="text-[2.2vh] lg:text-[2vh] md:text-[2.4vh] font-bold uppercase">Sign up for discounts & updates</h3>
          <input
            type="text"
            placeholder="Enter your phone number or email address"
            className="bg-[#2E2E2E] text-white px-4 py-3 rounded-md w-full placeholder:text-gray-400 focus:outline-none"
          />
          <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-6 rounded-md w-fit text-[2.2vh] lg:text-[2vh] md:text-[2.4vh] cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1a1a1a] mt-10 pt-5 flex justify-center">
        <p className=" text-white text-[2.2vh] lg:text-[2vh] md:text-[2.4vh] px-4 py-2 rounded">©{year} Mummy Zee Store.</p>
      </div>
    </footer>
  );
}

export default Footer;

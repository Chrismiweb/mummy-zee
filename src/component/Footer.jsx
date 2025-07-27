import React from 'react';
import { FiPhone, FiMapPin } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

function Footer() {
            const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-white py-[70px] px-5">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Contact Us Section */}
        <div className="flex flex-col gap-3">
          <h3 className="text-[20px] font-bold uppercase">Contact Us</h3>
          <p className="flex items-center gap-2 text-[18px]">
            <FiPhone /> +2347035722334
          </p>
          <p className="flex items-center gap-2 text-[18px]">
            <FiMapPin /> 4th building after nasara fuel station, sawmill garage,osere.
          </p>

          {/* Social Media Links */}
          <div className="flex items-center gap-4 mt-4">
                <a href="#" className="hover:text-green-600">
                <FaFacebookF size={25} />
                </a>
                <a href="#" className="hover:text-green-600">
                <FaInstagram size={25} />
                </a>
                <a href="#" className="hover:text-green-600">
                <FaTwitter size={25} />
                </a>
                <a href="#" className="hover:text-green-600">
                <FaWhatsapp size={25} />
                </a>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="flex flex-col gap-4 w-full max-w-[500px]">
          <h3 className="text-[18px] font-bold uppercase">Sign up for discounts & updates</h3>
          <input
            type="text"
            placeholder="Enter your phone number or email address"
            className="bg-[#2E2E2E] text-white px-4 py-3 rounded-md w-full placeholder:text-gray-400 focus:outline-none"
          />
          <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-6 rounded-md w-fit text-[18px] cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1a1a1a] mt-10 pt-5 flex justify-center">
        <p className=" text-white text-[18px] px-4 py-2 rounded">©{year} Mummy Zee Store.</p>
      </div>
    </footer>
  );
}

export default Footer;

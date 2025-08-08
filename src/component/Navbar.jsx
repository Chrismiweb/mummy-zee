import React, { useState } from 'react';
import { CiShoppingCart } from "react-icons/ci";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi"; // Menu & Close Icons
import { Input, Space } from 'antd';
const { Search } = Input;


function Navbar({ onSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = ["ABAYA", "GOWN", "JALABIYA", "SHOE", "BAG", "CAP", "SCARVE", "HIJAB", "UNDERWEAR", "VEIL", "ALL PRODUCTS"];

    // Handle Search Change
  const handleSearchChange = (value) => {
    onSearch(value.toLowerCase()); // Send value to parent
  };

  return (
    <div className='w-full overflow-hidden'>
      {/* Top Navbar */}
      <div className='flex items-center justify-between px-4 md:px-[50px] py-[20px] md:py-[40px]'>
        <a href='/' className='lg:w-[5vw] md:w-[10vw] w-[20vw]'>
            <img src="/image/mummyZee Logo.png" className='w-full h-full object-fill' alt="" />
        </a>

        {/* Hamburger Icon for Mobile & Tablet */}
        <div className='flex lg:hidden'>
          {menuOpen ? (
            <HiOutlineX className='text-[4vh] md:text-[4vh]' onClick={toggleMenu} />
          ) : (
            <HiOutlineMenuAlt3 className='text-[4vh] md:text-[4vh]' onClick={toggleMenu} />
          )}
        </div>

        {/* Search & Icons - Hidden on Mobile */}
        <div className='hidden lg:flex gap-[30px] items-center'>
          <Space direction="vertical">
              <Search
                placeholder="SEARCH PRODUCT"
                allowClear
                className="placeholder:font-bold"
                onChange={(e) => handleSearchChange(e.target.value)}
                style={{
                      width: window.innerWidth >= 1024
                        ? '800px' // lg
                        : window.innerWidth >= 768
                        ? '90vw' // md
                        : '90vw'  // sm
                    }}
              />
          </Space>
          <div className='flex gap-2 items-center'>
            <div className='w-5 h-5'>
              <img className='w-full h-full object-cover' src="\image\nigeria.png" alt="Nigeria Flag" />
            </div>
            <p className='text-[2vh] font-semibold'>NGN</p>
          </div>
          <a href="/about" className='text-[2vh] font-semibold'>About us</a>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className='block lg:hidden px-4 mb-2'>
          <Space direction="vertical">
              <Search
                placeholder="SEARCH PRODUCT"
                allowClear
                className="placeholder:font-bold"
                onChange={(e) => handleSearchChange(e.target.value)}
                style={{
                      width: window.innerWidth >= 1024
                        ? '800px' // lg
                        : window.innerWidth >= 768
                        ? '90vw' // md
                        : '90vw'  // sm
                    }}
              />
          </Space>
      </div>

      {/* Menu Links */}
        <div className='w-full flex justify-center items-center '>
            {/* Menu Items - Visible on Desktop */}
            <div className={`w-[80%] border-b-black border-b-2  lg:w-full lg:flex items-center justify-center md:gap-[50px] bg-white lg:bg-black px-4 md:px-[50px] py-[40px] lg:py-[10px] ${menuOpen ? 'block' : 'hidden'} lg:block`}>
                <div className='flex lg:hidden pb-4 flex-col lg:flex-row gap-4 justify-center items-center'>
                    <a href="/about" className='text-[2.8vh] border-b-2 border-b-black md:text-[2.8vh] lg:text-[2vh] text-black lg:text-white font-semibold'>About us</a>
                    <a href="/" className='text-[2.8vh] border-b-2 border-b-black md:text-[2.8vh] lg:text-[2vh] text-black lg:text-white font-semibold'>Home</a>
                </div>
                

                <div className='flex flex-col lg:flex-row gap-4 lg:gap-[50px]  lg:py-0 justify-center items-center'>
                    {menuItems.map((item) => (
                      <a 
                        key={item} 
                        href={`#${item.toLowerCase()}`} 
                        className='text-[2.5vh] border-b-2 border-b-black md:text-[2.5vh] lg:text-[2vh] text-black lg:text-white font-semibold'
                      >
                        {item}
                      </a>
                    ))}
                </div>
                
            </div>
        </div>
    </div>
  );
}

export default Navbar;

import React from 'react'
import { CiShoppingCart } from "react-icons/ci";


function Navbar() {
  return (
    <div className='w-full '>
        <div className='flex items-center justify-between px-[50px] py-[40px]'>
            <div>
                <p>LOGO</p>
            </div>
            <div className='flex gap-[30px] justify-center items-center'>
                <input type="text" placeholder='Search' className='bg-[#F2F2F2] w-[60vw] px-[30px] placeholder:text-black placeholder:text-[20px] placeholder:font-semibold py-[10px] rounded-full' />
                <div className='flex gap-[5px] justify-center items-center'>
                    <div className='w-[20px] h-[20px]'>
                        <img className='w-full h-full' src="\image\nigeria.png" alt="" />
                    </div>
                    <p className='text-[18px] font-semibold'>NGN</p>
                </div>
                <div className='flex gap-[5px] justify-center items-center'>
                    <p className='text-[18px] font-semibold'>Login</p>
                </div>
                <div>
                    <CiShoppingCart className='text-[30px]'/>
                </div>
            </div>
        </div>

        <div className='flex items-center justify-center px-[50px] bg-black gap-[50px] py-[10px]'>
            <a href=""><p className='text-[18px] text-white font-semibold'>ABAYA</p></a>
            <a href=""><p className='text-[18px] text-white font-semibold'>GOWN</p></a>
            <a href=""><p className='text-[18px] text-white font-semibold'>JALABIYA</p></a>
            <a href=""><p className='text-[18px] text-white font-semibold'>SHOES</p></a>
            <a href=""><p className='text-[18px] text-white font-semibold'>BAGS</p></a>
            <a href=""><p className='text-[18px] text-white font-semibold'>CAPS</p></a>
            <a href=""><p className='text-[18px] text-white font-semibold'>SCARVES</p></a>
            <a href=""><p className='text-[18px] text-white font-semibold'>HIJABS</p></a>
            <a href=""><p className='text-[18px] text-white font-semibold'>UNDERWEAR</p></a>
            <a href=""><p className='text-[18px] text-white font-semibold'>VEILS</p></a>



        </div>

    </div>
  )
}

export default Navbar
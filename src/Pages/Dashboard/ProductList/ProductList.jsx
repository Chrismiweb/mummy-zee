import React from 'react'

function ProductList() {
    const categories = [

      {
        productName: 'WINE AND PEACH MIDI DRESS',
        price: '₦40,000.00',
        size: "Small",
        category: "abaya",
        image: '/image/abaya.jpg',
      },
        {
        productName: 'WINE AND PEACH MIDI DRESS',
        price: '₦40,000.00',
        size: "Small",
        category: "abaya",
        image: '/image/abaya.jpg',
      },      {
        productName: 'WINE AND PEACH MIDI DRESS',
        price: '₦40,000.00',
        size: "Small",
        category: "abaya",
        image: '/image/abaya.jpg',
      },      {
        productName: 'WINE AND PEACH MIDI DRESS',
        price: '₦40,000.00',
        size: "Small",
        category: "abaya",
        image: '/image/abaya.jpg',
      },      {
        productName: 'WINE AND PEACH MIDI DRESS',
        price: '₦40,000.00',
        size: "Small",
        category: "abaya",
        image: '/image/abaya.jpg',
      },      {
        productName: 'WINE AND PEACH MIDI DRESS',
        price: '₦40,000.00',
        size: "Small",
        category: "abaya",
        image: '/image/abaya.jpg',
      },      {
        productName: 'WINE AND PEACH MIDI DRESS',
        price: '₦40,000.00',
        size: "Small",
        category: "abaya",
        image: '/image/abaya.jpg',
      },      {
        productName: 'WINE AND PEACH MIDI DRESS',
        price: '₦40,000.00',
        size: "Small",
        category: "abaya",
        image: '/image/abaya.jpg',
      },      {
        productName: 'WINE AND PEACH MIDI DRESS',
        price: '₦40,000.00',
        size: "Small",
        category: "abaya",
        image: '/image/abaya.jpg',
      },
 
    ]

  return (
    <div className='flex flex-col gap-[50px] py-[40px] px-[50px]'>
        <div className='flex items-center justify-between'>
            <p className='text-[50px]'>All Products</p>
            <input type="text" placeholder='Search' className='bg-[#F2F2F2] w-[50%] px-[30px] placeholder:text-black placeholder:text-[20px] placeholder:font-semibold py-[10px] rounded-full' />
        </div>


        <div className='w-[100%] grid grid-cols-5 gap-[30px]'>
            {categories.map((product, index)=>(
                <div key={index} className="w-[98%] flex flex-col gap-[7px]">
                    <div className="w-full h-[400px] bg-gray-500 overflow-hidden rounded-md">
                        <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-full flex-col gap-[7px] flex">
                        <p className="text-[18px] font-semibold text-[#686868]">{product.productName}</p>
                        <p className="text-[18px] font-semibold text-[#686868]">Size: {product.size}</p>
                        <p className="text-[24px] font-semibold text-black">Category: {product.category}</p>
                        <p className="text-[27px]">{product.price}</p>
                    </div>
                    <div className='flex w-full items-center justify-between'>
                        <button className="w-[45%] py-[15px] rounded-[10px] mt-[10px] text-[18px] font-bold cursor-pointer hover:bg-green-700 hover:text-white bg-green-600 text-white shadow-md">
                            Edit
                        </button>
                        <button className="w-[45%] py-[15px] rounded-[10px] mt-[10px] text-[18px] font-bold cursor-pointer hover:bg-red-700 hover:text-white bg-red-600 text-white shadow-md">
                            Delete
                        </button>
                    </div>
                </div>
                ))}

        </div>
    </div>
  )
}

export default ProductList

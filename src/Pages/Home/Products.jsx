import React from 'react';

export const categories = [
  {
    title: 'ABAYA',
    description: 'Check out our newest Abayas',
    products: [
      {
        title: 'WINE AND PEACH MIDI DRESS',
        price: '₦40,000.00',
        image: '/images/abaya1.jpg',
      },
      {
        title: 'EMERALD GREEN MAXI DRESS',
        price: '₦45,000.00',
        image: '/images/abaya2.jpg',
      },
      {
        title: 'BLACK AND GOLD ABAYA',
        price: '₦50,000.00',
        image: '/images/abaya3.jpg',
      },
      {
        title: 'ROYAL BLUE ELEGANT SET',
        price: '₦42,000.00',
        image: '/images/abaya4.jpg',
      },
    ],
  },
  {
    title: 'GOWN',
    description: 'Explore our elegant gowns',
    products: [
      {
        title: 'LUXURIOUS SILK GOWN',
        price: '₦55,000.00',
        image: '/images/gown1.jpg',
      },
      {
        title: 'EVENING BLACK GOWN',
        price: '₦60,000.00',
        image: '/images/gown2.jpg',
      },
      {
        title: 'RED CORSET GOWN',
        price: '₦48,000.00',
        image: '/images/gown3.jpg',
      },
      {
        title: 'WHITE LACE GOWN',
        price: '₦50,000.00',
        image: '/images/gown4.jpg',
      },
    ],
  },
  {
    title: 'JALABIYA',
    description: 'Traditional meets modern Jalabiyas',
    products: [
      {
        title: 'NAVY EMBROIDERED JALABIYA',
        price: '₦38,000.00',
        image: '/images/jalabiya1.jpg',
      },
      {
        title: 'WHITE ROYAL JALABIYA',
        price: '₦40,000.00',
        image: '/images/jalabiya2.jpg',
      },
      {
        title: 'CLASSIC GREY JALABIYA',
        price: '₦35,000.00',
        image: '/images/jalabiya3.jpg',
      },
      {
        title: 'BLACK & GOLD JALABIYA',
        price: '₦47,000.00',
        image: '/images/jalabiya4.jpg',
      },
    ],
  },
  {
    title: 'SHOES',
    description: 'Step out in style with our latest shoes',
    products: [
      {
        title: 'BLACK HEEL SANDALS',
        price: '₦28,000.00',
        image: '/images/shoes1.jpg',
      },
      {
        title: 'BROWN LEATHER SLIPPERS',
        price: '₦25,000.00',
        image: '/images/shoes2.jpg',
      },
      {
        title: 'WHITE PLATFORM SNEAKERS',
        price: '₦30,000.00',
        image: '/images/shoes3.jpg',
      },
      {
        title: 'GOLDEN STILETTO HEELS',
        price: '₦35,000.00',
        image: '/images/shoes4.jpg',
      },
    ],
  },
  {
    title: 'BAGS',
    description: 'Chic and functional bags for every outing',
    products: [
      {
        title: 'BLACK SHOULDER BAG',
        price: '₦22,000.00',
        image: '/images/bag1.jpg',
      },
      {
        title: 'TAN LEATHER TOTE',
        price: '₦27,000.00',
        image: '/images/bag2.jpg',
      },
      {
        title: 'WHITE MINI HANDBAG',
        price: '₦20,000.00',
        image: '/images/bag3.jpg',
      },
      {
        title: 'LUXURY DESIGNER BAG',
        price: '₦80,000.00',
        image: '/images/bag4.jpg',
      },
    ],
  },
  {
    title: 'CAPS',
    description: 'Finish your look with a stylish cap',
    products: [
      {
        title: 'BLACK COTTON CAP',
        price: '₦8,000.00',
        image: '/images/cap1.jpg',
      },
      {
        title: 'WHITE BASEBALL CAP',
        price: '₦9,000.00',
        image: '/images/cap2.jpg',
      },
      {
        title: 'BEIGE BUCKET HAT',
        price: '₦10,000.00',
        image: '/images/cap3.jpg',
      },
      {
        title: 'DENIM SNAPBACK',
        price: '₦11,000.00',
        image: '/images/cap4.jpg',
      },
    ],
  },
  {
    title: 'SCARVES',
    description: 'Wrap up in elegance with our scarf collection',
    products: [
      {
        title: 'SILK FLORAL SCARF',
        price: '₦15,000.00',
        image: '/images/scarf1.jpg',
      },
      {
        title: 'PLAIN WOOL SCARF',
        price: '₦12,000.00',
        image: '/images/scarf2.jpg',
      },
      {
        title: 'TWO-TONE HEADWRAP',
        price: '₦10,000.00',
        image: '/images/scarf3.jpg',
      },
      {
        title: 'SATIN PRINT SCARF',
        price: '₦14,000.00',
        image: '/images/scarf4.jpg',
      },
    ],
  },
  {
    title: 'HIJABS',
    description: 'Elegant hijabs in various colors and fabrics',
    products: [
      {
        title: 'BLACK GEORGETTE HIJAB',
        price: '₦9,000.00',
        image: '/images/hijab1.jpg',
      },
      {
        title: 'NUDE SILK HIJAB',
        price: '₦11,000.00',
        image: '/images/hijab2.jpg',
      },
      {
        title: 'PINK CHIFFON HIJAB',
        price: '₦10,000.00',
        image: '/images/hijab3.jpg',
      },
      {
        title: 'MINT CREPE HIJAB',
        price: '₦12,000.00',
        image: '/images/hijab4.jpg',
      },
    ],
  },
  {
    title: 'UNDERWEAR',
    description: 'Soft, breathable and invisible undergarments',
    products: [
      {
        title: 'SEAMLESS BRALETTE SET',
        price: '₦15,000.00',
        image: '/images/underwear1.jpg',
      },
      {
        title: 'NUDE SLIP SHORTS',
        price: '₦7,000.00',
        image: '/images/underwear2.jpg',
      },
      {
        title: 'COTTON LACE BRA',
        price: '₦10,000.00',
        image: '/images/underwear3.jpg',
      },
      {
        title: 'INVISIBLE PANTY PACK (3)',
        price: '₦9,500.00',
        image: '/images/underwear4.jpg',
      },
    ],
  },
];

function Products() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {categories.map((category, catIndex) => {
        const bgColor = catIndex % 2 === 0 ? 'bg-white' : 'bg-[#F1E8DF]';

        return (
          <div key={catIndex} className={`w-full ${bgColor} flex justify-center`}>
            <div className="w-[70%] flex items-center justify-center py-[70px] flex-col gap-[40px]">
              {/* Title */}
              <div className="flex flex-col justify-center items-center gap-[15px]">
                <p className="text-[40px]">{category.title}</p>
                <p className="text-[18px] text-[#686868] font-semibold">{category.description}</p>
              </div>

              {/* Product Grid */}
              <div className="w-full flex justify-between items-center flex-wrap gap-y-10">
                {category.products.map((product, index) => (
                  <div key={index} className="w-[23%] flex flex-col gap-[7px]">
                    <div className="w-full h-[400px] bg-gray-500 overflow-hidden rounded-md">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-full flex-col gap-[7px] flex">
                      <p className="text-[18px] font-semibold text-[#686868]">{product.title}</p>
                      <p className="text-[30px]">{product.price}</p>
                    </div>
                    <button className="w-[80%] border-2 border-black py-[15px] rounded-[10px] mt-[10px] text-[18px] font-bold cursor-pointer hover:bg-black hover:text-white">
                      Contact Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;

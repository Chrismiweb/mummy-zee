import React, { useState } from 'react';

export default function CategorySection({ category, index }) {
  const { title, description, products } = category;
  const bgColor = index % 2 === 0 ? 'bg-white' : 'bg-[#F1E8DF]';

  // track whether we've expanded to show all products
  const [expanded, setExpanded] = useState(false);

  // decide how many products to display
  const shownProducts = expanded ? products : products.slice(0, 4);

  return (
    <div className={`w-full ${bgColor} flex justify-center`}>
      <div className="w-[70%] py-[70px] flex flex-col items-center gap-[40px]">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-[15px]">
          <p className="text-[40px]">{title}</p>
          <p className="text-[18px] text-[#686868] font-semibold">
            {description}
          </p>
        </div>

        {/* Products Grid */}
        <div className="w-full flex flex-wrap justify-between gap-y-10">
          {shownProducts.map((product, idx) => (
            <div key={idx} className="w-[23%] flex flex-col gap-[7px]">
              <div className="w-full h-[400px] overflow-hidden rounded-md bg-gray-500">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-[7px]">
                <p className="text-[18px] font-semibold text-[#686868]">
                  {product.title}
                </p>
                <p className="text-[30px]">{product.price}</p>
              </div>
              <button className="w-[80%] border-2 border-black py-[15px] rounded-[10px] mt-[10px] text-[18px] font-bold cursor-pointer hover:bg-black hover:text-white">
                Contact Now
              </button>
            </div>
          ))}
        </div>

        {/* View More / View Less */}
        {products.length > 4 && (
          <button
            onClick={() => setExpanded(exp => !exp)}
            className="text-[18px] font-semibold mt-4 underline"
          >
            {expanded ? 'View Less' : 'View More'}
          </button>
        )}
      </div>
    </div>
  );
}

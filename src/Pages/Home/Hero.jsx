import React, { useState, useEffect, useRef } from 'react';

const products = [
  {
    title: 'This is the first product',
    price: 'N90,000',
    image: '/images/product1.jpg',
  },
  {
    title: 'This is the second product',
    price: 'N70,000',
    image: '/images/product2.jpg',
  },
  {
    title: 'This is the third product',
    price: 'N120,000',
    image: '/images/product3.jpg',
  },
  {
    title: 'This is the fourth product',
    price: 'N85,000',
    image: '/images/product4.jpg',
  },
  {
    title: 'This is the fifth product',
    price: 'N60,000',
    image: '/images/product5.jpg',
  },
];

function Hero() {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const sliderRef = useRef(null);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle transition end for looping
  useEffect(() => {
    const slider = sliderRef.current;
    const handleTransitionEnd = () => {
      if (index === products.length) {
        // Disable animation, jump back to index 0
        setIsAnimating(false);
        setIndex(0);
      }
    };
    slider.addEventListener('transitionend', handleTransitionEnd);
    return () => slider.removeEventListener('transitionend', handleTransitionEnd);
  }, [index]);

  // Re-enable animation after jump to 0
  useEffect(() => {
    if (!isAnimating) {
      const timeout = setTimeout(() => {
        setIsAnimating(true);
      }, 50); // short delay to avoid flashing
      return () => clearTimeout(timeout);
    }
  }, [isAnimating]);

  // Slide list with first item cloned at the end
  const slides = [...products, products[0]];

  return (
    <div className="w-screen h-[70vh] overflow-hidden border-b-[0.5px] border-black relative pt-[40px]">
      <div
        ref={sliderRef}
        className={`flex ${isAnimating ? 'transition-transform duration-700 ease-in-out' : ''}`}
        style={{
          transform: `translateX(-${index * 100}vw)`,
          width: `${slides.length * 100}vw`,
        }}
      >
        {slides.map((product, idx) => (
          <div
            key={idx}
            className="w-screen flex justify-center items-center gap-[40px] flex-shrink-0 px-10"
          >
            <div className="w-[30%] flex flex-col gap-[20px]">
              <p className="text-[60px] font-bold">{product.title}</p>
              <p className="text-[30px] font-bold">{product.price}</p>
              <button className="w-[40%] border-2 border-black py-[15px] rounded-[10px] text-[18px] font-bold cursor-pointer hover:bg-black hover:text-white">
                Contact Now
              </button>
            </div>
            <div className="bg-amber-950 w-[500px] h-[500px] rounded-full flex justify-center items-center overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;

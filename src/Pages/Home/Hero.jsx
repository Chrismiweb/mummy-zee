import React, { useState, useEffect, useRef } from 'react';

function Hero() {
  const [products, setProducts]     = useState([]);
  const [index, setIndex]           = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const sliderRef = useRef(null);

  // 1) Fetch products once on mount
  useEffect(() => {
    fetch('http://localhost:1040/all-product')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => setProducts(data.products || []))
      .catch(err => console.error('Failed to load products:', err));
  }, []);

  // 2) Start auto-slide only after we have products
  useEffect(() => {
    if (products.length === 0) return;
    const interval = setInterval(() => {
      setIndex(prev => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [products]);

  // 3) Handle the “clone‐to‐front” trick on transition end
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const onTransitionEnd = () => {
      // when we've slid onto the cloned first slide...
      if (index === products.length) {
        // jump without animation back to 0
        setIsAnimating(false);
        setIndex(0);
      }
    };

    slider.addEventListener('transitionend', onTransitionEnd);
    return () => slider.removeEventListener('transitionend', onTransitionEnd);
  }, [index, products]);

  // 4) Re-enable animation right after the “jump”
  useEffect(() => {
    if (!isAnimating) {
      const t = setTimeout(() => setIsAnimating(true), 50);
      return () => clearTimeout(t);
    }
  }, [isAnimating]);

  // Build slides: products plus a clone of the first
  const slides = products.length ? [...products, products[0]] : [];

  // Show loading until we have data
  if (products.length === 0) {
    return (
      <div className="w-screen h-[70vh] flex items-center justify-center">
        <p>Loading…</p>
      </div>
    );
  }

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
              <p className="text-[60px] font-bold">{product.productName}</p>
              <p className="text-[30px] font-bold">₦{product.price}</p>
              <button className="w-[40%] border-2 border-black py-[15px] rounded-[10px] text-[18px] font-bold cursor-pointer hover:bg-black hover:text-white">
                Contact Now
              </button>
            </div>
            <div className=" w-[500px] h-[500px] rounded-full flex justify-center items-center overflow-hidden">
              <img
                src={product.productImage}
                alt={product.productName}
                loading="lazy"
                decoding="async"
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

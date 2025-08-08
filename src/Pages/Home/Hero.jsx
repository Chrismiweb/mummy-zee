import React, { useState, useEffect, useRef } from 'react';

function Hero() {
  const [products, setProducts]     = useState([]);
  const [index, setIndex]           = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const sliderRef = useRef(null);

  // 1) Fetch products once on mount
  useEffect(() => {
    fetch('https://mummy-zee-backend-1.onrender.com/api/all-product')
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
    <div className="w-full  overflow-hidden border-b-[0.5px] border-black relative py-[50px] md:py-[40px] lg:py-[60px]">
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
            className="w-screen flex flex-col-reverse md:flex-row justify-center items-center md:gap-[30px] lg:gap-[40px] gap-[40px]"
          >
            <div className="md:w-[40%] lg:w-[30%] w-[80%] flex flex-col gap-[20px] justify-center items-center md:justify-start md:items-start">
              <p className="md:text-[4vh] lg:text-[5.5vh] xl:text-[7vh] text-[5vh] font-bold text-center md:text-left">{product.productName}</p>
              <p className="md:text-[2vh] lg:text-[4vh] text-[3vh] font-bold">₦{product.price}</p>
              <a href={`https://wa.me/2347035722334?text=${encodeURIComponent(
                  `Hello! I'm interested in this product:\n${product.title}\nPrice: ${product.price}\nProduct Image: ${product.productImage}`
                )}`}
                target="_blank"
                rel="noopener noreferrer" className=" lg:w-[40%] md:w-[70%] w-[60%]  border-2 border-black py-[15px] rounded-[10px] text-[18px] font-bold cursor-pointer hover:bg-black hover:text-white justify-center items-center flex">
                Contact Now
              </a>
            </div>
            <div className="w-[40vh] h-[40vh] lg:w-[35vh] lg:h-[35vh] xl:w-[60vh] xl:h-[60vh] md:w-[20vh] md:h-[20vh] rounded-full flex justify-center items-center overflow-hidden">
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

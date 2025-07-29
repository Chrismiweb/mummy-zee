// custom hook: useProducts.js
import { useState, useEffect } from 'react';

export function useProducts() {
  const [data, setData]     = useState(null);
  const [error, setError]   = useState(null);
  useEffect(() => {
    fetch('http://localhost:1040/all-product')
      .then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then(({ products }) => {
        // group by category
        const grouped = products.reduce((acc, p) => {
          (acc[p.category] ||= []).push(p);
          return acc;
        }, {});
        setData(grouped);
      })
      .catch(err => setError(err.message));
  }, []);
  return { grouped: data, error };
}

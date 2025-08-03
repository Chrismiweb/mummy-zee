import React, { useMemo } from 'react';
import { useProducts } from '../../hooks/useProducts';
import CategorySection from './CategorySection';
// import CategorySection from './CategorySection';  

const categoryMeta = {
  all:       { title: 'ALL PRODUCTS',  description: 'Browse our full collection' },
  abaya:     { title: 'ABAYA',         description: 'Check out our newest Abayas' },
  gown:      { title: 'GOWN',          description: 'Explore our elegant gowns' },
  jalabiya:  { title: 'JALABIYA',      description: 'Traditional meets modern Jalabijas' },
  shoe:      { title: 'SHOES',         description: 'Step out in style with our latest shoes' },
  bag:       { title: 'BAGS',          description: 'Chic and functional bags for every outing' },
  cap:       { title: 'CAPS',          description: 'Finish your look with a stylish cap' },
  scarve:    { title: 'SCARVES',       description: 'Wrap up in elegance with our scarf collection' },
  hijab:     { title: 'HIJABS',        description: 'Elegant hijabs in various colors and fabrics' },
  underwear: { title: 'UNDERWEAR',     description: 'Soft, breathable and invisible undergarments' },
};

// function Products({searchQuery}) {
//   // 1. Always call hooks at the top level, in the same order
//   const { grouped, error } = useProducts();

//   const cleanPrice = (value) => {
//     if (typeof value === 'number') return value;
//     if (typeof value === 'string') {
//       const sanitized = value.replace(/[^0-9.]/g, ''); // remove ₦, commas, spaces
//       return Number(sanitized) || 0;
//     }
//     return 0;
//   };

//   // 2. Always call useMemo (or any hook) unconditionally
//     const sections = useMemo(() => {
//       if (!grouped || typeof grouped !== 'object') return [];
//       return Object.entries(grouped).map(([key, prods]) => ({
//         key,
//         title: categoryMeta[key]?.title || key.toUpperCase(),
//         description: categoryMeta[key]?.description || '',
//         products: prods.map(p => ({
//           title: p.productName.trim(),
//           price: `₦${cleanPrice(p.price).toLocaleString()}`,
//           image: p.productImage,
//         })),
//       }));
//     }, [grouped]);


//   // 3. Early returns only affect rendering, not hook order
//   if (error)   return <p className="text-red-600">Error: {error}</p>;
//   // if (!grouped) return <p>Loading…</p>;
//   if (!grouped || typeof grouped !== 'object') return <p>Loading…</p>;


//     // Filter products based on searchQuery
//     const filteredSections = useMemo(() => {
//         if (!sections || sections.length === 0) return [];
//         if (!searchQuery) return sections;  // Show all if search is empty

//         return sections
//           .map(section => ({
//             ...section,
//             products: section.products.filter(p =>
//               p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//               section.key.toLowerCase().includes(searchQuery.toLowerCase())
//             ),
//           }))
//           .filter(section => section.products.length > 0);
//       }, [searchQuery, sections]);



//   // if (filteredSections.length === 0) {
//   //   return <p className='text-center text-gray-500 mt-10'>No products found.</p>;
//   // }

//   // 4. Now render your sections
//   return (
//     <div className="w-full flex flex-col items-center">
//       {filteredSections.map((sec, i) => (
//         <CategorySection
//           key={sec.key}
//           category={sec}
//           index={i}
//         />
//       ))}
//     </div>
//   );
// }
function Products({ searchQuery }) {
  const { grouped, error } = useProducts();

  const cleanPrice = (value) => {
    if (typeof value === 'number') return value;
    if (typeof value === 'string') {
      const sanitized = value.replace(/[^0-9.]/g, '');
      return Number(sanitized) || 0;
    }
    return 0;
  };

  const sections = useMemo(() => {
    if (!grouped || typeof grouped !== 'object') return [];
    return Object.entries(grouped).map(([key, prods]) => ({
      key,
      title: categoryMeta[key]?.title || key.toUpperCase(),
      description: categoryMeta[key]?.description || '',
      products: prods.map(p => ({
        title: p.productName.trim(),
        price: `₦${cleanPrice(p.price).toLocaleString()}`,
        image: p.productImage,
      })),
    }));
  }, [grouped]);

  const filteredSections = useMemo(() => {
    if (!sections || sections.length === 0) return [];
    if (!searchQuery) return sections;

    return sections
      .map(section => ({
        ...section,
        products: section.products.filter(p =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          section.key.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      }))
      .filter(section => section.products.length > 0);
  }, [searchQuery, sections]);

  // 🟢 Hooks must be called before returns
  if (error) return <p className="text-red-600">Error: {error}</p>;
  if (!grouped || typeof grouped !== 'object') return <p>Loading…</p>;

  return (
    <div className="w-full flex flex-col items-center">
      {filteredSections.map((sec, i) => (
        <CategorySection
          key={sec.key}
          category={sec}
          index={i}
        />
      ))}
    </div>
  );
}

export default Products;



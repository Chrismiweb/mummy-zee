// import React, { useState, useEffect } from 'react';

// export default function ProductList() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setError('');
//       try {
//         const token = localStorage.getItem('token');
//         const res = await fetch('http://localhost:1040/all-product', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         const data = await res.json();

//         if (!res.ok) {
//           throw new Error(data.message || 'Failed to fetch products');
//         }

//         setProducts(data.products);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <p className="text-xl">Loading products…</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <p className="text-red-600 text-xl">Error: {error}</p>
//       </div>
//     );
//   }

//   // If no products are returned
//   if (products.length === 0) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <p className="text-2xl text-gray-600">No products uploaded</p>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col gap-[50px] py-[40px] px-[50px]">
//       <div className="flex items-center justify-between">
//         <p className="text-[50px]">All Products</p>
//         <input
//           type="text"
//           placeholder="Search"
//           className="bg-[#F2F2F2] w-[50%] px-[30px] placeholder:text-black placeholder:text-[20px] placeholder:font-semibold py-[10px] rounded-full"
//         />
//       </div>

//       <div className="w-[100%] grid grid-cols-5 gap-[30px]">
//         {products.map((product) => (
//           <div key={product._id} className="w-[98%] flex flex-col gap-[7px]">
//             <div className="w-full h-[400px] bg-gray-500 overflow-hidden rounded-md">
//               <img
//                 src={product.productImage}
//                 alt={product.productName}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="flex flex-col gap-[7px] w-full">
//               <p className="text-[18px] font-semibold text-[#686868]">
//                 {product.productName}
//               </p>
//               <p className="text-[18px] font-semibold text-[#686868]">
//                 Size: {product.size}
//               </p>
//               <p className="text-[24px] font-semibold text-black">
//                 Category: {product.category}
//               </p>
//               <p className="text-[27px]">₦{product.price}</p>
//             </div>
//             <div className="flex w-full items-center justify-between">
//               <button className="w-[45%] py-[15px] rounded-[10px] mt-[10px] text-[18px] font-bold cursor-pointer hover:bg-green-700 hover:text-white bg-green-600 text-white shadow-md">
//                 Edit
//               </button>
//               <button className="w-[45%] py-[15px] rounded-[10px] mt-[10px] text-[18px] font-bold cursor-pointer hover:bg-red-700 hover:text-white bg-red-600 text-white shadow-md">
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function ProductList() {
  const [products, setProducts]       = useState([]);
  const [loading, setLoading]         = useState(true);
  const [error, setError]             = useState('');
  const [showEditModal, setShowEditModal]     = useState(false);
  const [editingProduct, setEditingProduct]   = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletingId, setDeletingId]           = useState(null);

  const navigate = useNavigate();

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch('http://localhost:1040/all-product', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || 'Failed to fetch products');
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Open edit modal
  const handleEditClick = product => {
    setEditingProduct(product);
    setShowEditModal(true);
  };

  // Handle edit form submission
  const handleUpdate = async updated => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`http://localhost:1040/update-products/${updated._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updated),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Update failed');

      setProducts(products.map(p => p._id === updated._id ? data.product : p));
      toast.success('Product updated');
      setShowEditModal(false);
    } catch (err) {
      toast.error(err.message);
    }
  };

  // Open delete modal
  const handleDeleteClick = id => {
    setDeletingId(id);
    setShowDeleteModal(true);
  };

  // Confirm delete
  const confirmDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`http://localhost:1040/delete-product/${deletingId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Delete failed');

      setProducts(products.filter(p => p._id !== deletingId));
      toast.success('Product deleted');
    } catch (err) {
      toast.error(err.message);
    } finally {
      setShowDeleteModal(false);
    }
  };

  if (loading) return <p className="text-center mt-20">Loading…</p>;
  if (error)   return <p className="text-red-600 text-center mt-20">Error: {error}</p>;
  if (products.length === 0)
    return <p className="text-center mt-20 text-gray-600">No products uploaded</p>;

  return (
    <>
      <ToastContainer />

      <div className="flex flex-col gap-12 py-10 px-12">
          <div className="flex items-center justify-between">
            <p className="text-[50px]">All Products</p>
            <input
              type="text"
              placeholder="Search"
              className="bg-[#F2F2F2] w-[50%] px-[30px] placeholder:text-black placeholder:text-[20px] placeholder:font-semibold py-[10px] rounded-full"
            />
          </div>

        <div className="grid grid-cols-5 gap-8">
          {products.map(product => (
            <div key={product._id} className="bg-white shadow rounded p-4">
              <img
                src={product.productImage}
                alt={product.productName}
                className="h-48 w-full object-cover rounded"
              />
              <h2 className="mt-2 font-semibold">{product.productName}</h2>
              <p>Size: {product.size}</p>
              <p>Category: {product.category}</p>
              <p className="text-lg font-bold">₦{product.price}</p>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => handleEditClick(product)}
                  className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700 cursor-pointer"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteClick(product._id)}
                  className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700 cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Modal */}
      {showEditModal && editingProduct && (
        <div className="fixed inset-0 bg-white/100 bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-xl font-semibold mb-4">Edit Product</h3>
            <EditForm
              product={editingProduct}
              onSave={handleUpdate}
              onCancel={() => setShowEditModal(false)}
            />
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-sm w-full p-6 text-center">
            <p className="text-lg mb-6">
              Are you sure you want to delete this product?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Separate form component for editing
function EditForm({ product, onSave, onCancel }) {
  const [form, setForm] = useState({ ...product });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const submit = e => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form onSubmit={submit} className="space-y-4 shadow-lg px-[60px] py-[30px]">
      <div>
        <label className="block mb-1">Product Name</label>
        <input
          name="productName"
          value={form.productName}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
      </div>
      <div>
        <label className="block mb-1">Price</label>
        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
      </div>
      <div>
        <label className="block mb-1">Size</label>
        <select
          name="size"
          value={form.size}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        >
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
      </div>
      <div>
        <label className="block mb-1">Category</label>
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        >
          <option>abaya</option>
          <option>jalabiya</option>
          <option>gown</option>
          <option>shoe</option>
          <option>bag</option>
          <option>cap</option>
          <option>scarve</option>
          <option>hijab</option>
          <option>underwear</option>
          <option>veil</option>
          <option>all</option>
        </select>
      </div>
      <div className="flex justify-end gap-2 mt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 cursor-pointer"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}

import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import Sidebar from '../../../component/Sidebar';
import { Input, Space } from 'antd';
const { Search } = Input;

export default function ProductList() {
  const [products, setProducts]       = useState([]);
  const [loading, setLoading]         = useState(true);
  const [error, setError]             = useState('');
  const [showEditModal, setShowEditModal]     = useState(false);
  const [editingProduct, setEditingProduct]   = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletingId, setDeletingId]           = useState(null);
  const [showSidebar, setShowSidebar] = useState(false)
  const [searchQuery, setSearchQuery] = useState(''); // <-- Search Query
    
    
//   handle display sidebar
  const handleDisplaySidebar = () => {
      setShowSidebar(true); // open sidebar
  };

  const handleCloseSidebar = () => {
      setShowSidebar(false); // close sidebar
  };
  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch('https://mummy-zee-backend-1.onrender.com/api/all-product', {
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
      const res = await fetch(`https://mummy-zee-backend-1.onrender.com/api/update-products/${updated._id}`, {
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
      const res = await fetch(`https://mummy-zee-backend-1.onrender.com/api/delete-product/${deletingId}`, {
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

    // Handle Search Input Change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  // Filtered Products based on Search Query
  const filteredProducts = products.filter((product) => {
    return (
      product.productName.toLowerCase().includes(searchQuery) ||
      product.category.toLowerCase().includes(searchQuery)
    );
  });

  const highlightMatch = (text, query) => {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, 'gi');
  const parts = text.split(regex);
  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <span key={index} className="text-blue-500">{part}</span>
    ) : (
      part
    )
  );
};


  if (loading) return <p className="text-center mt-20">Loading…</p>;
  if (error)   return <p className="text-red-600 text-center mt-20">Error: {error}</p>;
  if (products.length === 0)
    return <p className="text-center mt-20 text-gray-600">No products uploaded</p>;

  return (
    <>
      <ToastContainer />

      <div className="flex flex-col gap-12 py-10 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-[30px]">
            <div className='flex justify-between w-full'>
                <p className="text-[28px] md:text-[5vh]">All Products</p>
                <div className='flex lg:hidden w-[30%]  justify-end'>
                    <div>
                        {!showSidebar && (
                            <button onClick={handleDisplaySidebar} className='text-[30px] md:text-[6vw]'>
                            <HiOutlineMenuAlt3 />
                            </button>
                        )}
                    </div>
                    {/* Mobile sidebar */}
                      {showSidebar && (
                          <Sidebar onClose={handleCloseSidebar} />
                      )}
                </div>
            </div>
            <Space direction="vertical">
              <Search
                placeholder="SEARCH PRODUCTS"
                allowClear
                className="placeholder:font-bold"
                value={searchQuery}
                onChange={handleSearchChange}
                style={{
                      width: window.innerWidth >= 1024
                        ? '800px' // lg
                        : window.innerWidth >= 768
                        ? '90vw' // md
                        : '90vw'  // sm
                    }}
              />
            </Space>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-[12px] md:gap-[8px] lg:gap-[5px]">
          {filteredProducts.map(product => (
            <div key={product._id} className="bg-white shadow rounded p-4 w-[100%] gap-[5px] flex flex-col">
              <img
                src={product.productImage}
                alt={product.productName}
                className="h-48 w-full object-fill rounded"
              />
              <h2 className="mt-2 font-semibold text-[20px] md:text-[2.3vh] lg:text-[2vh]">{highlightMatch(product.productName, searchQuery)}</h2>
              <p className='text-[18px] md:text-[2.1vh] lg:text-[1.7vh]'>Size: {product.size}</p>
              <p className='text-[18px] md:text-[2.1vh] lg:text-[1.7vh]'>Category: {highlightMatch(product.category, searchQuery)}</p>
              <p className="text-[20px] md:text-[2.3vh] lg:text-[1.9vh] font-bold">₦{product.price}</p>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => handleEditClick(product)}
                  className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700 cursor-pointer text-[20px] md:text-[2.1vh] lg:text-[1.7vh]"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteClick(product._id)}
                  className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700 cursor-pointer text-[20px] md:text-[2.1vh] lg:text-[1.7vh]"
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
    <form onSubmit={submit} className="space-y-4 shadow-lg px-[60px] py-[30px] ">
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

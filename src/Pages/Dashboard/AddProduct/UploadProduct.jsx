import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../../component/Sidebar';
import { HiOutlineMenuAlt3 } from "react-icons/hi"


const UploadProduct = () => {
  const [formData, setFormData] = useState({
    productName: '',
    price: '',
    size: '',
    category: '',
    productImage: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showSidebar, setShowSidebar] = useState(false)
    const navigate = useNavigate()
    
      
    //   handle display sidebar
      const handleDisplaySidebar = () => {
          setShowSidebar(true); // open sidebar
      };
    
      const handleCloseSidebar = () => {
          setShowSidebar(false); // close sidebar
      };


  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, productImage: file }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const { productName, price, size, category, productImage } = formData;
    if (!productName || !price || !size || !category || !productImage) {
      setError('Please complete all fields and upload an image.');
      return;
    }

    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const payload = new FormData();
      payload.append('productName', productName);
      payload.append('price', price);
      payload.append('size', size);
      payload.append('category', category);
      payload.append('productImage', productImage);

      const res = await fetch('https://mummy-zee-backend-1.onrender.com/api/add-product', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: payload,
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Upload failed');
      }

      setSuccess('Product uploaded successfully!');
      navigate("/products")
      setFormData({
        productName: '',
        price: '',
        size: '',
        category: '',
        productImage: null,
      });
      setImagePreview(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      productName: '',
      price: '',
      size: 'Small',
      category: 'abaya',
      productImage: null,
    });
    setImagePreview(null);
    setError('');
    setSuccess('');
  };

  return (
    <div className="w-full bg-gray-100 py-10 flex flex-col lg:px-[30px] justify-center items-center">
      <div className='flex justify-between w-full px-[30px] lg:px-0'>
          <p className="text-[28px] md:text-[5vh]">Add New Product</p>
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
      <div className="lg:w-[60%] w-[90%] px-[30px] py-[30px] mt-[40px] lg:mt-[100px] bg-white rounded-[20px] shadow-lg">
        {/* <h2 className="text-[40px] font-semibold mb-1">Add New Product</h2> */}
        <p className="text-gray-500 mb-4 text-[18px] md:text-[2.1vh] lg:text-[1.7vh]">
          Add information and upload a product image
        </p>

        {error && <p className="text-red-600 mb-4">{error}</p>}
        {success && <p className="text-green-600 mb-4">{success}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Product Name */}
          <div className="flex flex-col gap-[10px]">
            <label className="text-[20px] md:text-[2.5vh] lg:text-[2.5vh] text-gray-500">Product Name</label>
            <input
              type="text"
              name="productName"
              placeholder="Product Name"
              value={formData.productName}
              onChange={handleChange}
              className="w-full px-[20px] py-[15px] border border-gray-300 rounded-[10px]"
            />
          </div>

          {/* Price */}
          <div className="flex flex-col gap-[10px]">
            <label className="text-[20px] md:text-[2.5vh] lg:text-[2.5vh] text-gray-500">Price</label>
            <input
              type="text"
              name="price"
              placeholder="Sale Price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-[20px] py-[15px] border border-gray-300 rounded-[10px]"
            />
          </div>

          {/* Size */}
          <div className="flex flex-col gap-[10px]">
            <label className="text-[20px] md:text-[2.5vh] lg:text-[2.5vh] text-gray-500">Size</label>
            <select
              name="size"
              value={formData.size}
              onChange={handleChange}
              className="w-full px-[20px] py-[15px] border border-gray-300 rounded-[10px] cursor-pointer"
            >
               <option value="" disabled>Select size</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>

          {/* Category */}
          <div className="flex flex-col gap-[10px]">
            <label className="text-[20px] md:text-[2.5vh] lg:text-[2.5vh] text-gray-500">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-[20px] py-[15px] border border-gray-300 rounded-[10px] cursor-pointer"
            >
               <option value="" disabled>Select Category</option>
              <option value="abaya">Abaya</option>
              <option value="jalabiya">Jalabiya</option>
              <option value="gown">Gown</option>
              <option value="shoe">Shoe</option>
              <option value="bag">Bag</option>
              <option value="cap">Cap</option>
              <option value="scarve">Scarve</option>
              <option value="hijab">Hijab</option>
              <option value="underwear">Underwear</option>
              <option value="veil">Veil</option>
              <option value="all">All</option>
            </select>
          </div>

          {/* Image Upload */}
          <div className="border-2 border-dashed border-gray-400 rounded-md w-full h-60 flex items-center justify-center cursor-pointer relative bg-white">
            <label
              htmlFor="file-upload"
              className="block w-full text-center p-4 text-gray-500 text-[30px] hover:text-blue-600"
            >
              Upload Image Here
            </label>
            <input
              type="file"
              accept="image/*"
              id="file-upload"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>

          {/* Preview */}
          {imagePreview && (
            <div className="mt-2">
              <img
                src={imagePreview}
                alt="Preview"
                className="max-h-60 w-auto object-cover rounded"
              />
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition text-[20px] md:text-[2.5vh] lg:text-[2.5vh]"
            >
              {loading ? 'Saving…' : 'Save'}
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition text-[20px] md:text-[2.5vh] lg:text-[2.5vh]"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadProduct;

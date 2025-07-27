import React, { useState } from 'react';

const UploadProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    regularPrice: '',
    salePrice: '',
    size: 'Small',
    stock: '',
    sku: '',
    category: '',
    tag: '',
    description: '',
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    // Upload logic (e.g. FormData API for file upload) goes here
  };

  const handleReset = () => {
    setFormData({
      name: '',
      regularPrice: '',
      salePrice: '',
      size: 'Small',
      stock: '',
      sku: '',
      category: '',
      tag: '',
      description: '',
      image: null,
    });
    setImagePreview(null);
  };

  return (
<div className='w-full bg-gray-100 py-[100px]'>
    <div className="w-[60%] mx-auto px-[30px] py-[30px] bg-white rounded-[20px]">
      <h2 className="text-[40px] font-semibold mb-1">Add New Product</h2>
      <p className="text-gray-500 mb-4 text-[15px]">Add information and upload a product image</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className='flex flex-col gap-[10px]'>
            <p className='text-[20px] text-gray-500'>Product Name</p>
            <input type="text" name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} className="w-full px-[20px] py-[15px] border border-gray-300 rounded-[10px]" />
        </div>
        <div className='flex flex-col gap-[10px]'>
            <p className='text-[20px] text-gray-500'>Price</p>
            <input type="text" name="salePrice" placeholder="Sale Price" value={formData.salePrice} onChange={handleChange} className="w-full px-[20px] py-[15px] border border-gray-300 rounded-[10px]" />
        </div>
        <div className='flex flex-col gap-[10px]'>
            <p className='text-[20px] text-gray-500'>Size</p>
            <select name="size" value={formData.size} onChange={handleChange} className="w-full px-[20px] py-[15px] border border-gray-300 rounded-[10px] cursor-pointer">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="Large">All Size</option>
            </select>
        </div>
        <div className='flex flex-col gap-[10px]'>
            <p className='text-[20px] text-gray-500'>Category </p>
            <select name="size" value={formData.size} onChange={handleChange} className="w-full px-[20px] py-[15px] border border-gray-300 rounded-[10px] cursor-pointer">
            <option value="Small">Abaya</option>
            <option value="Medium">Shoe</option>
            <option value="Large">Jalabiyas</option>
            <option value="Large">All</option>
            </select>
        </div>
        <div
            className="border-2 border-dashed border-gray-400 rounded-md w-full h-60 flex items-center justify-center cursor-pointer relative bg-white"
        >
              <label
                htmlFor="file-upload"
                className="block w-full text-center p-4 text-gray-500 bg-white cursor-pointer text-[30px] hover:text-blue-600"
            >
                Upload Image or Video Here
            </label>
            <input
                type="file"
                accept="image/*"
                id="file-upload"
                className="hidden"
            />
        </div>

        <div className="flex gap-4">
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Save</button>
          <button type="button" onClick={handleReset} className="bg-gray-300 text-black px-4 py-2 rounded">Cancel</button>
        </div>
      </form>
    </div>
</div>
  );
};

export default UploadProduct;

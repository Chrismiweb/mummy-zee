import React from 'react'
import Sidebar from '../../../component/Sidebar'
import ProductList from './ProductList'

function ProductListPage() {
  return (
    <div className='flex'>
        <div className='hidden lg:flex'>
          <Sidebar />
        </div>
        <main className='w-full  px-[30px] lg:px-0 lg:w-[95%] ml-auto'>
            <ProductList/>
        </main>
    </div>
  )
}

export default ProductListPage
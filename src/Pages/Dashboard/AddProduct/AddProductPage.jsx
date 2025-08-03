import React from 'react'
import Sidebar from '../../../component/Sidebar'
import UploadProduct from './UploadProduct'

function AddProductPage() {
  return (
    <div className='flex'>
        <div className='hidden lg:flex'>
          <Sidebar />
        </div>
        <main className='w-full  px-[0px] lg:px-0 lg:w-[95%] ml-auto'>
            <UploadProduct/>
        </main>
    </div>
  )
}



export default AddProductPage
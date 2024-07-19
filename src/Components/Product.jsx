import React from 'react'
import tradingimg from '../assets/trading1.jpg'

const Product = () => {
  return (
    <div id='product' className='w-full h-full bg-[#121a25] flex flex-col max-w-[100%] mt-20 mb-10'>
      <h2 className="mb-4 text-4xl tracking-tight font-bold text-center text-gray-900 dark:text-white">About Product</h2>
      <div className='flex flex-col lg:flex-row justify-between items-center flex-grow mt-10 lg:mt-20'>
        <div className='max-w-full lg:max-w-[40%] flex justify-center lg:justify-start'>
          <img src={tradingimg} alt="" className='h-60 lg:h-80 lg:ml-36' />
        </div>
        <div className='max-w-full lg:max-w-[40%] mt-10 lg:mt-0 px-6 lg:px-0 lg:mr-36'>
          <h1 className='text-[#e9e9e9] text-3xl'>What we Provide?</h1>
          <p className='text-[#cdcdcd] mt-10 text-lg tracking-widest'>Our company offers a streamlined solution for managing multiple demat accounts effortlessly from a single platform. We simplify the process of buying or selling stocks by enabling users to execute trades across all linked accounts simultaneously with just one click. This eliminates the need to log in to each account individually, enhancing efficiency and convenience. Now, managing your investments is easier than ever, ensuring seamless transactions and centralized control over your trading activities.</p>
        </div>
      </div>
    </div>
  )
}

export default Product

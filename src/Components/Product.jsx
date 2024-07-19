import React from 'react'
import tradingimg from '../assets/trading1.jpg'

const Product = () => {
  return (
    <>
      <div id='product' className='w-full h-[85vh] bg-[#121a25] flex flex-col max-w-[100%]'>
        <h1 className='text-[#e9e9e9] text-3xl text-center'>About Product</h1>
        <div className='flex justify-between items-center flex-grow'>
          <div className='max-w-[40%]'>
            <img src={tradingimg} alt="" className='h-80 ml-36' />
          </div>
          <div className='max-w-[40%] mr-36'>
            <h1 className='text-[#e9e9e9] text-3xl'>What we Provide?</h1>
            <p className='text-[#cdcdcd] mt-10 text-lg tracking-widest'>Our company offers a streamlined solution for managing multiple demat accounts effortlessly from a single platform. We simplify the process of buying or selling stocks by enabling users to execute trades across all linked accounts simultaneously with just one click. This eliminates the need to log in to each account individually, enhancing efficiency and convenience. Now, managing your investments is easier than ever, ensuring seamless transactions and centralized control over your trading activities.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product

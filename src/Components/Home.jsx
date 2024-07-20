import React from 'react'
import heroimg from '../assets/hero-img.png'

const Home = () => {
    return (
        <div id='home' className='w-full h-fit bg-[#121a25] flex flex-col lg:flex-row mb-10'>
            <div className='flex w-full justify-between items-center flex-col lg:flex-row'>
                <div className='lg:ml-16 mt-10 lg:mt-20 lg:max-w-[40%] px-6 lg:px-0'>
                    <h1 className='text-[#e9e9e9] text-2xl lg:text-4xl font-bold'>Tired of making trades in individual accounts?</h1>
                    <p className='text-[#8d8a8a] mt-5 text-lg tracking-widest'>Automate your trades with Trading Automation and manage your trading business with ease...</p>
                    <p className='text-[#b3afaf] mt-10 text-lg tracking-widest'>In our Trading Automation platform, users can link multiple demat accounts to a single interface. This allows them to manage and execute trades seamlessly across all selected accounts. With just one click, users can buy or sell orders, ensuring that the transaction is applied uniformly across all their linked accounts. This feature streamlines the trading process, providing efficiency and convenience for managing multiple portfolios.</p>
                </div>
                <div className='lg:mr-36 mt-10 lg:mt-20 flex flex-col items-center px-6 lg:px-0'>
                    <img src={heroimg} alt="" className='h-60 lg:h-80' />
                    <button class="w-[150px] ml-8 bg-[#6d78a7c0] h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#7747FF] before:to-[#7747FF] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home

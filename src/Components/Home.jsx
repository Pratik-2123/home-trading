import React from 'react'
import heroimg from '../assets/hero-img.png'

const Home = () => {
    return (
        <div id='home' className='w-full h-fit bg-[#121a25] flex flex-col lg:flex-row mb-10'>
            <div className='flex w-full justify-between items-center flex-col lg:flex-row'>
                <div className='lg:ml-16 mt-10 lg:mt-20 lg:max-w-[40%] px-6 lg:px-0'>
                    <h1 className='text-[#e9e9e9] text-3xl lg:text-4xl'>Tired of making trades in individual accounts?</h1>
                    <h6 className='text-[#cdcdcd] mt-5 text-xl lg:text-2xl'>Automate your trades with Trading Automation and manage your trading business with ease...</h6>
                    <p className='text-[#cdcdcd] mt-10 text-lg tracking-widest'>In our Trading Automation platform, users can link multiple demat accounts to a single interface. This allows them to manage and execute trades seamlessly across all selected accounts. With just one click, users can buy or sell orders, ensuring that the transaction is applied uniformly across all their linked accounts. This feature streamlines the trading process, providing efficiency and convenience for managing multiple portfolios.</p>
                </div>
                <div className='lg:mr-36 mt-10 lg:mt-20 flex flex-col items-center px-6 lg:px-0'>
                    <img src={heroimg} alt="" className='h-60 lg:h-80' />
                    <button
                        className="relative flex items-center px-6 py-3 mt-10 lg:mt-0 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
                    >
                        <span
                            className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                        >
                            <span
                                className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-[#121a25]"
                            ></span>
                        </span>
                        <span
                            className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                        >
                            <span
                                className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-[#121a25]"
                            ></span>
                        </span>
                        <span
                            className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-[#0472ec] rounded-md group-hover:translate-x-0"
                        ></span>
                        <span
                            className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                        >Get Started</span
                        >
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home

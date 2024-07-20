import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import tradingLogo from '../assets/increase.png'; // Update the path to your logo
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='w-full h-20 bg-[#18212ffd] flex justify-between items-center sticky top-0 z-10 shadow-lg'>
      <div className='flex items-center gap-7 pl-10'>
        <img src={tradingLogo} alt="Logo" className='w-8 h-8' />
        <h2 className='text-white text-2xl'>Trading Automation</h2>
      </div>
      <div className='hidden md:flex'>
        <ul className='flex text-white gap-20 text-lg pr-10 cursor-pointer'>
          <Link to="home" spy={true} offset={-100} duration={500} smooth={true}>
            <li className='hover:text-[#7db6f6] pt-1'>Home</li>
          </Link>
          <Link to="product" spy={true} offset={-100} duration={500} smooth={true}>
            <li className='hover:text-[#7db6f6] pt-1'>Product</li>
          </Link>
          <Link to="help" spy={true} offset={-100} duration={500} smooth={true}>
            <li className='hover:text-[#7db6f6] pt-1'>Help</li>
          </Link>
          <Link to="contact" spy={true} offset={-7} duration={500} smooth={true}>
            <li className='hover:text-[#7db6f6] pt-1'>Contact</li>
          </Link>

          {
            isAuthenticated ? <li>
              <button
                className="bg-[#7747FF] border-2 border-[#9b9b9b00] rounded-lg text-white px-4 py-1.5 text-base hover:border-[#fff] cursor-pointer transition"
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
              >
                Log out
              </button>
            </li>
              :
              <li>
                <button
                  className="bg-[#7747FF] border-2 border-[#9b9b9b00] rounded-lg text-white px-4 py-1.5 text-base hover:border-[#fff] cursor-pointer transition"
                  onClick={() => loginWithRedirect()}
                >
                  Log in
                </button>
              </li>
          }



        </ul>
      </div>
      <div className='md:hidden flex items-center pr-10'>
        <button onClick={toggleMenu} className='text-white focus:outline-none'>
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>
      {isOpen && (
        <div className='absolute top-20 left-0 w-full bg-[#121a25] flex flex-col items-end md:hidden pr-20'>
          <ul className='flex flex-col text-white gap-4 text-lg py-6 cursor-pointer'>
            <Link onClick={toggleMenu} to="home" spy={true} offset={-100} duration={500} smooth={true}>
              <li className='hover:text-[#7db6f6]'>Home</li>
            </Link>
            <Link onClick={toggleMenu} to="product" spy={true} offset={-100} duration={500} smooth={true}>
              <li className='hover:text-[#7db6f6]'>Product</li>
            </Link>
            <Link onClick={toggleMenu} to="help" spy={true} offset={-100} duration={500} smooth={true}>
              <li className='hover:text-[#7db6f6]'>Help</li>
            </Link>
            <Link onClick={toggleMenu} to="contact" spy={true} offset={0} duration={500} smooth={true}>
              <li className='hover:text-[#7db6f6]'>Contact</li>
            </Link>
            {
              isAuthenticated ? <li>
                <button
                  className="bg-[#7747FF] border-2 border-[#9b9b9b00] rounded-lg text-white px-4 py-1.5 text-base hover:border-[#fff] cursor-pointer transition"
                  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                >
                  Log out
                </button>
              </li>
                :
                <li>
                  <button
                    className="bg-[#7747FF] border-2 border-[#9b9b9b00] rounded-lg text-white px-4 py-1.5 text-base hover:border-[#fff] cursor-pointer transition"
                    onClick={() => loginWithRedirect()}
                  >
                    Log in
                  </button>
                </li>
            }
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faUser,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener to window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className='relative'>
      <div className='relative py-3 px-6 border-b-[1.5px] border-b-customDark flex md:flex-col'>
        {/* mobile-menu toggler, logo, sign in and cart */}
        <div className='w-full flex justify-between items-center relative'>
          {/* mobile-menu toggler (hide on dekstop) */}
          <div className='lg:hidden'>
            <input
              type='checkbox'
              onClick={() => setIsOpen(!isOpen)}
              className='hamburger-toggler'
            />
            <div
              onClick={() => setIsOpen(!isOpen)}
              className={`hamburger-lines ${isOpen ? 'open' : ''}`}
            >
              {/* inside the hamburger */}
              <div></div>
            </div>
          </div>

          {/* extra space (hide on mobile) */}
          <div className='hidden lg:block'>
            <span></span>
          </div>

          {/* logo */}
          <div className='flex items-center'>
            <h1>Jewelry Store</h1>
          </div>

          {/* cart (hide on desktop) */}
          <div className='lg:hidden'>
            <Link href='/cart' className='text-customDark'>
              <FontAwesomeIcon icon={faCartShopping} className='mr-1' />
              <span>1</span>
            </Link>
          </div>

          {/* sign in (hide on mobile) */}
          <div className='hidden lg:flex items-center'>
            <FontAwesomeIcon icon={faUser} className='mr-2' />
            <span>Sign in</span>
          </div>
        </div>
        {/* end of mobile-menu toggler, logo, sign in and cart */}

        {/* search box, menu and cart */}
        <div className='hidden lg:flex justify-between items-center mt-4'>
          {/* extra space */}
          <div className='block'></div>
          {/* menu */}
          <nav className='flex space-x-10 uppercase'>
            <Link href='/'>Earrings</Link>
            <Link href='/'>Rings</Link>
            <Link href='/'>Bracelets</Link>
            <Link href='/'>Fine jewelry</Link>
            <Link href='/'>Bundles</Link>
            <Link href='/'>More Collections</Link>
          </nav>
          {/* wishlist and cart */}
          <div className='hidden lg:flex space-x-6'>
            <Link href='/cart' className='text-customDark'>
              <FontAwesomeIcon icon={faHeart} className='mr-1' />
              <span>1</span>
            </Link>
            <Link href='/cart' className='text-customDark'>
              <FontAwesomeIcon icon={faCartShopping} className='mr-1' />
              <span>1</span>
            </Link>
          </div>
        </div>
      </div>

      {/* mobile-menu container */}
      <div
        className={`${isOpen ? 'open' : ''} mobile-menu flex justify-center`}
      >
        <nav className='mobile-menu-item flex flex-col space-y-4 uppercase mt-24 text-center'>
          <Link href='/'>Earrings</Link>
          <Link href='/'>Rings</Link>
          <Link href='/'>Bracelets</Link>
          <Link href='/'>Fine jewelry</Link>
          <Link href='/'>Bundles</Link>
          <Link href='/'>More Collections</Link>
        </nav>
      </div>

      {/* responsive */}
      <div className='hidden md:flex fixed justify-center text-lg text-customDark bottom-0 z-50 bg-customWhite w-full'>
        <p>Width: {windowSize.width}px</p>
        <p>Height: {windowSize.height}px</p>
      </div>
    </header>
  );
}

export default Header;

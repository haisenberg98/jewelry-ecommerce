import React from 'react';
import Button from '../components/global/Button';

function Home() {
  return (
    <>
      <Hero />
      <NewProduct />
    </>
  );
}

function NewProduct() {
  return (
    // new in
    <div className='flex flex-col p-4'>
      <div className='flex justify-between mt-10 '>
        <div className='flex w-full md:flex-row  '>
          <h2 className='mr-20'>New in</h2>
          <p className='max-w-xs break-words'>
            Just arrived from the atelier, discover the latest arrivals, explore
            our new jewelry designs.
          </p>
        </div>
        <div className='flex items-center'>
          <span>slider</span>
        </div>
      </div>
      {/* new product list */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'></div>
    </div>
  );
}

function Hero() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-4'>
      {/* fine collection */}
      <div className='flex flex-col p-4 text-customDarkGray bg-customWhite justify-between'>
        {/* year */}
        <span className='mb-10'>2023</span>
        {/* fine collection */}
        <div className='mb-20'>
          <h1 className='md:text-4xl text-4xl lg:text-6xl break-words'>
            Fine jewelry collection
          </h1>
        </div>
        {/* call to action */}
        <Button variant='primary' children='Read More' />
      </div>

      {/* featured items 2 cols */}
      <div className='hidden md:flex flex-col gap-3'>
        {/* item 1 */}
        <img
          className='object-contain h-60 bg-customWhite'
          src={'/images/6.png'}
          alt='1'
        />
        {/* item 2 */}
        <img
          className='object-contain h-60 bg-customWhite'
          src={'/images/5.png'}
          alt='2'
        />
      </div>

      {/* featured items big */}
      <div className='hidden lg:flex justify-center items-center col-span-1 md:col-span-2 lg:col-span-1 bg-customWhite'>
        <img
          className='lg:object-contain h-[490px]'
          src={'/images/9.jpg'}
          alt='3'
        />
      </div>
    </div>
  );
}

export default Home;

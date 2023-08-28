import React from 'react';
import Button from '../components/global/Button';
import ProductSlider from '../components/global/ProductSlider';
import SliderButton from '../components/global/SliderButton';

function NewProduct() {
  const newInProducts = [
    {
      id: '001',
      name: 'Sunlit Embrace',
      price: 1500,
      description: 'A symbol of timeless elegance.',
      weight: 4,
      carats: 1,
      image: '1.jpg',
      on_sale: false,
    },
    {
      id: '002',
      name: 'Gilded Harmony',
      price: 1200,
      description: 'Embodying a harmonious design.',
      weight: 3,
      carats: 1.5,
      image: '2.jpg',
      on_sale: true,
      discount_rate: 20,
    },
    {
      id: '003',
      name: 'Sunrise Glow',
      price: 2500,
      description: 'A reflection of a perfect sunrise in gold.',
      weight: 5,
      carats: 2,
      image: '3.jpg',
      on_sale: false,
    },
    {
      id: '004',
      name: 'Golden Twilight',
      price: 1800,
      description: 'The allure of the evening twilight in gold.',
      weight: 4,
      carats: 2.2,
      image: '4.jpg',
      on_sale: true,
      discount_rate: 30,
    },
    {
      id: '005',
      name: 'Lustrous Touch',
      price: 2100,
      description: 'Touched by the elegance of pure gold.',
      weight: 3,
      carats: 1.7,
      image: '5.jpg',
      on_sale: false,
    },
    {
      id: '006',
      name: 'Radiant Reflection',
      price: 1600,
      description: 'Reflecting the beauty of golden light.',
      weight: 4,
      carats: 1.9,
      image: '6.jpg',
      on_sale: true,
      discount_rate: 20,
    },
    {
      id: '007',
      name: "Aurora's Dance",
      price: 1900,
      description: 'Capturing the dance of golden flames.',
      weight: 5,
      carats: 2.3,
      image: '7.jpg',
      on_sale: false,
    },
    {
      id: '008',
      name: 'Gleaming Whisper',
      price: 1300,
      description: 'The beauty of a gentle whisper in gold.',
      weight: 3,
      carats: 1.4,
      image: '8.jpg',
      on_sale: false,
    },
    {
      id: '009',
      name: 'Golden Romance',
      price: 2200,
      description: 'A romance encapsulated in pure gold.',
      weight: 4,
      carats: 2,
      image: '9.jpg',
      on_sale: false,
    },
    {
      id: '010',
      name: 'Celestial Gleam',
      price: 2000,
      description: 'A star plucked from the golden sky.',
      weight: 5,
      carats: 2.5,
      image: '10.jpg',
      on_sale: true,
      discount_rate: 50,
    },
  ];

  return (
    <div className='flex flex-col p-4'>
      <div className='flex justify-between mt-10'>
        {/* new in */}
        <div className='flex w-full justify-between items-center px-1 lg:space-x-10 lg:justify-start'>
          <h2 className='w-1/2 text-xl md:w-auto'>New in</h2>
          <p className='text-sm text-right max-w-xs break-words md:text-base lg:text-left'>
            Just arrived from the atelier, discover the latest arrivals, explore
            our new jewelry designs.
          </p>
        </div>
        {/* slider button */}
        <div className='hidden lg:flex items-end space-x-2'>
          <SliderButton />
        </div>
      </div>
      {/* new product list */}
      <div className='flex mt-10'>
        <ProductSlider products={newInProducts} />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className='grid grid-cols-1 gap-3 p-4 md:grid-cols-2 lg:grid-cols-3'>
      {/* fine collection */}
      <div className='flex flex-col p-4 text-customDarkGray bg-customWhite justify-between max-h-[400px]'>
        {/* year */}
        <span className='mb-10'>2023</span>
        {/* fine collection */}
        <div className='mb-20'>
          <h1 className='text-3xl break-words xl:text-4xl 2xl:text-5xl'>
            Fine jewelry collection
          </h1>
        </div>
        {/* call to action */}
        <Button variant='primary' children='Read More' />
      </div>

      {/* featured items 2 cols */}
      <div className='hidden flex-col gap-3 md:flex md:max-h-[144px] lg:max-h-[195px]'>
        {/* item 1 */}
        <img
          className='object-contain bg-customWhite max-h-full'
          src={`${process.env.PUBLIC_URL}/images/0-1.png`}
          alt='1'
        />
        {/* item 2 */}
        <img
          className='object-contain bg-customWhite max-h-full'
          src={`${process.env.PUBLIC_URL}/images/0-2.png`}
          alt='2'
        />
      </div>

      {/* featured item big */}
      <div className='hidden max-h-[400px] justify-center items-center col-span-1 md:col-span-2 lg:flex lg:col-span-1 bg-customWhite'>
        <img
          className='lg:object-contain max-h-full'
          src={`${process.env.PUBLIC_URL}/images/12.jpg`}
          alt='3'
        />
      </div>
    </div>
  );
}

function Home() {
  return (
    <main>
      <Hero />
      <NewProduct />
    </main>
  );
}

export default Home;

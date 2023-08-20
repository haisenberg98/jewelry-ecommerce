import React from 'react';
import Button from '../components/global/Button';
import image1 from '../assets/images/5.png';
import image2 from '../assets/images/6.png';
import image3 from '../assets/images/9.jpg';

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper style
import 'swiper/css';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          el: '.swiper-page',
          type: 'custom',
          renderCustom: function (swiper, current, total) {
            return current + '/' + total;
          },
        }}
        navigation={{
          prevEl: '.swiper-prev',
          nextEl: '.swiper-next',
        }}
        modules={[Pagination, Navigation]}
        className='swiper-slider'
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}

function NewProduct() {
  return (
    <div className='flex flex-col p-4'>
      <div className='flex justify-between mt-10'>
        {/* new in */}
        <div className='flex w-full space-x-10 md:flex-row'>
          <h2>New in</h2>
          <p className='max-w-xs break-words'>
            Just arrived from the atelier, discover the latest arrivals, explore
            our new jewelry designs.
          </p>
        </div>
        {/* slider button */}
        <div className='flex items-center space-x-2'>
          <button className='swiper-prev swiper-custom-navigation'>
            <FontAwesomeIcon icon={faCaretLeft} className='w-3 h-3' />
          </button>
          <div className='swiper-page cursor-not-allowed'></div>
          <button className='swiper-next swiper-custom-navigation'>
            <FontAwesomeIcon icon={faCaretRight} className='w-3 h-3' />
          </button>
        </div>
      </div>
      {/* new product list */}
      <div className='flex border-2 mt-10'>
        <Slider />
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
          <h1 className='text-3xl break-words md:text-4xl xl:text-5xl '>
            Fine jewelry collection
          </h1>
        </div>
        {/* call to action */}
        <Button variant='primary' children='Read More' />
      </div>

      {/* featured items 2 cols */}
      <div className='hidden flex-col gap-3 md:flex md:max-h-36 lg:max-h-[195px]'>
        {/* item 1 */}
        <img
          className='object-contain bg-customWhite max-h-full'
          src={image1}
          alt='1'
        />
        {/* item 2 */}
        <img
          className='object-contain bg-customWhite max-h-full'
          src={image2}
          alt='2'
        />
      </div>

      {/* featured item big */}
      <div className='hidden max-h-[400px] justify-center items-center col-span-1 md:col-span-2 lg:flex lg:col-span-1 bg-customWhite'>
        <img className='lg:object-contain max-h-full' src={image3} alt='3' />
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

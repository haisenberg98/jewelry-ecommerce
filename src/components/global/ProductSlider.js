import React from 'react';
import Product from './Product';
import image1 from '../../assets/images/1.jpg';
import image2 from '../../assets/images/2.jpg';
import image3 from '../../assets/images/3.jpg';
import image4 from '../../assets/images/4.jpg';
import image5 from '../../assets/images/earrings/3.jpg';
import image6 from '../../assets/images/6.jpg';
import image7 from '../../assets/images/7.jpg';
import image8 from '../../assets/images/8.jpg';
import image9 from '../../assets/images/earrings/4.jpg';

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper style
import 'swiper/css';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

function ProductSlider() {
  return (
    <>
      <Swiper
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
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1536: {
            //XL
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination, Navigation]}
        className='swiper-slider'
      >
        <SwiperSlide>
          <Product
            image={image1}
            name='Product'
            desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veritatis quis autem deleniti'
            price='$415.00'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            image={image2}
            name='Product'
            desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veritatis quis autem deleniti'
            price='$415.00'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            image={image3}
            name='Product'
            desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veritatis quis autem deleniti'
            price='$415.00'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            image={image4}
            name='Product'
            desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veritatis quis autem deleniti'
            price='$415.00'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            image={image5}
            name='Product'
            desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veritatis quis autem deleniti'
            price='$415.00'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            image={image6}
            name='Product'
            desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veritatis quis autem deleniti'
            price='$415.00'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            image={image7}
            name='Product'
            desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veritatis quis autem deleniti'
            price='$415.00'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            image={image8}
            name='Product'
            desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veritatis quis autem deleniti'
            price='$415.00'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            image={image9}
            name='Product'
            desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veritatis quis autem deleniti'
            price='$415.00'
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ProductSlider;

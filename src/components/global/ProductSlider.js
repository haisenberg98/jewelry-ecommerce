import React from 'react';
import Product from './Product';
import image3 from '../../assets/images/9.jpg';

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
            image={image3}
            name='Product 1'
            desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veritatis quis autem deleniti'
            price='$415.00'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            image={image3}
            name='Product 1'
            desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veritatis quis autem deleniti'
            price='$415.00'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            image={image3}
            name='Product 1'
            desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veritatis quis autem deleniti'
            price='$415.00'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            image={image3}
            name='Product 1'
            desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veritatis quis autem deleniti'
            price='$415.00'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            image={image3}
            name='Product 1'
            desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veritatis quis autem deleniti'
            price='$415.00'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            image={image3}
            name='Product 1'
            desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veritatis quis autem deleniti'
            price='$415.00'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            image={image3}
            name='Product 1'
            desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veritatis quis autem deleniti'
            price='$415.00'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            image={image3}
            name='Product 1'
            desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veritatis quis autem deleniti'
            price='$415.00'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            image={image3}
            name='Product 1'
            desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veritatis quis autem deleniti'
            price='$415.00'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            image={image3}
            name='Product 1'
            desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veritatis quis autem deleniti'
            price='$415.00'
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ProductSlider;

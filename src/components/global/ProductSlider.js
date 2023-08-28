import React from 'react';
import Product from './Product';

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper style
import 'swiper/css';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

function ProductSlider(props) {
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
        {props.products.map(product => (
          <SwiperSlide key={product.id}>
            <Product
              image={`${process.env.PUBLIC_URL}/images/${product.image}`}
              name={product.name}
              description={product.description}
              price={product.price}
              onSale={product.on_sale}
              discountRate={product.discount_rate}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default ProductSlider;

import React from 'react';

function Product({ variant, image }) {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col space-y-2 w-[300px] md:w-full'>
        {/* Image */}
        <img src={image} alt='product 1' className='object-cover h-96 w-full' />

        {/* Details */}
        <div className='text-left text-base pb-4'>
          <h3>Product Name</h3>
          <p className='text-sm'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus sint
            unde maiores quidem maxime eaque.
          </p>
          <h3>$415.00</h3>
        </div>
      </div>
    </div>
  );
}

export default Product;

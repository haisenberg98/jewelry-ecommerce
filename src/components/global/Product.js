import React from 'react';

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

function Product({ variant, image, name, desc, price }) {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col space-y-2 w-[300px] md:w-full'>
        {/* Image */}
        <img src={image} alt={name} className='object-cover h-96 w-full' />

        {/* Details */}
        <div className='text-left text-base pb-4'>
          <div className='flex justify-between'>
            <h3>{name}</h3>
            <FontAwesomeIcon icon={faHeart} className='pr-2' />
          </div>
          <p className='text-sm'>{desc}</p>
          <h3>{price}</h3>
        </div>
      </div>
    </div>
  );
}

export default Product;

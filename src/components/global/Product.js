import React from 'react';

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const formatter = new Intl.NumberFormat('en-NZ', {
  style: 'currency',
  currency: 'NZD',
});

const formatPrice = price => {
  return formatter.format(price);
};

function Product({
  variant,
  image,
  name,
  description,
  price,
  onSale,
  discountRate,
}) {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col  w-[300px] md:w-full relative'>
        {/* Sale */}
        {onSale && (
          <div className='absolute top-0 left-0 p-2'>
            <div className='px-2 bg-customDark text-customWhite'>
              <span className='text-sm'>{`-${String(discountRate)}%`}</span>
            </div>
          </div>
        )}
        {/* Image */}
        <img src={image} alt={name} className='object-cover h-96 w-full' />
        {/* Details */}
        <div className='text-left text-base pb-4'>
          <div className='flex items-center justify-between'>
            <h3>{name}</h3>
            <FontAwesomeIcon icon={faHeart} className='pr-1' />
          </div>
          <p className='text-sm'>{description}</p>
          <h3>
            {/* when on sale */}
            {onSale ? (
              <>
                <span>
                  {/* Discounted Price */}
                  {formatPrice(price - (price * discountRate) / 100)}
                </span>{' '}
                <span className='text-customLightGray line-through'>
                  {formatPrice(price)}
                </span>
              </>
            ) : (
              <span>{formatPrice(price)}</span>
            )}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Product;

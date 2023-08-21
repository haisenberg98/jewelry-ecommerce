import React from 'react';

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

function SliderButton() {
  return (
    <>
      <button className='swiper-prev swiper-custom-navigation'>
        <FontAwesomeIcon icon={faCaretLeft} className='w-3 h-3' />
      </button>
      <div className='swiper-page cursor-pointer'></div>
      <button className='swiper-next swiper-custom-navigation'>
        <FontAwesomeIcon icon={faCaretRight} className='w-3 h-3' />
      </button>
    </>
  );
}

export default SliderButton;

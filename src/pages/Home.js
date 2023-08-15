import React from 'react';

function Home() {
  return (
    <section id='home-hero'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4'>
        {/* fine collection */}
        <div className='flex flex-col p-4 text-customDarkGray bg-customWhite '>
          {/* year */}
          <span className='mb-10'>2023</span>
          {/* fine collection */}
          <div className='mb-16'>
            <h1 className='md:text-4xl text-4xl lg:text-6xl break-words'>
              Fine jewelry collection
            </h1>
          </div>
          {/* call to action */}
          <button className='border-[1.5px] border-customDark py-2 text-customDark hover:text-customWhite hover:bg-customDark transition-all duration-150'>
            Read More
          </button>
        </div>

        {/* featured items 2 cols */}
        <div className='flex flex-col'>
          {/* item 1 */}
          <img src='./public/image' alt='' srcset='' />
          {/* item 2 */}
        </div>

        {/* featured items big */}
      </div>
    </section>
  );
}

export default Home;

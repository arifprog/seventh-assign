import React from 'react';
import BetaButton from './BetaButton';

function Herosection() {
  return (
    <>
      <section className="bg-[url('/image/Hero.png')] bg-no-repeat bg-center bg-cover  max-w-auto h-[573px] relative">
        <div className="w-[203px] h-[29px] absolute mt-24 mx-20">
          <h3 className='font-secondary text-2xl text-[#0FF1F6] '>AI SDRs (aiDRs)</h3>
        </div>
        
        <div className="w-[391px] h-[156px] absolute mt-[130px] mx-4 md:mx-20">
          <h1 className='font-secondary text-[64px] text-[#FFFFFF] leading-18'>
            More <span className='italic'>leads,</span> less <span className='italic'>people.</span>
          </h1>
        </div>

        <div className="w-full md:w-[450px] h-[78px] absolute mt-[290px] mx-4 md:mx-20">
          <p className='font-primary text-[16px] md:text-[20px] text-[#ffffffa2]'>Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p>
        </div>
        
        <div className="absolute mt-[400px] mx-14 md:mx-20"><BetaButton/></div>
        
      </section>
    </>
  )
}

export default Herosection;
import React from 'react'
import BetaButton from './BetaButton';
function Newera() {
  return (
    <>
    <section className="w-full h-[433px] bg-[#002228]">
        <div className="w-[149px] h-[24px] mx-auto ">
          <h3 className='font-secondary text-xl text-[#0FF1F6] py-10'>GET STARTED</h3>
        </div>
        
        <div className="w-full md:w-[640px] h-[44px] mt-[50px] mx-auto">
          <h1 className='font-secondary text-[30px] md:text-[36px] text-[#FFFFFF] md:leading-18 text-center'>
            <span className='italic'>Embrace</span> the new era of <span className='italic'>outbound</span>
          </h1>
        </div>

        <div className="w-full md:w-[480px]  h-[52px] mx-auto mt-14">
          <p className='font-primary text-[16px] md:text-[20px] text-[#ffffffa2] text-left md:text-center mx-4 md:mx-4'>Wizia lets you train, activate, and optimize aiDRs. 
          Take your outbound to new levels of performance and efficiency.</p>
        </div>
        
        <div className="mt-[80px] mx-14 md:mx-165"><BetaButton/></div>
        
      </section>

    </>
  )
}

export default Newera;
import React from 'react'

function Partners() {
  const brands = [
    '/image/BackHub logo.png',
    '/image/CableLabs logo.png',
    '/image/DBS logo.png',
    '/image/EasyEuro logo.png',
    '/image/AMD logo.png',
  ]
  return (
    <>
      <section>
        <div className="w-full h-[255px] md:h-[180px] bg-[#07292F]">
          <div className=' bg-amber- text-center font-secondary text-[16px] text-[#0FF1F6] py-1 md:py-6 '>OUR TRUSTED PARTNERS</div>

          <div className="flex flex-wrap justify-center items-center gap-4 py-">
          {brands.map((brand, index) => (
            <img key={index} src={brand} alt="brand" className="w-[128px] h-[64px]" />
          ))}
        </div>
        </div>
      
      </section>

    </>
  )
}

export default Partners;
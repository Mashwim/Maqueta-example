// import React from 'react'
import headerImg from '/images/header.jpg';

const Header = () => {
  return (
    <section id='header' className='pt-16 bg-black font-serif'>
      <div className=' relative'>
      <img src={headerImg}
      alt="kiss"
      className='bg-cover bg-fixed ... md:bg-contain md:w-full'/>
      <p className="text-white rounded-2xl mb-2 p-2 bg-gradient-to-b from-black text-center z-10 text-base absolute inset-x-12 bottom-0 w-60 h-32 md:inset-x-60 lg:inset-x-80 md:bottom-0 md:w-1/2 md:h-56 md:text-xl lg:text-3xl md:p-5 md:font-bold">
        Chaim Witz , quien cambió su nombre a Eugene Klein, mejor
        conocido como Gene Simmons, músico, empresario y actor
        israelí-estadounidense._
      </p>
      </div>
    </section>
  )
}

export default Header
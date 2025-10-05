import Image from 'next/image'
import React from 'react'
import BrandSlide from './Home/BrandSlider'

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-60  w-full h-full  object-cover"
      >
        <source src="/v.mp4" type="video/mp4" />
      </video>


      {/* Optional overlay for better contrast */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Main Content */}
      <div className="relative grid md:grid-cols-2 grid-cols-1 gap-10 container mx-auto py-32 text-white z-10 ">
        <div className="flex flex-col gap-10">
          <h1 className="md:text-6xl text-2xl font-bold">
            Expert to <br /> Digitalise Your <span className='text-[#c373fd]'>Growth</span>
          </h1>
          <p>
            We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is easy. Explore Now.
          </p>
          <div className="flex gap-3">
            <button className="btn bg-[#6230F0] border-none text-white rounded-xl">
              Explore Now
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="rounded-t-2xl relative">
         

        </div>
      </div>
    <BrandSlide/>
    </div>
  )
}

export default Hero

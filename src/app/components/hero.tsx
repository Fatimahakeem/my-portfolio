import React from 'react'
import Button from './button'
import Image from 'next/image'
import home from '../../../public/images/images.jpg'

function Hero() {
  return (
    <main className='flex lg:flex-row flex-col justify-between items-center text-center bg-[#0E2C42] p-5'>
      {/* content */}
      <section className='w-[50%] lg:ml-8'>
        <h1 className='mt-14 text-3xl font-bold text-[#EFBC75]'>Hi, my name is Fatima.</h1>
        <p className='mt-3 text-[#EFBC75]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur est eaque nesciunt iure.
          Expedita sequi, velit a debitis vero omnis.</p>

        <Button text='Learn More' />
      </section>

      {/* image */}
      <section className='p-5 lg:p-10 lg:mr-12'>
        <Image className='mt-10 rounded-full' src={home} alt='home image' width={400} height={400} loading='lazy' />
      </section>
    </main>
  )
}

export default Hero

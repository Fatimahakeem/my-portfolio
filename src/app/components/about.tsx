import React from 'react'
import about from "../../../public/images/about 2.avif"
import Image from 'next/image'
import Button from './button'

function About() {
  return (
    <main className='flex lg:flex-row flex-col justify-between items-center h-full p-8' style={{ backgroundColor: '#0E2C42' }}>
      {/* image */}
      <section className='rounded-2xl text-center'>
        <Image src={about} alt='girl' loading='lazy' width={400} height={400} className='lg:m-12 rounded-3xl' />
      </section>
      {/* content */}
      <section className='basis-1/2 text-center mx-auto mt-5' style={{ color: '#EFBC75' }}>
        <h1 className='font-bold text-2xl'>About Me</h1>
        <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, architecto non soluta vel,
          obcaecati illum, tenetur odit nostrum iste enim repellendus asperiores. 
          Cupiditate earum quia accusantium et eos aliquid id?</p>
        <div>
          <Button text='Hire me' />
        </div>
      </section>   
    </main>
  )
}

export default About

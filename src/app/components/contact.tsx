import React from 'react'
import Button from './button'

const Contact = () => {
  return (
    <main className='max-w-screen-md bg-[#0E2C42] mx-auto rounded-2xl mt-28 m-8 p-8'>
      <h2 className='font-bold text-3xl text-[#EFBC75] text-center'>Contact me</h2>
      <form className='p-12'>
        <div>
          <label className='block text-sm font-semibold text-[#EFBC75]'>
            Name: 
          </label>
          <input className='mt-1 p-2 border-2 border-[#EFBC75] w-full rounded-xl bg-transparent text-[#EFBC75] placeholder-[#EFBC75]' type='text' placeholder="Enter your name" />
        </div>
        <div>
          <label className='block text-sm font-semibold text-[#EFBC75]'>
            Email: 
          </label>
          <input className='mt-1 p-2 border-2 border-[#EFBC75] w-full rounded-xl bg-transparent text-[#EFBC75] placeholder-[#EFBC75]' type='email' placeholder='Enter your email' />
        </div>
        <div>
          <label className='block text-sm font-semibold text-[#EFBC75]'>
            Message:
          </label>
          <textarea className='mt-1 p-2 border-2 border-[#EFBC75] w-full rounded-xl bg-transparent text-[#EFBC75] placeholder-[#EFBC75]' placeholder='Write your message'></textarea>
        </div>
        <div>
          <Button text='Submit' />
        </div>
      </form>
    </main>
  )
}

export default Contact

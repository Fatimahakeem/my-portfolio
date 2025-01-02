import React from 'react'
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-[#0E2C42] p-10 text-[#EFBC75]">
      <div>
        {/* icons */}
        <section className='flex gap-4 md:gap-8 justify-center text-2xl'>
          <FaGithub className='hover:text-white cursor-pointer' />
          <FaLinkedin className='hover:text-white cursor-pointer' />
          <FaFacebook className='hover:text-white cursor-pointer' />
          <MdOutlineMail className='hover:text-white cursor-pointer' />
        </section>

        {/* links */}
        <ul className="flex gap-3 md:gap-10 justify-center mt-5 text-lg md:text-xl">
          <Link href='/'><li className='hover:text-white cursor-pointer'>Home</li></Link>
          <Link href='/about'><li className='hover:text-white cursor-pointer'>About</li></Link>
          <Link href='/skills'><li className='hover:text-white cursor-pointer'>Skills</li></Link>
          <Link href='/contact'><li className='hover:text-white cursor-pointer'>Contact us</li></Link>
        </ul>
      </div>

      <hr className='mt-5 border-[#EFBC75]' />

      <p className="text-center mt-3">Copyright designed by Fatima</p>
    </footer>
  )
}

export default Footer

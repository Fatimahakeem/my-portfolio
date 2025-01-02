'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../../public/f logo.jpg'
import Link from 'next/link'
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";

function Header() {
  let [openMenu, setopenMenu] = useState(false)

  const ToggleMenu = () => {
    setopenMenu(!openMenu)
  }

  return (
    <header className='sticky top-0'>
      <div className='flex justify-between bg-[#0E2C42] p-5'>
        {/* logo */}
        <div className='ml-10'>
          <Image src={logo} alt='logo' width={50} height={50} loading='lazy' />
        </div>
r
        {/* navbar */}
        <nav className='hidden md:block mr-10 mt-3 text-lg'>
          <ul className='flex gap-12'>
            <Link href='/'><li className='text-[#EFBC75] hover:text-white'>Home</li></Link>
            <Link href='/about'><li className='text-[#EFBC75] hover:text-white'>About</li></Link>
            <Link href='/contact'><li className='text-[#EFBC75] hover:text-white'>Contact</li></Link>
          </ul>
        </nav>

        <button className='md:hidden text-[#EFBC75] hover:text-white mt-5' onClick={ToggleMenu}>{openMenu ? <IoCloseOutline size={30} /> : <AiOutlineMenuFold size={30} />}</button>
      </div>

      {/* mobile navbar */}
      <nav className={`fixed left-0 md:hidden mr-10 text-lg bg-[#0E2C42]  w-full text-center ${openMenu ? 'block' : 'hidden'}`}>
        <ul className='flex-col gap-12 p-5 mb-5'>
          <Link href='/'><li className='text-[#EFBC75] hover:text-white mt-5'>Home</li></Link>
          <Link href='/about'><li className='text-[#EFBC75] hover:text-white mt-5'>About</li></Link>
          <Link href='/contact'><li className='text-[#EFBC75] hover:text-white mt-5'>Contact</li></Link>
        </ul>
      </nav>
      <hr className='text-[#EFBC75]'/>
    </header>
  )
}

export default Header

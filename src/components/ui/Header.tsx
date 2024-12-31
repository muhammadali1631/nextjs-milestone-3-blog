'use client'
import React, { useState } from 'react'
import { ModeToggle } from '../ModeToggle'
import Link from 'next/link'
import SearchSection from './SearchSection'
import { RxCross2 } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";



const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className=' p-4'>
      <div className='container mx-auto flex items-center justify-between space-x-2'>
        <Link href={'/'}>
        <h1 className='text-xl md:text-3xl font-bold'>Bloggo</h1>
        </Link>
        <nav className='flex items-center space-x-4'>
        <SearchSection/>
        <ul className='hidden md:flex items-center space-x-4'>
          <Link href={'/'} className='hover:text-gray-400'>Home</Link>
          <Link href={'/about'} className='hover:text-gray-400'>About</Link>
          <Link href={'/blog'} className='hover:text-gray-400'>Blog</Link>
          <Link href={'/contact'} className='hover:text-gray-400'>Contact</Link>
          </ul>
        </nav>
        <div className='hidden md:block'>
          <ModeToggle />
        </div>
        <div className='md:hidden'>
          {!isOpen && (
            <IoMenu className='md:hidden text-2xl cursor-pointer' onClick={()=>setIsOpen(!isOpen)}/>
          )}
          {isOpen && (
          <RxCross2 className='md:hidden text-2xl cursor-pointer' onClick={()=>setIsOpen(!isOpen)}/>
          )} 
        </div>
      </div>
      {isOpen && (
      <div className='flex flex-col items-center md:hidden py-2 space-y-2 relative'>
      <Link href={'/'} className='hover:text-gray-400' onClick={()=>setIsOpen(!isOpen)}>Home</Link>
          <Link href='#' className='hover:text-gray-400' onClick={()=>setIsOpen(!isOpen)}>About</Link>
          <Link href={'/blog'} className='hover:text-gray-400' onClick={()=>setIsOpen(!isOpen)}>Blog</Link>
          <Link href='#' className='hover:text-gray-400' onClick={()=>setIsOpen(!isOpen)}>Contact</Link>
          <div className='absolute top-0 left-2 md:hidden'>
          <ModeToggle />
        </div>
      </div>
      )}
    </header>
  )
}

export default Header
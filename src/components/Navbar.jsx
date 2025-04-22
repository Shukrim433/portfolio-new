import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between py-8 font-custom'>
      <h1 className='text-red cursor-pointer text-[20px]'>SM</h1>

      <div className='flex gap-8 '>
        <p className='cursor-pointer'>Projects</p>
        <p className='cursor-pointer'>About</p>
        <p className='cursor-pointer'>Contact</p>
      </div>
    </div>
  )
}

export default Navbar
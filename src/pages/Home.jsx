import React from 'react'
import Carousel from '../components/Carousel'

const Home = () => {
  return (
    <div className='flex flex-col gap-8 py-10 font-custom'>
      <h1 className='text-6xl sm:text-8xl lg:text-9xl'>PORTFOLIO<span className='text-red'>.</span></h1>
      <div className='flex justify-between'>
        <p className='text-xl sm:text-2xl lg:text-4xl' >Shukri Mohamed</p>
        <p className='text-xl sm:text-2xl lg:text-4xl'>Web Developer</p>
      </div>


     <Carousel/>
    </div>
  )
}

export default Home
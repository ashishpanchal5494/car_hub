"use client"

import React from 'react'
import  CustomButton  from './CustomButton'
import Image from 'next/image'
import  SearchBar  from './SearchBar'
function Hero({setManufacturer,  setModel }) {
    const handleScroll = () => {

    }
  return (
    <div className='hero ' >
       <div className='backdrop image w-full h-full absolute top-0 left-0 opacity-50 overflow-hidden'>
             <Image  src='/wallpaper2.jpg' fill object-cover object-center   />

        </div>
        <div className="opacity-layer " />
        <div className='flex-1 pt-36 padding-x relative'>
            <h1 className='hero__title slate'>
                Find book, or rent a car - quickly
                and easily!
            </h1>
            <p className='hero__subtitle to-slate-50 '>
                streamline your car rental experience
                with our effortless booking process.
            </p>

            

            <SearchBar 
           setManufacturer={setManufacturer}
           setModel={setModel}
             />
        
            

            <CustomButton
            title="Explore Cars"
            containerStyles="bg-primary-blue
            text-white rounded-full mt-10"
            handleClick= {()=> {handleScroll}}
            />
        </div>
        <div className='hero__image-container'>
            {/* <div className='hero__image'>
                <Image src="/hero.png" alt='hero'
                fill className='object-contain' />
            </div>
                <div className='hero__image-overlay'/> */}
        </div>
   
    </div>
  )
}

export default Hero

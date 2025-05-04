"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';


export default function HeroSection() {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12 px-20'>
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                    Hello! Im
                    <span className='text-[#ffb800]'> Armand</span>
                </h1>
                <h2 className='text-white mb-4 text-2xl lg:text-4xl font-bold'>
                    <TypeAnimation
                    sequence={[
                        'Frontend Developer',
                        3000,
                        'UI/UX Designer',
                        3000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    />
                </h2>
                <p className='text-white mb-4 text-base sm:text-lg lg:text-xl font-light'>
                    Omke gams omke gams omke gams omke gams omke gams omke gams omke gams omke gams 
                </p>
                <div>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4  text-black bg-white hover:bg-slate-200'>Hire me!</button>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 text-white bg-transparent hover:bg-slate-800 border border-white mt-3'>Download CV</button>
                </div>
            </div>
            <div className='col-span-5 place-self-center mt-10 lg:mt-0'>
                <div className="rounded-full bg-white w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
                    <Image 
                        src="/images/hero.jpeg" 
                        alt="Hero Image"
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' 
                        width={100} 
                        height={100}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

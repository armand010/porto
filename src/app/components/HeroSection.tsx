"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12 px-20 py-30'>
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                        Hello! Im
                            <span className='text-slate-500'> Armand</span>
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
                        I am a Frontend Developer and UI/UX Designer based in Probolinggo, Indonesia, 
                        with a strong passion for crafting user interfaces for websites and mobile applications. 
                        Currently, I am expanding my skills in Backend Development.    
                    </p>
                    <div>
                        <a 
                            href="https://github.com/armand010" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4  text-black bg-white hover:bg-slate-200'>
                                Check My Github!
                            </button>
                        </a>
                        <a href="/file/Armand_CV.pdf" download="Armand_CV.pdf">
                            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 text-white bg-transparent hover:bg-slate-800 border border-white mt-3'>
                                Download CV
                            </button>
                        </a>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-10 lg:mt-0'>
                    <div className="rounded-full bg-white w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
                        <Image 
                            src="/images/hero.jpg" 
                            alt="Hero Image"
                            fill
                            className='object-cover rounded-full'
                        />
                    </div>
                </div>
            </div>
    </section>
    )
}

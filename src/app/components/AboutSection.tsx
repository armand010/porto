"use client"
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA=[
    {
        title: "Skills",
        id: "skills",
        content:(
            <ul className='list-disc pl-4'>
                <li>MBG</li>
                <li>dancing</li>
                <li>HIDUP JOKOWI!!!</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content:(
            <ul className='list-disc pl-4'>
                <li>militer</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content:(
            <ul className='list-disc pl-4'>
                <li>second account</li>
                <li>orba</li>
                <li>HIDUP JOKOWI!!!</li>
            </ul>
        )
    },
]

const AboutSection = () => {
    const [tab, setTab] = useState('skills')
    const [, startTransition] = useTransition()
    interface HandleTabChange {
        (id: string): void;
    }

    const handleTabChange: HandleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className='text-white '>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-10 sm:py-8 sm:px-40'>
                <Image src="/images/about.jpg" alt="About section image" width={400} height={400} />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full justify-center'>
                    <h2 className='text-4xl font-bold text-white mb-4'>
                        About Me
                    </h2>
                    <p className='text-base md:text-lg'>
                        Omke Gams omke gams omke gams omke gams omke gams omke gams omke gams omke gams
                        Omke Gams omke gams omke gams omke gams omke gams omke gams omke gams omke gams
                    </p>
                    <div className='flex flex-row justify-start mt-5'>
                        <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>
                            Skills
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange('education')} active={tab === 'education'}>
                            Education
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange('experience')} active={tab === 'experience'}>
                            Experience
                        </TabButton>
                    </div>
                    <div className='mt-3'>{TAB_DATA.find((t) => t.id === tab)?.content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection